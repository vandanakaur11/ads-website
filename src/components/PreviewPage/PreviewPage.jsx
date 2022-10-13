import React from "react";
import classes from "./PreviewPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@material-ui/core";

const PreviewPage = () => {
    return (
        <div className={classes.preview}>
            <h2>Preview</h2>
            <div className={classes.previewMain}>
                <div className={classes.previewProfile}>
                    <div className={classes.previewProfileImage}>
                        <Image src={"/images/person.jpg"} alt="Owner" width="75" height="75" />
                    </div>
                    <div className={classes.previewProfileContent}>
                        <h3>Mr. Anderson</h3>
                        <span>Sponsored</span>
                    </div>
                </div>
                <div className={classes.previewBanner}>
                    <Image src={"/images/adsBanner.png"} alt="" width="850" height="400" layout="responsive" />
                    <p>
                        Preview the ads dolor sit amet consectetur, adipisicing elit. Quam, voluptatibus enim molestiae, iure qui
                        repudiandae quis autem doloribus fugiat cumque neque quia.
                    </p>
                </div>
            </div>
            <Link href="/approval">
                <a>
                    <Button>Next</Button>
                </a>
            </Link>
        </div>
    );
};

export default PreviewPage;
