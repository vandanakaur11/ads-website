import React, { useState } from "react";
import classes from "./AdsContentPage.module.css";
import Image from "next/image";
import { Button, Collapse } from "@material-ui/core";
import Link from "next/link";

const AdsContentPage = () => {
    const [active, setActive] = useState("");

    const activeHandler = (state) => {
        if (active) return setActive("");
        setActive(state);
    };

    const urlBuilder = (state) => {
        if (state) return state.replace(" ", "-").toLowerCase();
    };

    return (
        <div className={classes.adsContent}>
            <h2>Video,Text, Audio, Picture</h2>
            <div className={classes.adsContentContainer}>
                {list.map((item, index) => {
                    const url = `/images/${urlBuilder(item)}${active === item ? "-active" : ""}.svg`;

                    console.log({ url, active });

                    return (
                        <div
                            key={index}
                            className={`${classes.box} ${active === item ? classes.boxActive : null}`}
                            onClick={() => activeHandler(item)}
                        >
                            <Image src={url} alt="" height="55" width="55" layout="fixed" />
                            <h3>{item}</h3>
                            <p>Canvas of the dolor sit amet consectetur is adipisicing elit. Ipsam.</p>
                        </div>
                    );
                })}
            </div>
            <Collapse in={active}>
                <div className={classes.adsContentActive}>
                    <div className={classes.dropBox}>
                        <Image src={`/images/${urlBuilder(active)}.svg`} alt="" height="65" width="65" layout="fixed" />
                        <p>Max 10 MB</p>
                        <h3>Drag and drop your file here.</h3>
                    </div>
                </div>
            </Collapse>
            {active && (
                <Link href="/retargeting">
                    <a>
                        <Button>Next</Button>
                    </a>
                </Link>
            )}
        </div>
    );
};

export default AdsContentPage;

const list = ["Canvas", "Single Image", "Single Video", "Slideshow"];
