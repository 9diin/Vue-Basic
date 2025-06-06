<template>
    <div>
        <h2>count:{{ count }}</h2>
        <h2>obj.count:{{ obj.count }}</h2>
        <button @click="incrementCount">count 증가</button>
        <button @click="incrementObjCount">obj.count 증가</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

// ref로 감싼 단일 값 (원시 값)
const count = ref(10);

// ref로 감싼 객체
const obj = ref({ count: 10 });

// ref로 감싼 값 증가
const incrementCount = () => {
    count.value++; // count는 원시 값, .value로 값에 접근하여 반응형으로 추적됩니다.
};

// ref로 감싼 객체의 속성 증가
const incrementObjCount = () => {
    obj.count++; // ❌
    obj.value.count++; // ⭕️ obj는 ref로 감싸진 객체이기 때문에 .value로 접근해야 합니다.
};
</script>

<style scoped></style>
