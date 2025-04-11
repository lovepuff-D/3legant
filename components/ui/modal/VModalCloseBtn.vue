<script
    setup
    lang="ts"
>

import VIcon from '~/components/ui/VIcon.vue';

const emit = defineEmits<{
    close: [],
}>();
</script>

<template>
    <button
        :class="$style.VModalCloseBtn"
        @click="emit('close')"
    >
        <VIcon name="close"/>
    </button>
</template>

<style
    module
    lang="scss"
>
.VModalCloseBtn {
    display: flex;

    &:hover {
        color: $neutral-04;
    }
}
</style>
