import React, { useEffect, useRef, useState } from "react";
import classes from "./AuthPage.module.css";
import Image from "next/image";
import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import { getSession, signIn } from "next-auth/client";
import LogoutImage from "../../../public/images/logout.svg";
import LoginImage from "../../../public/images/login.svg";

const createUser = async (user) => {
    const data = await (
        await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        })
    ).json();
    return data;
};

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    const fnameInputRef = useRef();
    const lnameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const conPasswordInputRef = useRef();

    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                window.location.href = "/";
            } else {
                setLoading(false);
            }
        });
    }, []);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitsHandler = async (e) => {
        e.preventDefault();

        const fname = fnameInputRef.current?.value;
        const lname = lnameInputRef.current?.value;
        const email = emailInputRef.current?.value;
        const password = passwordInputRef.current?.value;
        const conPassword = conPasswordInputRef.current?.value;

        const user = { fname, lname, email, password };

        if (isLogin) {
            // provider, and the second argument is the credentials parameter of the authorize method.( at backend )
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (!result.error) {
                // set some auth state
                window.location.href = "/";
            }

            console.log({ result });
        } else {
            try {
                const data = await createUser(user);
                console.log({ data });
            } catch (err) {
                console.log({ err });
            }
        }
    };

    const actionText = isLogin ? "Login" : "Create account";
    if (loading) return null;

    return (
        <div className={classes.auth}>
            <div className={classes.authImage}>
                <Image src={isLogin ? LoginImage : LogoutImage} alt="" width="750" height="550" />
            </div>
            <form onSubmit={submitsHandler} className={classes.authContainer}>
                <div className={classes.authImage}>
                    <Image src={`/images/logo.svg`} alt="" width="350" height="75" />
                </div>
                <h1>{actionText}</h1>

                {!isLogin && (
                    <>
                        <div className={classes.inputContainer}>
                            <h3>First Name</h3>
                            <input ref={fnameInputRef} required type="text" placeholder="Please enter your First Name" />
                        </div>
                        <div className={classes.inputContainer}>
                            <h3>Last Name</h3>
                            <input ref={lnameInputRef} required type="text" placeholder="Please enter your Last Name" />
                        </div>
                    </>
                )}

                <div className={classes.inputContainer}>
                    <h3>Email</h3>
                    <input ref={emailInputRef} type="email" required placeholder="Please enter your email address" />
                </div>
                <div className={classes.inputContainer}>
                    <h3>Password</h3>
                    <input ref={passwordInputRef} type="password" required placeholder="Please enter your Password" />
                    {isLogin && <FormControlLabel control={<Checkbox style={{ color: "#266ef1" }} />} label="Remember me" />}
                </div>
                {!isLogin && (
                    <div className={classes.inputContainer}>
                        <h3>Confirm Password</h3>
                        <input ref={conPasswordInputRef} required type="password" placeholder="Please confirm your Password" />
                    </div>
                )}
                <Button variant="contained" type="submit">
                    {actionText}
                </Button>
                <p onClick={switchAuthModeHandler}>{isLogin ? "Already have an account? Log in" : "Not a memeber? Sign up"}</p>
            </form>
        </div>
    );
};

export default AuthPage;
