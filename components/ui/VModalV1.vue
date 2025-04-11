<script
    setup
    lang="ts"
>
import VModalBase from '~/components/ui/modal/VModalBase.vue';
import { useDevice } from '~/composables/shared/useDevice';
import { EModalTransition } from '~/@types/ui/modals';

const emit = defineEmits<{
    'remove-instance': [],
    'update:modelValue': [],
}>();

const modelValue = defineModel<boolean>({ required: true });

const { isDesktop } = useDevice();
const modalTransition = computed(() => isDesktop.value ? EModalTransition.Right : EModalTransition.Bottom);

const close = () => {
    modelValue.value = false;
};

const afterLeave = () => {
    emit('remove-instance');
};
</script>

<template>
    <Teleport to="#teleports">
        <div :class="$style.VModalV1">
            <Transition
                name="opacity"
                appear
            >
                <div
                    v-if="modelValue"
                    :class="$style.overlay"
                    @click.self="close"
                />
            </Transition>
            <Transition
                :name="modalTransition"
                appear
                @after-leave="afterLeave"
            >
                <VModalBase v-if="modelValue">
                    <slot/>
                </VModalBase>
            </Transition>
        </div>
    </Teleport>
</template>

<style
    module
    lang="scss"
>
.VModalV1 {
    position: fixed;
    inset: 0;
    z-index: $modal-z-index;
}

.overlay {
    width: 100%;
    height: 100%;
    background: rgb($neutral-07, 20%);
}
</style>
