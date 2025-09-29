<template>
    <h1>자식 컴포넌트 - ChildComponent</h1>
    <div>
        <h2>{{ title }}</h2>
        <h2>{{ subTitle }}</h2>
    </div>
</template>

<script>
export default {
    props: ["title", "subTitle"],
};
</script>
