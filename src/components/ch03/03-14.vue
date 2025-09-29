<template>
    <!-- HTML (템플릿) 영역 -->
    <!-- 클래스 바인딩 -->

    <!-- 첫 번째 h1 태그 -->
    <h1>isVisible 값: {{ isVisible }}</h1>

    <!-- 첫 번째 h1 태그 -->
    <h1 v-if="isVisible">이 문장은 isVisible 값이 {{ isVisible }}일 경우에만 보입니다.</h1>

    <!-- 버튼 태그 -->
    <button @click="toggleVisibility">버튼</button>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            isVisible: true,
        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
