<template>
    <!-- HTML (템플릿) 영역 -->
    <h1>{{ fullName }}</h1>
    <!-- v-on 디렉티브를 사용하여 클릭 이벤트 핸들러를 바인딩 -->
    <button @click="remainName">버튼 01</button>
    <button @click="changeName">버튼 02</button>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            firstName: "홍",
            lastName: "길동",
        };
    },
    computed: {
        fullName() {
            console.log("Computed 호출!");
            return `${this.firstName} ${this.lastName}`;
        },
    },
    methods: {
        remainName() {
            this.firstName = "홍";
        },
        changeName() {
            this.firstName = "김";
        },
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
