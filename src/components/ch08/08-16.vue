<template>
    <button @click="sendMessage">클릭</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["send-message"]);
const sendMessage = () => {
    emit("send-message", "안녕하세요, defineEmits 테스트!");
};
</script>
