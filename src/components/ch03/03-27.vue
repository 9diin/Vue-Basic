<template>
    <!-- HTML (템플릿) 영역 -->
    <ul>
        <li v-for="item in items">{{ item.fruit }} - {{ item.price }}</li>
    </ul>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            items: [
                { fruit: "사과", price: "1,000원" },
                { fruit: "딸기", price: "2,000원" },
                { fruit: "바나나", price: "3,000원" },
                { fruit: "수박", price: "4,000원" },
            ],
        };
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
