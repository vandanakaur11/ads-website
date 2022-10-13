import React from "react";
import classes from "./Approval.module.css";
import { List, ListItem } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";

const ApprovalPage = () => {
    return (
        <div className={classes.approval}>
            <h2>Waiting for Approval</h2>
            <List component="ul" className={classes.approvalList}>
                {[...Array(2)].map((_, index) => (
                    <Link key={index} href="/preview/post">
                        <a>
                            <ListItem button className={classes.approvalListItem}>
                                <h4>Add of Website post</h4>
                                <span className={classes.listSpan} />
                                <p>9-14-21</p>
                                <span className={classes.listSpan} />
                                <h3>Pending...</h3>
                            </ListItem>
                        </a>
                    </Link>
                ))}
            </List>
            <div className={classes.approvalImage}>
                <Image src="/images/waiting-approval.svg" alt="Waiting for Approval" width={650} height={650} />
            </div>
        </div>
    );
};

export default ApprovalPage;
