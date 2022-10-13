import React from "react";
import { Checkbox, Chip, FormControlLabel } from "@material-ui/core";

const TermsAndTags = (props) => {
    const { classes, actions } = props;
    const { selectedInterests, setSelectedInterests, selectedTravellers, setSelectedTravellers, handleDelete } = actions;

    return (
        <div className={classes.termsAndTags}>
            <div className={classes.select}>
                <h3>Selected Interests</h3>
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
                <h3>Selected Travellers</h3>
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
                <h3>Terms and Conditions</h3>
                <p>
                    Terms and Conditions sit amet consectetur adipisicing elit. Ut, enim impedit nisi natus excepturi vero eveniet
                    provident, reprehenderit dolorum nobis rerum dicta soluta necessitatibus consequatur dolore eaque, exercitationem rem
                    voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, enim impedit nisi natus excepturi vero eveniet
                    provident, reprehenderit dolorum nobis rerum dicta soluta necessitatibus consequatur dolore eaque, exercitationem rem
                    voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, enim impedit nisi natus excepturi vero eveniet
                    provident, reprehenderit dolorum nobis rerum dicta soluta necessitatibus consequatur dolore eaque, exercitationem rem
                    voluptas.
                </p>
                <FormControlLabel
                    style={{ display: "block", textAlign: "right" }}
                    control={<Checkbox style={{ color: "#266ef1" }} />}
                    label="Agree"
                />
            </div>
        </div>
    );
};

export default TermsAndTags;
