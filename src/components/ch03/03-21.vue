<template>
    <!-- HTML (템플릿) 영역 -->
    <h1 v-if="condition">조건이 참일 경우, 표시됩니다.</h1>
    <h1 v-else>조건이 거짓일 때, 표시됩니다.</h1>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            condition: false,
        };
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
