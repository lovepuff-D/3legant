<script setup lang="ts">
const isOpen = ref(false);

const test = () => {
    isOpen.value= !isOpen.value;
}

const style = useCssModule();
const classList = computed(() => ({
    [style._expanded]: isOpen.value,
}))
</script>

<template>
    <div
        :class="[$style.wrapper, classList]"
        @click="test"
    >
        <slot/>
    </div>
</template>

<style module lang="scss">
.wrapper {
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr 0;
    transition: grid-template-rows $transition-duration;

    &._expanded {
       grid-template-rows: auto auto;
    }
}
</style>
