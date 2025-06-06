<template>
    <div>
        <h1>App.vue</h1>
        <p>Count: {{ count }}</p>
        <p>Double Count: {{ doubleCount }}</p>
        <p>Double Plus One: {{ doublePlusOne }}</p>
        <button @click="increment">Increment</button>
        <button @click="randomizeCounter">Randomize</button>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "./stores/counter";

// 스토어 인스턴스 생성
const counterStore = useCounterStore();

// 반응형 상태 추출
const { count, doubleCount, doublePlusOne } = storeToRefs(counterStore);

// 메서드 정의
const increment = () => counterStore.increment();
const randomizeCounter = () => counterStore.randomizeCounter();
</script>

<style scoped></style>
