import { Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import classes from "./RetargetingPage.module.css";
import Link from "next/link";

const RetargetingPage = () => {
    return (
        <div className={classes.retargeting}>
            <h2>RetargetingPage</h2>
            <div className={classes.retargetingMain}>
                <div className={classes.select}>
                    <h3>Engagements</h3>
                    <Autocomplete
                        style={{ margin: "1rem 0" }}
                        id="tags-filled"
                        options={audienceTitle.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" placeholder="People who view atleast 3 seconds of your add." />
                        )}
                    />
                </div>
                <div className={classes.select}>
                    <h3>Select from your template</h3>
                    <Autocomplete
                        style={{ margin: "1rem 0" }}
                        id="tags-filled"
                        options={audienceTitle.map((option) => option.title)}
                        renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select in the past" />}
                    />
                </div>
                <div className={classes.select}>
                    <Link href="/retargeting/previous-ads">
                        <a>
                            <Button>In the Past</Button>
                        </a>
                    </Link>
                </div>
            </div>
            <Link href="/preview">
                <a>
                    <Button>Next</Button>
                </a>
            </Link>
        </div>
    );
};

export default RetargetingPage;

const audienceTitle = [{ title: "ABC MY Audience", year: 1994 }];
