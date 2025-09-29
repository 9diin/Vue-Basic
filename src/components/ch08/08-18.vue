<template>
    <div>
        <input ref="searchRef" type="text" placeholder="검색어를 입력하세요." />
        <button @click="focusInput">Focus The Input</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

// template 태그에서 searchRef라는 ref를 사용하여 DOM 요소에 접근
// 초기값은 null: 이 부분은 개발자가 의도적으로, 명시적으로 사용할 것임을 알리는 의도이기도 하다.
const searchRef = ref(null);

// 버튼 클릭 시 input 요소에 포커스를 주는 함수
const focusInput = () => {
    searchRef.value.focus();
};
</script>

<style scoped></style>
