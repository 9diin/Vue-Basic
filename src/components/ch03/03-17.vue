<template>
    <!-- HTML (템플릿) 영역 -->
    <h1 v-if="score > 90">Excellent!!</h1>
    <h1 v-else-if="score > 75">Good!</h1>
    <h1 v-else>Needs Improvement.</h1>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            score: 80,
        };
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
