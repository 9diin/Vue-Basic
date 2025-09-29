<template>
    <button @click="handleClick">버튼 클릭</button>
</template>

<script>
export default {
    emits: ["send-event"],
    data() {
        return {
            language: "Vue.js",
        };
    },
    methods: {
        handleClick() {
            // 버튼 클릭 시, send-event 발생
            // this.$emit("이벤트를 전달할 포장지 이름", payload)
            console.log("자식 컴포넌트 - 버튼 클릭 이벤트 발생!");
            this.$emit("send-event", { id: 1, user: "홍길동", language: this.language });
        },
    },
};
</script>

<style scoped></style>
