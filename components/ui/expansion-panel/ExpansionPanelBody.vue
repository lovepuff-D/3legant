<script setup lang="ts">

</script>

<template>
    <div :class="$style.body">
        <slot/>
    </div>
</template>

<style module lang="scss">
.body {
    display: grid;
    grid-template-rows: 1fr;
    padding: 8px 0;
}
</style>
