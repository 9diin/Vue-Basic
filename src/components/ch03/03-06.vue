<template>
    <!-- HTML (템플릿) 영역 -->
    <div>
        <h1>{{ message }}</h1>
        <h1 v-html="messageHTML"></h1>
    </div>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            message: "오리지널 메시지 데이터",
            messageHTML: "<h2 style='color: blue'>HTML 코드 메시지</h2>",
        };
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
