<template>
    <div>
        <h1>{{ userName }} / {{ userAge }}</h1>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const { userName, userAge } = defineProps({
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
