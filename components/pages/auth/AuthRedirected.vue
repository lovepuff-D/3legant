<script setup lang="ts">
import VSpinner from '~/components/ui/VSpinner.vue';
</script>

<template>
    <VSpinner :class="$style.spinner"/>
    <div :class="$style.redirectMsg">
        You will be redirected, wait...
    </div>
</template>

<style module lang="scss">
.spinner {
    margin-bottom: 12px;
}

.redirectMsg {
    @include text(heading-7);
}
</style>
