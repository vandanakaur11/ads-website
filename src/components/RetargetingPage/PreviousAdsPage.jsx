import React from "react";
import classes from "./PreviousAdsPage.module.css";
import Image from "next/image";

const PreviousAdsPage = () => {
    return (
        <div className={classes.previousAds}>
            <h2>Select from your template</h2>
            <div className={classes.previousAdsImage}>
                <Image
                    src="/images/previous-ads-not-found.svg"
                    alt="Previous adds not found"
                    width="400"
                    height="300"
                    layout="responsive"
                />
            </div>
        </div>
    );
};

export default PreviousAdsPage;
