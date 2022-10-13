import React, { useState } from "react";
import { Checkbox, Chip, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { countries, languages } from "../../../../utils/contries&lang";

const TargetAudience = (props) => {
    const { classes } = props;

    const [ageGroup, setAgeGroup] = useState(false);
    const [gender, setGender] = useState("Male");
    const chipStyles = { background: "#f5f5f5", borderRadius: 0, border: "none" };

    return (
        <div>
            <div className={classes.select}>
                <h3>Audience Title</h3>
                <Autocomplete
                    id="combo-box-demo"
                    options={audienceTitle}
                    getOptionLabel={(option) => option.title}
                    getOptionSelected={(option) => option.title}
                    defaultValue={{ title: "ABC MY Audience" }}
                    style={{ margin: "1rem 0" }}
                    renderInput={(params) => <TextField {...params} variant="outlined" />}
                />
                <h4>Select from Temples</h4>
            </div>
            <div className={classes.select}>
                <h3>Audience Title</h3>
                <Autocomplete
                    multiple
                    style={{ margin: "1rem 0" }}
                    id="tags-filled"
                    options={countries.map((option) => option.name)}
                    // defaultValue={[top100Films[13].title]}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip key={index} style={chipStyles} variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => <TextField {...params} variant="outlined" />}
                />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <h4 style={{ margin: "0 2rem " }}>Select from Map </h4>
                    <h4>Add Location in bulk </h4>
                </div>
            </div>
            <div className={classes.select}>
                <h3>Audience Age Group</h3>
                <input type="number" className={classes.inputNumber} defaultValue={18} />
                <span>To</span>
                <input type="number" className={classes.inputNumber} defaultValue={25} />
                <br />
                <FormControlLabel
                    control={<Checkbox style={{ color: "#266ef1" }} checked={ageGroup} onChange={() => setAgeGroup(!ageGroup)} />}
                    label="Required Exact age group"
                />
                <br />
                <br />
                <FormControl component="fieldset">
                    <h3>Gender</h3>
                    <RadioGroup className={classes.radioGroup} aria-label="gender" name="gender1" value={gender}>
                        {genders.map((value, index) => (
                            <FormControlLabel
                                key={index}
                                value={value}
                                onChange={() => setGender(value)}
                                control={<Radio style={{ color: "#266ef1" }} />}
                                label={value}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={classes.select}>
                <h3>Language of Ad</h3>

                <Autocomplete
                    multiple
                    style={{ margin: "1rem 0" }}
                    id="tags-filled"
                    options={languages.map((option) => option.name)}
                    defaultValue={[languages[13].name]}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip key={index} style={chipStyles} variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => <TextField {...params} variant="outlined" />}
                />

                <FormControlLabel
                    control={<Checkbox style={{ color: "#266ef1" }} checked={ageGroup} onChange={() => setAgeGroup(!ageGroup)} />}
                    label="Required Exact age group"
                />
            </div>
        </div>
    );
};

export default TargetAudience;

const genders = ["Male", "Female", "Transgender", "All"];
const audienceTitle = [{ title: "ABC MY Audience", year: 1994 }];
