<template>
    <!-- HTML (템플릿) 영역 -->
    <h1>{{ count }}</h1>
    <h2>Vue.js 라이프사이클 테스트</h2>
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
    /** 생성 단계(Creation) */
    beforeCreate() {
        console.log("라이프사이클 훅 - beforeCreate: 인스턴스가 생성된 직후 (data, methods 등 초기화 전)", this.count);
    },
    created() {
        console.log("라이프사이클 훅 - created: data와 이벤트가 초기화된 후", this.count);
    },

    /** 마운트 단계(Mounting) */
    beforeMount() {
        console.log("라이프사이클 훅 - beforeMount: DOM 렌더링 직전 (아직 화면에 표시되지 않음)", document.querySelector("h1"));
    },
    mounted() {
        console.log("라이프사이클 훅 - mounted: DOM 렌더링 완료 (화면에 표시됨)", document.querySelector("h1"));
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
