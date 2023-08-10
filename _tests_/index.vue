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
@font-face {
    font-family: Fylgja;
    src: local(Fylgja), url("fylgja.woff2") format("woff2");
}

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
