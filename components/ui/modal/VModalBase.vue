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
    <div :class="$style.VModalBase">
        <button
            :class="$style.closeBtn"
            @click="emit('close')"
        >
            <VIcon name="close"/>
        </button>
        <slot/>
    </div>
</template>

<style
    module
    lang="scss"
>
.VModalBase {
    overflow: auto;
    position: absolute;
    inset: 0 0 0 auto;
    padding: 40px 24px;
    background: $base;
}

.closeBtn {
    position: absolute;
    top: 40px;
    right: 24px;
}
</style>
