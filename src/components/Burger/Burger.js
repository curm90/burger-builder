import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import styles from './Burger.module.css';

const Burger = (props) => {
  return (
    <div className={styles.Burger}>
      <Ingredient type='bread-top' />
      <Ingredient type='meat' />
      <Ingredient type='cheese' />
      <Ingredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
