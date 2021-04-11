import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavitationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active className={classes.BurgerBuilder}>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
