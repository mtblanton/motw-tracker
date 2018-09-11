import { observable } from "mobx";

class LuckStore {
    @observable usedLuckCount = 0;

    addLuck = () => {
        this.usedLuckCount += 1;
    }

    removeLuck = () => {
        this.usedLuckCount -= 1;
    }

    setLuck = luckCount => {
        this.usedLuckCount = luckCount;
    }
}

const luckStore = new LuckStore();
export default luckStore;