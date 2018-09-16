import React from 'react';
import {ConnectedCheckbox} from './Luck';
import { inject } from 'mobx-react';

const HarmCheckbox = ({harmStore, number}) => (
  <ConnectedCheckbox store={harmStore} number={number} />
);

const ConnectedHarmCheckbox =inject('harmStore')(HarmCheckbox);

const Harm = inject('harmStore')(({harmStore}) => {

  return (
    <React.Fragment>
      <div id="ConnectedCheckboxes">
        <label>Harm</label>
        <ConnectedHarmCheckbox number={1} />
        <ConnectedHarmCheckbox number={2} />
        <ConnectedHarmCheckbox number={3} />
        <ConnectedHarmCheckbox number={4} />
        <ConnectedHarmCheckbox number={5} />
        <ConnectedHarmCheckbox number={6} />
        <ConnectedHarmCheckbox number={7} />
      </div>
      <div id="HarmButtons">
        <button type="button" onClick={harmStore.removeHarm}>-</button>  
        <button type="button" onClick={harmStore.addHarm}>+</button>  
      </div>
    </React.Fragment>
  )
})

export default Harm;