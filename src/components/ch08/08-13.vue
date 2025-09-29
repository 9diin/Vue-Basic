<template>
    <h1>{{ props.userName }} / {{ props.userAge }}</h1>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    userName: {
        type: String,
        required: true,
    },
    userAge: {
        type: String,
        required: true,
    },
});
</script>

<style scoped></style>
