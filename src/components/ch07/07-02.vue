<template>
    <div>
        <h1>Count: {{ count }}</h1>
        <button @click="increment">증가</button>
        <button @click="decrement">감소</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

/** 반응형 상태값 정의 */
const count = ref(0);

/** 메서드 정의 */
const increment = () => {
    count.value++;
};
const decrement = () => {
    count.value--;
};
</script>

<style scoped></style>
