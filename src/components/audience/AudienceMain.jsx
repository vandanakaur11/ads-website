import React, { useState } from "react";
import classes from "./AudienceSteps.module.css";
import { Button } from "@material-ui/core";
import Link from "next/link";
import AudienceInfo from "./AudienceInfo";
import dynamic from "next/dynamic";

const TargetAudience = dynamic(() => import("./audience-steps/TargetAudience"));
const Demographics = dynamic(() => import("./audience-steps/Demographics"));
const UserInterests = dynamic(() => import("./audience-steps/UserInterests"));
const TermsAndTags = dynamic(() => import("./audience-steps/TermsAndTags"));

const Audience = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ["Target Audience", "Demographics", "User Interests", "Terms and Tags"];
    const [interestsData, setInterestsData] = useState(interests);
    const [selectedInterests, setSelectedInterests] = useState([{ key: 0, title: "Football" }]);
    const [travellersData, setTravellersData] = useState(travellers);
    const [selectedTravellers, setSelectedTravellers] = useState([{ key: 0, title: "Traveller" }]);

    const handleDelete = (chipToDelete, setData) => setData((interests) => interests.filter((chip) => chip !== chipToDelete));
    const handleChange = (newValue, data, setData) => {
        const selected = [...data];
        selected.push(newValue);
        setData([...new Set(selected)]);
    };

    const subProps = {
        interestsData,
        setInterestsData,
        selectedInterests,
        setSelectedInterests,
        travellersData,
        setTravellersData,
        selectedTravellers,
        setSelectedTravellers,
        handleDelete,
        handleChange,
        travellers,
        interests,
    };

    return (
        <div className={classes.audienceWrapper}>
            <div className={classes.audienceContainer}>
                <div className={classes.audiencesMain1}>
                    <h3>The audience</h3>
                    <div className={classes.audiences}>
                        <div className={classes.audiencesSteps}>
                            {steps.map((step, index) => (
                                <>
                                    <div
                                        key={index}
                                        className={`${classes.audiencesStep} ${activeStep < index ? classes.activeStep : null}`}
                                    >
                                        <h2>{1 + index}</h2>
                                        <h3>{step}</h3>
                                    </div>
                                    <span style={index < activeStep ? { border: `1px dashed var(--primary-color)` } : null}></span>
                                </>
                            ))}
                        </div>
                        {!activeStep ? (
                            <TargetAudience classes={classes} />
                        ) : activeStep === 1 ? (
                            <Demographics classes={classes} />
                        ) : activeStep === 2 ? (
                            <UserInterests classes={classes} actions={subProps} />
                        ) : (
                            <TermsAndTags classes={classes} actions={subProps} />
                        )}
                    </div>
                </div>
                <AudienceInfo />
            </div>
            <Link href={activeStep < 3 ? `/audience/${steps[activeStep + 1].replace(/\s/g, "-").toLowerCase()} ` : "/ads-content"}>
                <a>
                    <Button onClick={() => setActiveStep(activeStep + 1)} variant="contained">
                        {activeStep < 3 ? steps[activeStep + 1] : "Next"}
                    </Button>
                </a>
            </Link>
        </div>
    );
};

export default Audience;

const travellers = [
    { key: 0, title: "Traveller" },
    { key: 1, title: "Business Traveller" },
    { key: 2, title: "Commuters" },
    { key: 3, title: "Currently Travelling" },
];
const interests = [
    { key: 0, title: "Football" },
    { key: 1, title: "Football Player" },
    { key: 2, title: "Football Gear" },
    { key: 3, title: "Foot Rings" },
    { key: 4, title: "Foot walk" },
    { key: 5, title: "Not foots" },
    { key: 6, title: "Sports" },
];
