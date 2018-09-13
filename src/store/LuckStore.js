import { observable } from "mobx";

class LuckStore {
    @observable count = 0;

    addLuck = () => {
        if (this.count < 7) {
          this.count += 1;
        }
    }

    removeLuck = () => {
        if (this.count > 0) {
          this.count -= 1;
        }
    }

    setLuck = luckCount => {
        this.count = luckCount;
    }
}

const luckStore = new LuckStore();
export default luckStore;