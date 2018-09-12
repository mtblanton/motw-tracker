import { observable } from "mobx";

class LuckStore {
    @observable luckCount = 0;

    addLuck = () => {
        this.luckCount += 1;
    }

    removeLuck = () => {
        this.luckCount -= 1;
    }

    setLuck = luckCount => {
        this.luckCount = luckCount;
    }
}

const luckStore = new LuckStore();
export default luckStore;