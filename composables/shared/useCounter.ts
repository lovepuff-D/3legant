export const useCounter = (min: number = 0, max: number = 100, initialCountValue: number = 0) => {
    const count = ref(initialCountValue);

    const isMin = computed(() => count.value <= min);
    const isMax = computed(() => count.value >= max);

    const decrease = () => {
        if (isMin.value) {
            return;
        }
        count.value--;
    };

    const increase = () => {
        if (isMax.value) {
            return;
        }
        count.value++;
    };

    return {
        count,
        isMin,
        isMax,
        decrease,
        increase,
    }
}
