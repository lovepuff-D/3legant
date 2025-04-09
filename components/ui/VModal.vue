<script
    setup
    lang="ts"
>
import VModalBase from '~/components/ui/modal/VModalBase.vue';

const emit = defineEmits<{
    close: [],
}>();
</script>

<template>
    <Teleport to="#teleports">
        <div :class="$style.VModal">
            <VModalBase @close="emit('close')">
                <slot/>
            </VModalBase>
        </div>
    </Teleport>
</template>

<style
    module
    lang="scss"
>
.VModal {
    position: fixed;
    inset: 0;
    background: rgb($neutral-07, 20%);
    z-index: $modal-z-index;
}
</style>
