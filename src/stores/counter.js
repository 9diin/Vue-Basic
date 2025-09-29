import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
    // state
    const count = ref(10);

    // getters
    const doubleCount = computed(() => count.value * 2);
    const doublePlusOne = computed(() => doubleCount.value + 1);

    // actions
    const increment = () => {
        count.value++;
    };
    const randomizeCounter = () => {
        count.value = Math.round(100 * Math.random());
    };

    return { count, doubleCount, doublePlusOne, increment, randomizeCounter };
});
