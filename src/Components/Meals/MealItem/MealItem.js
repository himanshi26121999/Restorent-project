import React from "react";
import classes from "./MealItem.module.css";

const MealItem=(props)=>{
    const price=`$${props.price.toFixed(2)}`;
    return(
        <li>
            <div className={classes.meal}>
              <h2>{props.name}</h2>
              <div className={classes.description}>{props.description}</div>
              <div className={classes.price}>{price}</div>
            </div>
        </li>
    )
}

export default MealItem;