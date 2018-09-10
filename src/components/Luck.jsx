import { observer } from 'mobx-react';

const Luck = observer(({luckStore}) => (
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
));

export default Luck;