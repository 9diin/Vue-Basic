<template>
    <!-- HTML (템플릿) 영역 -->
    <input v-model="email" type="text" />
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            email: "example@example.com",
        };
    },
    watch: {
        email(newValue, oldValue) {
            console.log("newValue: ", newValue);
            console.log("oldValue: ", oldValue);
        },
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
