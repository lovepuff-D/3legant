<script setup lang="ts">
import { useSlider } from '~/composables/shared/useSlider';
import VIcon from '~/components/ui/VIcon.vue';

const imgArrLength = 3;

const swiperRef = useTemplateRef<HTMLElement>('swiper-ref');
const navigationBtnPrev = useTemplateRef<HTMLElement>('navigation-btn-prev');
const navigationBtnNext = useTemplateRef<HTMLElement>('navigation-btn-next');

const {
    sliderActiveIndex,
    initSlider,
} = useSlider();

onMounted(() => {
    if (swiperRef.value && navigationBtnPrev.value && navigationBtnNext.value) {
        initSlider(swiperRef.value, { navigationBtnPrev: navigationBtnPrev.value, navigationBtnNext: navigationBtnNext.value });
    }
});
</script>

<template>
    <div :class="$style.wrapper">
        <div :class="$style.slider">
            <div
                ref="swiper-ref"
                class="swiper"
            >
                <div class="swiper-wrapper">
                    <div
                        v-for="item in imgArrLength"
                        :key="item"
                        :class="[$style.slide]"
                        class="swiper-slide"
                    >
                        <img src="/public/images/hero-slider-1.png" alt="picture of room">
                    </div>
                </div>
            </div>
            <div
                ref="navigation-btn-prev"
                :class="['swiper-navigation-btn', '_prev']"
            >
                <VIcon
                    name="arrow-left"
                />
            </div>
            <div
                ref="navigation-btn-next"
                :class="['swiper-navigation-btn', '_next']"
            >
                <VIcon
                    name="arrow-right"
                />
            </div>
            <div class="swiper-pagination">
                <div
                    v-for="(item, index) in imgArrLength"
                    :key="item"
                    :class="['swiper-pagination-dot', { '_active': sliderActiveIndex === index }]"
                />
            </div>
        </div>
        <div :class="$style.textContent">
            <h1 :class="$style.title">
                Simply Unique<span>/</span>
                <br>
                Simply Better<span>.</span>
            </h1>
            <p :class="$style.subTitle"><span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est
                since 2019. </p>
        </div>
    </div>
</template>

<style module lang="scss">
.wrapper {
    padding-bottom: 40px;
}

.slider {
    position: relative;
    margin-bottom: 32px;
    height: 304px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    @include respond-to(d) {
        height: 536px;
    }
}

.textContent {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include respond-to(d) {
        flex-direction: row;
        align-items: center;
        gap: 24px;
    }
}

.title {
    color: $neutral-05;
    @include heading(heading-4);

    span {
        color: $neutral-04;
    }

    @include respond-to(d) {
        flex: 1;
        @include heading(heading-2);
    }
}

.subTitle {
    color: $neutral-04;
    @include text(caption-1);

    span {
        color: $neutral-05;
        font-weight: 600;
    }

    @include respond-to(d) {
        max-width: 424px;
        margin-right: 29px;
        @include text(body-2);
    }
}
</style>
