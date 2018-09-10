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

    @computed get luckCount() {
        return this.usedLuckCount;
    }
}

const luckStore = new LuckStore();
export default luckStore;