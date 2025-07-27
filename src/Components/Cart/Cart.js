import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart=()=>{
    const cartItem=(
        <ul className={classes['cart-items']}>{[{id:1,name:"Sushi",amount:2,price:12.99}].map((item)=>{
            return <li>{item.name}</li>
        })}</ul>
    );
    return(
        <Modal>
         {cartItem}
         <div className={classes.total}>
            <span>Total Amount</span>
            <span>12.22</span>
         </div>
         <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
         </div>
        </Modal>
    )
}

export default Cart;