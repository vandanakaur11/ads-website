import { Button, Chip, Collapse, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";

const UserInterests = (props) => {
    const { classes, actions } = props;
    const {
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
    } = actions;

    const [show, setShow] = useState(false);

    return (
        <div className={classes.userInterests}>
            <div className={classes.select}>
                <h3>Search Interests</h3>
                <Autocomplete
                    style={{ margin: "1rem 0" }}
                    value={selectedInterests}
                    onChange={(event, newValue) => handleChange(newValue, selectedInterests, setSelectedInterests)}
                    id="tags-filled"
                    options={interests}
                    getOptionLabel={(option) => option.title}
                    getOptionSelected={(option) => option.title}
                    renderInput={(params) => <TextField {...params} variant="outlined" />}
                />
            </div>
            <div className={classes.select}>
                <h3>Selected</h3>
                {selectedInterests.map((interest, index) => (
                    <Chip
                        key={index}
                        className={classes.selectChip}
                        label={interest?.title}
                        onDelete={() => handleDelete(interest, setSelectedInterests)}
                    />
                ))}
            </div>
            <div className={classes.select}>
                <h3>Suggested</h3>
                {interestsData.map((interest, index) => (
                    <Chip
                        key={index}
                        className={classes.selectChip}
                        label={interest.title}
                        onDelete={() => handleDelete(interest, setInterestsData)}
                    />
                ))}
            </div>
            <Button onClick={() => setShow((prevState) => !prevState)}> {show ? "Less" : "Add Behavior"}</Button>
            <Collapse in={show}>
                <div className={classes.select}>
                    <h3>Search Behaviour</h3>
                    <Autocomplete
                        style={{ margin: "1rem 0" }}
                        value={selectedTravellers}
                        onChange={(event, newValue) => handleChange(newValue, selectedTravellers, setSelectedTravellers)}
                        id="tags-filled"
                        options={travellers}
                        getOptionLabel={(option) => option.title}
                        getOptionSelected={(option) => option.title}
                        renderInput={(params) => <TextField {...params} variant="outlined" />}
                    />
                </div>
                <div className={classes.select}>
                    <h3>Selected</h3>
                    {selectedTravellers.map((interest, index) => (
                        <Chip
                            key={index}
                            className={classes.selectChip}
                            label={interest?.title}
                            onDelete={() => handleDelete(interest, setSelectedTravellers)}
                        />
                    ))}
                </div>
                <div className={classes.select}>
                    <h3>Suggested</h3>
                    {travellersData.map((interest, index) => (
                        <Chip
                            key={index}
                            className={classes.selectChip}
                            label={interest.title}
                            onDelete={() => handleDelete(interest, setTravellersData)}
                        />
                    ))}
                </div>
            </Collapse>
        </div>
    );
};

export default UserInterests;
