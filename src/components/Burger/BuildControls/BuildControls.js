import React from 'react';
import BuildControl from './BuildControl';
import styles from './BuildControls.module.css';

const controls = [
  {
    label: 'Salad',
    type: 'salad',
  },
  {
    label: 'Bacon',
    type: 'bacon',
  },
  {
    label: 'Cheese',
    type: 'cheese',
  },
  {
    label: 'Meat',
    type: 'meat',
  },
];

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => props.addIngredientHandler(control.type)}
          removed={() => props.removeIngredientHandler(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;
