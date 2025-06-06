<template>
    <h1>자식 컴포넌트 조회 완료!</h1>
</template>

<script setup>
import { reactive, defineExpose } from "vue";

const user = reactive({
    name: "9Diin",
    book: "DO-iT Vue.js",
    job: "Programmer",
});

const getUser = () => {
    console.log(user);
};

defineExpose({ user, getUser });
</script>

<style scoped></style>
