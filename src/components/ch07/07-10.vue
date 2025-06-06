<template>
    <!-- 자식 컴포넌트로 props 전달 -->
    <ChildComponent :userName="parentName" :userAge="parentAge" />
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./07-11.vue";

/** 자식 컴포넌트로 전달할 데이터 */
const parentName = ref("9Diin");
const parentAge = ref("32");
</script>

<style scoped></style>
