<template>
    <!-- HTML (템플릿) 영역 -->
    <!-- v-on 디렉티브를 사용하여 클릭 이벤트 핸들러를 바인딩 -->
    <button v-on:click="handleClick">Click me</button>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {};
    },
    methods: {
        handleClick() {
            console.log("버튼이 클릭되었습니다.");
        },
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
