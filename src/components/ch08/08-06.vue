<template>
    <div>
        <p>전체 이름: {{ fullName }}</p>
        <p>이름 길이: {{ nameLength }}</p>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";

// 반응형 데이터 선언
const firstName = ref("John");
const lastName = ref("Doe");

// computed로 전체 이름 계산
const fullName = computed(() => {
    return `${firstName.value} ${lastName.value}`;
});

// computed로 전체 이름 길이 계산
const nameLength = computed(() => {
    return fullName.value.length;
});

console.log(fullName.value); // John Doe
console.log(nameLength.value); // 8
</script>
