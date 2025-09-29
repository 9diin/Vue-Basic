<template>
    <div></div>
</template>

<script setup>
import { ref, watch } from "vue";

// 반응형 객체
const user = ref({
    name: "9Diin",
    address: { city: "Seoul" },
});

// user 객체를 watch (얕은 감시)
watch(user, (newUser, oldUser) => {
    console.log("User object changed:", newUser);
});

// address.city 속성 변경 (얕은 감시에서는 감지되지 않음)
setTimeout(() => {
    user.value.address.city = "London"; // 이 변화는 감지되지 않음
    console.log(user.value.address.city); // London
}, 2000);
</script>

<style scoped></style>
