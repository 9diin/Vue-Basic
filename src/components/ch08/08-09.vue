<template>
    <div>
        <button @click="increment">count 증가</button>
        <button @click="decrement">count 감소</button>

        <button @click="changeUserName">유저네임 수정</button>

        <h1>{{ user.name }}</h1>
    </div>
</template>

<script setup>
import { ref, reactive, watchEffect } from ".ue";

// 반응형 데이터 정의
const count = ref(0);
const user = reactive({ name: "9Diin" });

const increment = () => {
    count.value++;
};
const decrement = () => {
    count.value--;
};
const changeUserName = () => {
    user.name = "9Diin에서 다른 유저네임으로 수정";
};

// watchEffect: 함수 내부에서 사용되는 반응 데이터를 자동 추적
watchEffect(() => {
    console.log(count.value);
    console.log(user.name);
});
</script>

<style scoped></style>
