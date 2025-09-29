<template>
    <!-- HTML (템플릿) 영역 -->
    <h1>{{ count }}</h1>
    <h2>Vue.js 라이프사이클 테스트</h2>
    <button @click="incrementCount">카운트 증가</button>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            count: 10,
        };
    },
    /** 라이프사이클 훅(Hooks) */
    /** 생성 단계 (Creation) */
    beforeCreate() {
        console.log("beforeCreate: 인스턴스가 생성된 직후 - data, methods 접근 불가 →", this.count);
    },
    created() {
        console.log("created: 인스턴스 초기화 완료 - data, methods 접근 가능 →", this.count);
    },

    /** 마운트 단계 (Mounting) */
    beforeMount() {
        console.log("beforeMount: DOM 렌더링 직전 - 아직 화면에 요소가 없음 →", document.querySelector("h2"));
    },
    mounted() {
        console.log("mounted: DOM 렌더링 완료 - 실제 요소 접근 가능 →", document.querySelector("h2").textContent);
    },

    /** 업데이트 단계 (Updating) */
    beforeUpdate() {
        console.log("beforeUpdate: 데이터 변경 감지 - DOM 반영 전 → count:", this.count);
        console.log("beforeUpdate: 현재 DOM 값 →", document.querySelector("h1").textContent);
    },
    updated() {
        console.log("updated: DOM 업데이트 완료 - 반영된 count →", this.count);
        console.log("updated: 변경된 DOM 값 →", document.querySelector("h1").textContent);
    },

    methods: {
        incrementCount() {
            this.count++; // 카운트 값을 증가
        },
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
