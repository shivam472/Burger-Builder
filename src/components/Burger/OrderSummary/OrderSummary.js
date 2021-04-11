import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
        <strong style={{ marginLeft: "1.5rem" }}>
          Rs. {props.ingredients[igKey] * props.ingredientPrice[igKey]}
        </strong>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>

      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <p>
        <strong>Total Price: {props.price}</strong>
      </p>
      <Button btnType="Danger" clicked={props.cancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.success}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
