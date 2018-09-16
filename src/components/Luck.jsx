import React from 'react'
import { observer, inject } from 'mobx-react';

export const ConnectedCheckbox = observer(({store, number}) => {
  const getClickHandler = count => () => store.set(count);

  return (
    <input 
      type="checkbox"
      checked={store.count >= number}
      onChange={getClickHandler(number)}
    />
  );
  });

const LuckCheckbox = ({number, luckStore}) => (
  <ConnectedCheckbox store={luckStore} number={number} />
);

const ConnectedLuckCheckbox = inject('luckStore')(LuckCheckbox);

const Luck = ({luckStore}) => {

  return (
    <React.Fragment>
      <div id="ConnectedCheckboxes">
        <label>Luck</label>
        <ConnectedLuckCheckbox number={1} />
        <ConnectedLuckCheckbox number={2} />
        <ConnectedLuckCheckbox number={3} />
        <ConnectedLuckCheckbox number={4} />
        <ConnectedLuckCheckbox number={5} />
        <ConnectedLuckCheckbox number={6} />
        <ConnectedLuckCheckbox number={7} />
      </div>
      <div id="LuckButtons">
        <button type="button" onClick={luckStore.removeLuck}>-</button>
        <button type="button" onClick={luckStore.addLuck}>+</button>
      </div>
    </React.Fragment>

  );
};

export default inject('luckStore')(Luck);