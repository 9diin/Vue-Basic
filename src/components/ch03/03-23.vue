<template>
    <!-- HTML (템플릿) 영역 -->
    <h1 v-if="isVisible">v-if: {{ isVisible }}</h1>
    <h1 v-show="isVisible">v-show: {{ isVisible }}</h1>
    <h1 v-show="!isVisible">v-show: {{ isVisible }}</h1>
    <button @click="toggleVisibility">버튼</button>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            condition: isVisible,
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
