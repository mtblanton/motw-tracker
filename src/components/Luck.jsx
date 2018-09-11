import React from 'react'
import { observer } from 'mobx-react';

const Luck = observer((props) => {
  console.log(props); 
  const {store} = this.props
  console.log(store);
  const luckStore = this.props.store.luckStore;
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
});

export default Luck;