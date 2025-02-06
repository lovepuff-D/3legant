export const useDevice = () => {
    const { $deviceIs } = useNuxtApp();

    const isTablet = computed(() => $deviceIs.value.tablet);
    const isLaptop = computed(() => $deviceIs.value.laptop);
    const isDesktop = computed(() => $deviceIs.value.desktop);

    return {
        isTablet,
        isLaptop,
        isDesktop,
    }
}
