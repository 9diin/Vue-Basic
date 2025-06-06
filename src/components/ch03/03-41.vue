<template>
    <!-- HTML (템플릿) 영역 -->
    <h1>{{ obj }}</h1>
    <h1>{{ arr }}</h1>
    <button @click="obj.c = 40">객체 데이터 변경</button>
    <button @click="arr.push(6)">배열 데이터 변경</button>
</template>

<script>
/** 스크립트 영역 */
export default {
    data() {
        return {
            obj: {
                a: 1,
                b: 2,
                c: 3,
            },
            arr: [1, 2, 3, 4, 5],
        };
    },
    watch: {
        obj: {
            handler(newValue, oldValue) {
                console.log("Object Changed: ", newValue);
            },
            deep: true,
        },
        arr: {
            handler(newValue, oldValue) {
                console.log("Array Changed: ", newValue);
            },
            deep: true,
        },
    },
};
</script>

<style scoped>
/** 스타일 영역 */
/** scoped: 해당 컴포넌트에서만 style 태그에 입력된 CSS 효과가 적용된다는 의미 */
</style>
