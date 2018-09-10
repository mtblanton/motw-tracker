import React from 'react'
import { observer } from 'mobx-react';

const Luck = observer((props) => {
  console.log(props); 
  const {luckStore} = this.props
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