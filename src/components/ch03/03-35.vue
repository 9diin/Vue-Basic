<template>
    <!-- HTML (템플릿) 영역 -->
    <!-- v-on 디렉티브를 사용하여 클릭 이벤트 핸들러를 바인딩 -->
    <button @click="handleClick">클릭하세요</button>
</template>

<script>
/** 스크립트 영역 */
export default {
    methods: {
        handleClick(event) {
            console.log(event); // 이벤트 객체 전체 출력
            console.log("클릭한 좌표:", event.clientX, event.clientY);
        },
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
