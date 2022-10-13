import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./header/Header";
import classes from "./layout.module.css";
import Sidebar from "./sidebar/Sidebar";
import { getSession } from "next-auth/client";

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);
    const [open, setOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 992) {
            setShowSidebar(true);
        }

        window.addEventListener("resize", () => {
            setOpen(false);
            if (window.innerWidth < 992) {
                setShowSidebar(true);
            }
            if (window.innerWidth > 991) {
                setShowSidebar(false);
            }
        });

        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);

    const toggleHandler = () => {
        setOpen((prevState) => !prevState);
    };

    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                console.log("session");
                setSession(session);
            } else {
                console.log("not session");
            }
            setLoading(false);
        });
    }, []);

    if (!session && loading) return null;

    return (
        <div className={classes.layout}>
            <Head>
                <title>Faaf Ads</title>
                <meta name="description" content="This is the dashboard of faaf ads" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {session ? (
                <>
                    <Header open={open} showSidebar={showSidebar} toggleHandler={toggleHandler} session={session} />
                    <main className={classes.mainContainer}>
                        {!showSidebar && <Sidebar />}
                        {children}
                    </main>
                </>
            ) : (
                children
            )}
        </div>
    );
};

export default Layout;
