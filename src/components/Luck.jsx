import React from 'react'
import { observer, inject } from 'mobx-react';

const Luck = inject('luckStore')(observer(({luckStore}) => {
  console.log(luckStore);
  return (
  <div id="LuckCheckboxes">
    <label>Luck</label>
    <input type="checkbox" value={luckStore.luckCount}/>
    <input type="checkbox" />
    <input type="checkbox" />
    <input type="checkbox" />
    <input type="checkbox" />
    <input type="checkbox" />
    <input type="checkbox" />
  </div>
  );
}));

export default Luck;