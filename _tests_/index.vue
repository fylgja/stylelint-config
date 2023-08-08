<script>
export default {
    data() {
        return {
            greeting: "Hello World!",
        };
    },
};
</script>

<template>
    <p class="greeting">{{ greeting }}</p>
</template>

<style>
:global(.foo),
::v-deep(.foo),
::v-slotted(.foo),
::v-global(.foo),
:deep(.foo),
:slotted(.foo) {
    color: red;
}

.bar {
    font-family: 'Courier New', Courier, monospace;
    width: v-bind(camelCase);
}
</style>
