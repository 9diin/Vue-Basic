<template>
    <div>
        <p>{{ message }}</p>
        <button @click="message = message + '!'">업데이트</button>
    </div>
    <button @click="toggleChild">
        {{ showChild ? "자식 컴포넌트 숨기기" : "자식 컴포넌트 보여주기" }}
    </button>

    <ChildComponent v-if="showChild" />
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
import ChildComponent from "@/components/ch08/08-10.vue";

const message = ref("Hello, Vue!");
const showChild = ref(true);

function toggleChild() {
    showChild.value = !showChild.value;
}

// 컴포넌트가 DOM에 붙기 직전
onBeforeMount(() => {
    console.log("onBeforeMount: 컴포넌트가 곧 마운트 됩니다.");
});

// 컴포넌트가 마운트된 직후
onMounted(() => {
    console.log("onMounted: 컴포넌트가 마운트 되었습니다.");
});

// 컴포넌트가 업데이트되기 직전
onBeforeUpdate(() => {
    console.log("onBeforeUpdate: 컴포넌트가 업데이트 되기 직전입니다.");
});

// 컴포넌트가 업데이트된 직후
onUpdated(() => {
    console.log("onUpdated: 컴포넌트가 업데이트 되었습니다.");
});
</script>
