<template>
    <button @click="this.$emit('send-event', { id: 1, user: '홍길동', language: language })">버튼 클릭</button>
</template>

<script>
export default {
    emits: ["send-event"],
    data() {
        return {
            language: "Vue.js",
        };
    },
};
</script>

<style scoped></style>
