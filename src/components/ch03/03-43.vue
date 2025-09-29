<template>
    <!-- v-model 기본 동작을 분해한 코드 -->
    <input :value="message" @input="message = $event.target.value" />

    <!-- textarea에서의 v-model 사용 -->
    <textarea v-model="message"></textarea>

    <!-- checkbox에서의 v-model 사용 -->
    <input type="checkbox" v-model="checked" />

    <!-- radio에서의 v-model 사용 -->
    <input type="radio" value="male" v-model="gender" />
    <input type="radio" value="female" v-model="gender" />

    <h1>message 입력 값: {{ message }}</h1>
</template>

<script>
export default {
    data() {
        return {
            message: "",
            checked: false,
            gender: "",
        };
    },
};
</script>

<style scoped></style>
