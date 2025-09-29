<template>
    <h1>자식 컴포넌트 - ChildComponent</h1>
    <div>
        <h2>{{ title }}</h2>
        <h2>{{ subTitle }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true, // 필수 prop
        },
        subTitle: {
            type: String,
            default: "기본 부제목 할당 값입니다.",
        },
    },
};
</script>

<style scoped></style>
