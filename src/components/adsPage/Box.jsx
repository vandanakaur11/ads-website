import React, { useState } from "react";
import Image from "next/image";

const Box = (props) => {
    const { classes, handleToggle, item } = props;
    const [active, setActive] = useState(false);

    return (
        <div
            onMouseOver={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`${classes.box}  ${active ? classes.boxActive : null}`}
            onClick={() => handleToggle(item.title)}
        >
            <div className={classes.boxImg}>
                <Image src={active ? `/images/${item.url}-white.svg` : `/images/${item.url}.svg`} alt="" width={75} height={75} />
            </div>
            <h3>{item.title}</h3>
        </div>
    );
};

export default Box;
