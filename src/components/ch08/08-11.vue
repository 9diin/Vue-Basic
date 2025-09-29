<template>
    <div>저는 자식 컴포넌트입니다.</div>
</template>

<script setup>
import { onBeforeUnmount, onUnmounted } from "vue";

onBeforeUnmount(() => {
    console.log("ChildComponent: onBeforeUnmount 호출됨");
});

onUnmounted(() => {
    console.log("ChildComponent: onUnmounted 호출됨");
});
</script>
