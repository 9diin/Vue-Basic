<template>
    <div>
        <h1>App.vue</h1>
        <p>Count: {{ counter.count }}</p>
        <p>Double Count: {{ doubleCount }}</p>
        <p>Double Plus One: {{ doublePlusOne }}</p>
        <button @click="increment">Increment</button>
        <button @click="randomizeCounter">Randomize</button>
    </div>
</template>

<script>
import { useStore } from "./stores/index.ts";

export default {
    data() {
        return {
            // useStore()를 호출하여 스토어 인스턴스를 가져온다.
            counter: useStore(),
        };
    },
    computed: {
        // 스토어의 getters를 호출
        doubleCount() {
            return this.counter.doubleCount;
        },
        doublePlusOne() {
            return this.counter.doublePlusOne;
        },
    },
    methods: {
        increment() {
            // 스토어의 increment 메서드 호출
            this.counter.increment();
        },
        randomizeCounter() {
            // 스토어의 randomizeCounter 메서드 호출
            this.counter.randomizeCounter();
        },
    },
};
</script>

<style scoped></style>
