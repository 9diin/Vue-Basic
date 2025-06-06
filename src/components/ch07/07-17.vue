<template>
    <div>
        <ChildRefComponent ref="childRef" />
        <button @click="getData">자식 컴포넌트의 데이터 및 이벤트 조회</button>
    </div>
</template>

<script setup>
import ChildRefComponent from "./07-16.vue";
import { ref } from "vue";

const childRef = ref(null);

/** 버튼 클릭 시 input 요소에 포커스를 주는 함수 */
const getData = () => {
    childRef.value.getUser();
};
</script>

<style scoped></style>
