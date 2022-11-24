<script setup>
console.log("Hello World!");
</script>

<template>
    <p class="special-w-class">Hello there</p>
</template>

<style>
.special-w-class {
    @apply bg-purple-400;

    @screen md {
        @apply bg-purple-500;
    }
}
</style>
