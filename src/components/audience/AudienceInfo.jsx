import React from "react";
import classes from "./AudienceInfo.module.css";
import Image from "next/image";

const AudienceInfo = () => {
    return (
        <div className={classes.audienceInfo}>
            <div className={classes.states}>
                <div>
                    <h3>Mens</h3>
                    <div className={classes.statesDetail}>
                        <Image src={"/images/man.svg"} alt="" width={25} height={50} />
                        <div className={classes.statesDetailNum}>
                            <h4>65%</h4>
                            <p>&darr; 16.8</p>
                        </div>
                    </div>
                </div>
                <Image src={"/images/Bar-Chart-blue.svg"} alt="" width={100} height={50} />
            </div>
            <div className={classes.states}>
                <div>
                    <h3>Womens</h3>
                    <div className={classes.statesDetail}>
                        <Image src={"/images/woman.svg"} alt="" width={25} height={50} />
                        <div className={classes.statesDetailNum}>
                            <h4>65%</h4>
                            <p>&darr; 16.8</p>
                        </div>
                    </div>
                </div>
                <Image src={"/images/Bar-Chart-red.svg"} alt="" width={100} height={50} />
            </div>
            <div className={classes.states}>
                <div>
                    <h3>Womens</h3>
                    <div className={classes.statesDetail}>
                        <Image src={"/images/man.svg"} alt="" width={20} height={35} />
                        <Image src={"/images/woman.svg"} alt="" width={20} height={35} />
                        <div className={classes.statesDetailNum}>
                            <h4>65%</h4>
                            <p>&darr; 16.8</p>
                        </div>
                    </div>
                </div>
                <Image src={"/images/Bar-Chart-green.svg"} alt="" width={100} height={50} />
            </div>
            <div className={classes.audienceInfoDetails}>
                <p>Who lives in United states and India Who Are better at 18-24 Females only selected Ad will be in english only</p>
            </div>
        </div>
    );
};

export default React.memo(AudienceInfo);
