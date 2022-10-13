import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import Image from "next/image";
import classes from "./HomePage.module.css";
import HomeAds from "./HomeAds";
import { getSession } from "next-auth/client";

const HomePage = () => {
    useEffect(() => {
        getSession().then((session) => {
            if (!session) {
                window.location.href = "/auth";
            }
        });
    }, []);

    return (
        <div className={classes.home}>
            <div className={classes.homeTop}>
                <section className={classes.chart}>
                    <div className={classes.chartDetails}>
                        {btnList.map(({ title, number, rate }, index) => (
                            <div key={index} className={classes.chartContent}>
                                <Button startIcon={<span className={classes.dotFilled} />} endIcon={<ExpandMore />}>
                                    {title}
                                </Button>
                                <h2>{number}</h2>
                                <h3> &uarr; {rate}%</h3>
                            </div>
                        ))}
                    </div>
                    <div className={classes.chartImage}>
                        <Image priority src={"/images/graph-xl.png"} alt="Chart" width={500} height={240} layout="responsive" />
                    </div>
                </section>
                <section className={classes.demographicsMain}>
                    <div className={classes.demographics}>
                        <div className={classes.demographicsHeader}>
                            <h3>Demographics</h3>
                            <div className={classes.demographicsHeaderData}>
                                <div className={classes.demographicsPerson}>
                                    <Image src={"/images/man.svg"} alt={"Man"} width={16} height={35} layout="fixed" />
                                    <span>65%</span>
                                </div>
                                <div className={classes.demographicsPerson}>
                                    <Image src={"/images/woman.svg"} alt={"Man"} width={18} height={35} layout="fixed" />
                                    <span>35%</span>
                                </div>
                                <div className={classes.demographicsPerson}>
                                    <Image src={"/images/PieChart.png"} alt={"Man"} width={40} height={40} layout="fixed" />
                                </div>
                            </div>
                        </div>
                        <div className={classes.demographicsCompatible}>
                            <div className={classes.demographicsTopPlacements}>
                                <h3>TOP PLACEMENTS</h3>
                                {placements.map(({ title, rate, url }, index) => (
                                    <div key={index} className={classes.compatibleData}>
                                        <div className={classes.compatibleDataLeft}>
                                            <Image src={`/images/${url}`} alt={title} height={16} width={index > 1 ? 25 : 10} />
                                            <p>{title}</p>
                                        </div>
                                        <h3>{rate}%</h3>
                                    </div>
                                ))}
                            </div>
                            <div className={classes.demographicsTopPlacements}>
                                <h3>TOP REGIONS</h3>
                                {regions.map(({ title, rate }, index) => (
                                    <div key={index} className={classes.compatibleData}>
                                        <div className={classes.compatibleDataLeft}>
                                            <p>{title}</p>
                                        </div>
                                        <h3>{rate}%</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={classes.demographicsBottom}>
                        <div className={classes.demographicsBottomHeader}>
                            <h3>RULE ACTIVITIES</h3>
                            <h3>
                                RULE ACTIONS <b>345</b>
                            </h3>
                        </div>
                        <div className={classes.demographicsBottomBar}>
                            <p>
                                Adset Pused: <b>CMP 12 - FM AZ Conversations Dogs..</b>
                            </p>
                            <span>5 hours</span>
                        </div>
                    </div>
                </section>
            </div>
            <div className={classes.homeBottom}>
                {images.map((url) => (
                    <HomeAds key={url} url={url} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;

const placements = [
    { url: "facebook.svg", title: "Feed", rate: "65" },
    { url: "facebook.svg", title: "Right Column", rate: "13" },
    { url: "instagram.svg", title: "Stories", rate: "4" },
];

const regions = [
    { title: "Texas", rate: "34" },
    { title: "Washington", rate: "25" },
    { title: "Dallas", rate: "5" },
];

const btnList = [
    { title: "Impressions", number: "756,560", rate: "34.5" },
    { title: "Clicks", number: "2,470", rate: "23.5" },
    { title: "Spent", number: "1,560", rate: "10.5" },
    { title: "CTR", number: "3.45%", rate: "14.5" },
];

const images = ["ads.webp", "ads2.jpg"];
