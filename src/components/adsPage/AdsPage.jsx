import { Button, Dialog } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import classes from "./AdsPage.module.css";
import Box from "./Box";
import Link from "next/link";

const AdsPage = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");

    const handleToggle = useCallback((title) => {
        setOpen((presState) => !presState);
        if (typeof title === "string") setTitle(title);
    }, []);

    const dialog = (
        <Dialog open={open} fullWidth={true} maxWidth={"xs"} onClose={() => setOpen(false)}>
            <div className={classes.dialog}>
                <h3>{title}</h3>
                <input placeholder="Website Link" />
                <Button onClick={handleToggle}>Save & Continue</Button>
            </div>
        </Dialog>
    );

    return (
        <div className={classes.ads}>
            <h2>Type of Ads</h2>
            <div className={classes.adsContainer}>
                {adsList.map((item, i) => (
                    <Box key={i} classes={classes} item={item} handleToggle={handleToggle} />
                ))}
            </div>
            <Link href="/audience/target-audiences">
                <a>
                    <Button>Next</Button>
                </a>
            </Link>
            {dialog}
        </div>
    );
};

export default AdsPage;

const adsList = [
    { title: "Get More Sales", url: "sales" },
    { title: "Get More Leads", url: "leads" },
    { title: "Get More Website Visit", url: "union" },
    { title: "Product And Brand consideration", url: "product" },
    { title: "Create campaign", url: "campaign" },
    { title: "App promotion", url: "promotion" },
    { title: "Local store visits & promotions", url: "store" },
    { title: "Brand awareness and reach", url: "brand" },
];
