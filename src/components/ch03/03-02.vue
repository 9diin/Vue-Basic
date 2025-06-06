<template>
    <!-- HTML (템플릿) 영역 -->
    <div>
        <h1>배워볼 프로그래밍 프레임워크: {{ language }}</h1>
        <h1>쳅터: 3장-Vue.js 기초문법, 생각보다 쉬워요!</h1>
        <h2>콘텐츠: {{ content }}</h2>
    </div>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            language: "Vue.js",
            content: "데이터 정의와 데이터 보간법",
        };
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
