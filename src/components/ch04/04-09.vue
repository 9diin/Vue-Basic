<template>
    <!-- 자식 컴포넌트 -->
    <ChildComponent title="제목" subTitle="부제목" />
</template>

<script>
import ChildComponent from "./components/ch04/04-08.vue";

export default {
    components: {
        ChildComponent,
    },
    data() {
        return {
            title: "부모 컴포넌트에서 작성한 데이터 - title",
            subTitle: "부모 컴포넌트에서 작성한 데이터 - subTitle",
        };
    },
};
</script>

<style scoped></style>
