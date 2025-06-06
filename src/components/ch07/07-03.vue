<template>
    <div>
        <h2>{{ book }}</h2>
        <h2>{{ user }}</h2>
        <h2>{{ user.name }}</h2>
        <h2>{{ user.age }}</h2>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";

/** 원시 자료형 데이터 타입 사용 */
const book = ref("이지스퍼블리싱 DO-iT Vue.js");

/** 참조 자료형 데이터 타입 사용 */
const user = ref({
    name: "9Diin",
    age: 32,
});

console.log(book.value); // 이지스퍼블리싱 DO-iT Vue.js
console.log(user.value); // { name: "9Diin", age: 32 }
console.log(user.value.name); // 9Diin
console.log(user.value.age); // 32
</script>

<style lang="scss" scoped></style>
