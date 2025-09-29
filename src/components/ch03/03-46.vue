<template>
    <CustomInput v-model="message" />
    <p>Parent: {{ message }}</p>
</template>

<script>
import CustomInput from "./components/ch03/03-45.vue";

export default {
    components: {
        CustomInput,
    },
    data() {
        return {
            message: "",
        };
    },
};
</script>

<style scoped></style>
