<template>
    <!-- HTML (템플릿) 영역 -->
    <div>
        <p>dataOrComputed: {{ dataOrComputed }}</p>
        <button @click="dataOrComputed++">값 증가</button>
    </div>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            dataOrComputed: 0, // watch 대상이 되는 실제 데이터
        };
    },
    watch: {
        // 감시할 데이터나 계산된 속성
        dataOrComputed: {
            // 감시할 데이터나 계산된 속성의 변경이 감지될 때, 실행할 콜백함수
            handler(newValue, oldValue) {
                console.log(`dataOrComputed 변경됨 → ${oldValue} → ${newValue}`);
            },
            // 감시할 데이터나 계산된 속성이 객체나 배열일 경우, 내부 변화를 감지할 수 있게 하는 설정
            deep: true, // true or false (기본 값: false)
            // 초기 렌더링 시, handler()를 호출할지 여부
            immediate: true,
        },
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
