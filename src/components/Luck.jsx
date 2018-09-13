import React from 'react'
import { observer, inject } from 'mobx-react';

export const ConnectedCheckbox = store => {
  const getClickHandler = count => () => store.set(count);

  return observer(({number}) => (
    <input 
      type="checkbox"
      checked={store.count >= number}
      onChange={getClickHandler(number)}
    />
  ));
  }

const Luck = inject('luckStore')(({luckStore}) => {
  const LuckCheckbox = ConnectedCheckbox(luckStore);

  return (
    <React.Fragment>
      <div id="LuckCheckboxes">
        <label>Luck</label>
        <LuckCheckbox number={1} />
        <LuckCheckbox number={2} />
        <LuckCheckbox number={3} />
        <LuckCheckbox number={4} />
        <LuckCheckbox number={5} />
        <LuckCheckbox number={6} />
        <LuckCheckbox number={7} />
      </div>
      <div id="LuckButtons">
        <button type="button" onClick={luckStore.removeLuck}>-</button>
        <button type="button" onClick={luckStore.addLuck}>+</button>
      </div>
    </React.Fragment>

  );
});

export default Luck;