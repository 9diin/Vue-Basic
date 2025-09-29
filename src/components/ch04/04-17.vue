<template>
    <ChildComponent @send-event="getData" />
</template>

<script>
import ChildComponent from "./04-16.vue";

export default {
    components: { ChildComponent },
    methods: {
        getData(event) {
            console.log(event);
        },
    },
};
</script>

<style scoped></style>
