<template>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
</template>

<script setup>
const firstName = defineModel("firstName");
const lastName = defineModel("lastName");
</script>

<style scoped></style>
