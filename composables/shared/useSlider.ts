import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import type { SwiperModule, SwiperOptions } from 'swiper/types';
import 'swiper/css';

type TInitSlider = (
    sliderRef: HTMLElement,
    navigation: {
        navigationBtnPrev?: Nullable<HTMLElement>,
        navigationBtnNext?: Nullable<HTMLElement>
    },
) => void;

export const useSlider = () => {
    const slider = ref<Nullable<Swiper>>(null);
    const sliderActiveIndex = ref(0);

    const initSlider: TInitSlider = (
        sliderRef,
        { navigationBtnPrev, navigationBtnNext },
    ) => {
        const defaultOptions: SwiperOptions = {
            slidesPerView: 'auto',
        };

        navigationBtnPrev = toValue(navigationBtnPrev);
        navigationBtnNext = toValue(navigationBtnNext);

        const modulesUsed: SwiperModule[] = [];


        if (navigationBtnPrev || navigationBtnNext) {
            modulesUsed.push(Navigation);
            defaultOptions.navigation = {
                prevEl: navigationBtnPrev,
                nextEl: navigationBtnNext,
            }
        }

        slider.value = new Swiper(toValue(sliderRef), {
            ...defaultOptions,
            modules: modulesUsed,
            on: {
                slideChange: swiper => {
                    sliderActiveIndex.value = swiper.realIndex;
                },
            },
        });
    };

    return {
        slider,
        sliderActiveIndex,
        initSlider,
    };
};
