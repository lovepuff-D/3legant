export default defineNuxtPlugin(nuxtApp => {
    // TODO добавить чтение UserAgent'а
    const result = ref({
        tablet: false,
        laptop: false,
        desktop: false,
    });

    const breakpoints = {
        tablet: 720,
        laptop: 1000,
        desktop: 1250,
    };

    if (import.meta.client) {
        window.addEventListener('resize', () => {
            result.value.tablet = window.matchMedia(`(min-width: ${ breakpoints.tablet }px)`).matches;
            result.value.laptop = window.matchMedia(`(min-width: ${ breakpoints.laptop }px)`).matches;
            result.value.desktop = window.matchMedia(`(min-width: ${ breakpoints.desktop }px)`).matches;
        });
    }

    return {
        provide: {
            deviceIs: result
        }
    }
});
