<template>
    <!-- :value="modelValue" => 부모 컴포넌트에서 전달한 modelValue prop을 사용 -->
    <!-- @input="onInput" => input 이벤트가 발생하면 onInput 메소드 실행 -->
    <input :value="modelValue" @input="onInput" placeholder="Type something" />
</template>

<script>
export default {
    props: {
        modelValue: String, // 부모로부터 전달된 modelValue를 prop으로 받음
    },
    methods: {
        onInput(event) {
            // 사용자가 입력값을 변경할 때마다 update:modelValue 이벤트를 부모에게 전달
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>

<style scoped></style>
