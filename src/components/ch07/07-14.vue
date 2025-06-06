<template>
    <!-- 자식 컴포넌트에서 발생한 'send-message' 이벤트를 처리 -->
    <Emits @send-message="handleSendMessage" />
</template>

<script setup>
import Emits from "./07-13.vue";

/** 자식 컴포넌트로 전달할 데이터 */
const handleSendMessage = (message) => {
    console.log(message);
};
</script>

<style scoped></style>
