import React from "react";
import classes from "./Sidebar.module.css";
import Image from "next/image";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/client";

const Sidebar = () => {
    const router = useRouter();

    const handleLogout = () => {
        signOut();
    };

    console.log(router.pathname);

    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarProfile}>
                <span className={classes.sidebarProfileImage}>
                    <Image src="/images/person.jpg" alt="" height={75} width={75} />
                </span>
                <h3>Hello Anderson</h3>
                <Link href="/">
                    <a>
                        <Button
                            className={classes.dashboardBtn}
                            startIcon={<Image src="/images/dashboard.svg" alt="" width={30} height={20} layout="fixed" />}
                        >
                            Dashboard
                        </Button>
                    </a>
                </Link>
                {router.route === "/" && (
                    <Link href="/ads">
                        <a>
                            <Button className={classes.campaignBtn} endIcon={<Add />}>
                                New Campaign
                            </Button>
                        </a>
                    </Link>
                )}
            </div>
            {router.route !== "/" && (
                <List className={classes.sidebarList} component={"nav"}>
                    {list.map(({ title, url, route }, index) => {
                        const active = route === router.pathname;
                        return (
                            // <Link key={index} href={route}>
                            <a key={index}>
                                <ListItem button className={`${classes.link} ${active ? classes.activeLink : null}`}>
                                    <Image src={`/images/${url}`} alt="" height={20} width={20} layout="fixed" />
                                    <ListItemText style={{ marginLeft: ".8rem" }} primary={title} />
                                </ListItem>
                            </a>
                            // </Link>
                        );
                    })}
                </List>
            )}
            <Button
                style={router.route !== "/" ? { marginBottom: 0, marginTop: 50 } : null}
                startIcon={<Image src={"/images/logoutAction.svg"} alt="" width="25" height="25" />}
                onClick={handleLogout}
            >
                Logout
            </Button>
        </div>
    );
};

export default Sidebar;

const list = [
    { title: "Types of Ads", url: "cursor.png", route: "/ads" },
    { title: "The Audience", url: "people.png", route: "/audience/[audienceId]" },
    { title: "Video, Text, Audio, Picture", url: "video.png", route: "/ads-content" },
    { title: "Choose Retargeting or not", url: "calender.png", route: "/retargeting" },
    { title: "Preview", url: "preview.png", route: "/preview" },
    { title: "Waiting for approval", url: "approval.png", route: "/approval" },
];
