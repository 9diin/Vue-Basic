import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore1 = defineStore("main", {
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
    },
});

export const useStore2 = defineStore("main", () => {
    // state
    const title = ref("제목");
    const description = ref("설명");

    return { title, description };
});
