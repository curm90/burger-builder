import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import styles from './Burger.module.css';

const Burger = (props) => {
  let tranformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Ingredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (tranformedIngredients.length === 0) {
    tranformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={styles.Burger}>
      <Ingredient type='bread-top' />
      {tranformedIngredients}
      <Ingredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
