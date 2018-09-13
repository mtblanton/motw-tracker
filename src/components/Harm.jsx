import React from 'react';
import {ConnectedCheckbox} from './Luck';
import { inject } from 'mobx-react';

const Harm = inject('harmStore')(({harmStore}) => {
  const HarmCheckbox = ConnectedCheckbox(harmStore);

  return (
    <React.Fragment>
      <div id="HarmCheckboxes">
        <HarmCheckbox number={1} />
        <HarmCheckbox number={2} />
        <HarmCheckbox number={3} />
        <HarmCheckbox number={4} />
        <HarmCheckbox number={5} />
        <HarmCheckbox number={6} />
        <HarmCheckbox number={7} />
      </div>
    </React.Fragment>
  )
})

export default Harm;