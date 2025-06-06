<template>
    <!-- HTML (템플릿) 영역 -->
</template>

<script>
/** 스크립트 영역 */
export default {
    watch: {
        // 감시할 데이터나 계산된 속성
        dataOrComputed: {
            // 감시할 데이터나 계산된 속성의 변경이 감지될 때, 실행할 콜백함수
            handler(newValue, oldValue) {
                // 변경이 감지할 때, 동작할 세부 로직
            },
            // 감시할 데이터나 계산된 속성이 객체나 배열일 경우, 내부 변화를 감지할 수 있게 하는 설정
            deep: false, // true or false (기본 값: false)
            // 초기 렌더링 시, handler()를 호출할지 여부
            immediate: false,
        },
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
