import { cloneVNode } from 'vue';

export const useModalV1 = () => {
    const isModalOpen = ref(false);

    const openModal = () => {
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };

    const modalWrapper = ref<any>(null);

    watch(isModalOpen, () => {
        if (modalWrapper.value) {
            modalWrapper.value = cloneVNode(modalWrapper.value, { modelValue: isModalOpen.value });

            return;
        }

        modalWrapper.value = h(defineAsyncComponent(() => import('~/components/ui/VModalV1.vue')), {
            modelValue: isModalOpen.value,
            'onUpdate:modelValue': (val: boolean) => {
                isModalOpen.value = val;
            },
            onRemoveInstance: () => {
                isModalOpen.value = false
                modalWrapper.value = null;
            },
        });
    })

    return {
        isModalOpen,
        openModal,
        closeModal,
        modalWrapper,
    };
};
