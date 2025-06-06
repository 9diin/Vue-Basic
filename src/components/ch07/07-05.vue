<template>
    <div>
        <h2>book: {{ book }}</h2>
        <h2>user: {{ user }}</h2>
        <h2>user.name: {{ user.name }}</h2>
        <h2>user.age: {{ user.age }}</h2>

        <button @click="changeUser">user 데이터 변경</button>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// 원시 자료형 데이터 타입 사용
const book = ref("이지스퍼블리싱 DO-iT Vue.js");

// 참조 자료형 데이터 타입 사용
const user = reactive({ name: "9Diin", age: 32, book: "이지스퍼블리싱 DO-iT Vue.js" });

const changeUser = () => {
    user.name = "changed Name";
    user.age = 50;
    user.book = "changed book";
};

console.log(book.value); // 이지스퍼블리싱 DO-iT Vue.js
console.log(user.value); // { name: "9Diin", age: 32 }
console.log(user.value.name); // 9Diin
console.log(user.value.age); // 32
</script>

<style scoped></style>
