import React, { useState } from "react";
import { Button, Collapse, Switch } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import Image from "next/image";
import Link from "next/link";
import classes from "./HomeAds.module.css";

const HomeAds = ({ url }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={classes.homeBottom}>
            <section className={classes.homeBottomMain}>
                <div className={classes.homeBottomMainHeader} style={show ? { borderBottom: "1px solid lightgray" } : null}>
                    <div className={classes.homeBottomMainHeaderLeft}>
                        <Switch
                            color="default"
                            style={{ color: "var(--dark-gray)" }}
                            className={classes.switch}
                            value={show}
                            onChange={() => setShow((prevState) => !prevState)}
                        />
                        <h4>
                            Laykers - Hoody - F - 24 - 30 Adset /{" "}
                            <Link href="/approval">
                                <a>
                                    <span>2Adset</span> / <span>8 Ads</span>
                                </a>
                            </Link>
                        </h4>
                    </div>
                    <div className={classes.homeBottomMainHeaderRight}>
                        <Button startIcon={<Image src={"/images/test.png"} alt="" width="20" height="25" layout="fixed" />}>
                            Assign Rule
                        </Button>
                        <Button>Edit Compaign</Button>
                    </div>
                </div>
                <Collapse in={show}>
                    <div className={classes.homeBottomComplex}>
                        <div className={classes.homeBottomImage}>
                            <Image className={classes.homeBottomAvatar} src={`/images/${url}`} alt="" width={1200} height={800} />
                        </div>
                        <div className={classes.homeBottomComplexData}>
                            <div className={classes.homeBottomComplexDataTop}>
                                <div className={classes.chartDetails}>
                                    <div className={classes.chartContent}>
                                        <Button startIcon={<span className={classes.dotFilled} />} endIcon={<ExpandMore />}>
                                            Engagements
                                        </Button>
                                        <h2>{(1, 456)}</h2>
                                        <h3> &uarr; {"34.5"}%</h3>
                                    </div>
                                    <div className={classes.chartContent}>
                                        <Button startIcon={<span className={classes.dotFilled} />}>CPA</Button>
                                        <h2>$0.03</h2>
                                        <h3> &uarr; {"23.5"}%</h3>
                                    </div>
                                </div>
                                <Image src="/images/graph.png" alt="" width={400} height={100} />
                            </div>
                            <div className={classes.homeBottomComplexDataBottom}>
                                {complexData.map(({ number, title }, index) => (
                                    <div key={index} className={classes.chartContent}>
                                        <Button>{title}</Button>
                                        <h2>{number}</h2>
                                        <h3> &uarr; {"34.5"}%</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Collapse>
            </section>
        </div>
    );
};

export default HomeAds;

const complexData = [
    { title: "Reach", number: "756,560" },
    { title: "CPM", number: "1,09" },
    { title: "Spent", number: "8,5" },
    { title: "Roas", number: "56,13" },
    { title: "Revenue", number: "6,55" },
    { title: "Impress", number: "7,510" },
    { title: "Ctr", number: "1,5" },
];
