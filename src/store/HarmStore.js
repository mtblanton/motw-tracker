import { observable } from "mobx";

class HarmStore {
    @observable count = 0;

    addHarm = () => {
        if (this.count < 7) {
          this.count += 1;
        }
    }

    removeHarm = () => {
        if (this.count > 0) {
          this.count -= 1;
        }
    }

    set = luckCount => {
        this.count = luckCount;
    }
}

const harmStore = new HarmStore();
export default harmStore;