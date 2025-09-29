<template>
    <div>
        <h1>{{ userName }} / {{ userAge }}</h1>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

/** 부모 컴포넌트로부터 전달받은 Props 데이터의 타입을 각각 설정 */
interface Props {
    userName: string;
    userAge: string;
}

const { userName, userAge } = defineProps<Props>();
</script>

<style scoped></style>
