import { Button, Collapse } from "@material-ui/core";
import React, { useState } from "react";
import Image from "next/image";

const Demographics = (props) => {
    const { classes } = props;
    const [select, setSelect] = useState(false);

    const boxHandler = (title) => setSelect((prevState) => !prevState);

    return (
        <div className={classes.audienceContainer}>
            <Collapse in={select}>
                <div className={classes.audienceContainer}>
                    {options.map((option, index) => (
                        <Button key={index} variant={"outlined"}>
                            {option}
                        </Button>
                    ))}
                </div>
            </Collapse>
            {boxList.map((item, index) => (
                <div key={index} className={classes.box} onClick={boxHandler}>
                    <div className={classes.boxImg}>
                        <Image src={`/images/${item}.svg`} alt={item} width={50} height={50} />
                    </div>
                    <h3>{item.replace("-", " ")}</h3>
                </div>
            ))}
        </div>
    );
};

export default Demographics;

const options = ["Education Level", "Feild of Study", "Schools", "Updergead Years"];
const boxList = ["Relationship", "Home", "Education", "Financial", "Politics", "Work", "Generation", "Ethnic-Affinity", "Parents"];
