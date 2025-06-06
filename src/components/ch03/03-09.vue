<template>
    <!-- HTML (템플릿) 영역 -->
    <h1 v-bind:class="className">이렇게 사용해야 해요!</h1>
    <h1 v-bind:class="{ active: isActive }">이렇게 사용해야 해요!</h1>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            className: "title",
            isActive: true,
        };
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
h1.active {
    color: green;
}
.title {
    color: orange;
}
</style>
