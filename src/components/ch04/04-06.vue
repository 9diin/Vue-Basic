<template>
    <div>
        <button @click="toggleComponent">하위 컴포넌트 표시/제거</button>
        <ChildComponent v-if="isVisible" />
    </div>
</template>

<script>
import ChildComponent from "./components/ch04/04-05.vue";

export default {
    components: {
        ChildComponent,
    },
    data() {
        return {
            isVisible: true, // 하위 컴포넌트 표시 여부
        };
    },
    methods: {
        toggleComponent() {
            this.isVisible = !this.isVisible; // v-if 값 변경
        },
    },
};
</script>
