<template>
    <div>
        <h1>{{ count }}</h1>
        <h2>Vue.js 라이프사이클 테스트</h2>
        <button @click="incrementCount">카운트 증가</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 10,
        };
    },
    beforeUnmount() {
        console.log("라이프사이클 훅 - beforeUnmount: ChildComponent 제거 직전");
    },
    unmounted() {
        console.log("라이프사이클 훅 - unmounted: ChildComponent 제거 완료");
    },
    methods: {
        incrementCount() {
            this.count++;
        },
    },
};
</script>
