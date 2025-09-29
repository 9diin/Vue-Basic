import { defineStore } from "pinia";

export const useStore = defineStore("main", {
    // 완전한 타입 추론을 위해 화살표 함수를 사용하는 것이 좋습니다.
    state: () => {
        return {
            title: "제목",
            description: "설명",
            count: 10,
        };
    },
    getters: {
        // 자동으로 반환 타입을 숫자로 추론합니다.
        doubleCount: (state) => state.count * 2,

        // 반환 타입을 '명시적으로' 설정해야 합니다.
        doublePlusOne(): number {
            return this.doubleCount + 1;
        },
    },
    actions: {
        // this에 의존하므로 화살표 함수를 사용할 수 없습니다.
        increment() {
            this.count++;
        },
        randomizeCounter() {
            this.count = Math.round(100 * Math.random());
        },
    },
});
