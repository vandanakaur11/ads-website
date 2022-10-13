import React from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import { Drawer, IconButton, MenuItem, Menu } from "@material-ui/core";
import Link from "next/link";
import { Menu as MenuIcon, Search } from "@material-ui/icons";
import Sidebar from "../sidebar/Sidebar";

const Header = (props) => {
    const { open, showSidebar, toggleHandler, session } = props;
    const [notificationAnchor, setNotificationAnchor] = React.useState(null);
    const [settingAnchor, setSettingAnchor] = React.useState(null);

    const openNotificationMenu = Boolean(notificationAnchor);
    const openSettingMenu = Boolean(settingAnchor);
    const handleClick = (event, anchorSetter) => {
        anchorSetter(event.currentTarget);
    };

    const handleClose = () => {
        setNotificationAnchor(null);
        setSettingAnchor(null);
    };

    const drawer = (
        <Drawer open={open} onClose={toggleHandler}>
            <div className={classes.drawer}>
                <div className={classes.drawerImage} onClick={toggleHandler}>
                    <Image src="/images/logo.svg" alt="" width={175} height={32} />
                </div>
                <Sidebar />
            </div>
        </Drawer>
    );

    return (
        <header className={classes.header}>
            <div className={classes.headerLogo}>
                {showSidebar && session && (
                    <IconButton onClick={toggleHandler}>
                        <MenuIcon />
                    </IconButton>
                )}
                <Link href="/">
                    <a>
                        <Image src="/images/logo.svg" alt="" width={175} height={32} />
                    </a>
                </Link>
            </div>
            <div className={classes.headerActions}>
                <div className={classes.search}>
                    <input type="text" placeholder="Search For help" />
                    <IconButton>
                        <Search />
                    </IconButton>
                </div>
                <IconButton onClick={(e) => handleClick(e, setNotificationAnchor)}>
                    <Image src="/images/Notification.svg" alt="Notifications" width="25" height="25" />
                </IconButton>
                <IconButton onClick={(e) => handleClick(e, setSettingAnchor)}>
                    <Image src="/images/Setting.svg" alt="Notifications" width="25" height="25" />
                </IconButton>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={notificationAnchor}
                open={openNotificationMenu}
                onClose={(e) => handleClose(e, setNotificationAnchor)}
            >
                <MenuItem onClick={(e) => handleClose(e, setNotificationAnchor)}>No Notifications</MenuItem>
            </Menu>

            <Menu id="basic-menu" anchorEl={settingAnchor} open={openSettingMenu} onClose={(e) => handleClose(setSettingAnchor)}>
                <MenuItem onClick={(e) => handleClose(setSettingAnchor)}>Profile</MenuItem>
                <MenuItem onClick={(e) => handleClose(setSettingAnchor)}>Settings</MenuItem>
                <MenuItem onClick={(e) => handleClose(setSettingAnchor)}>Logout</MenuItem>
            </Menu>
            {showSidebar && drawer}
        </header>
    );
};

export default Header;
