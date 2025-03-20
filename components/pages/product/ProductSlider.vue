<script setup lang="ts">
import type { Product } from '~/@types/product';
import ProductBadge from '~/components/shared/ProductBadge.vue';
import { useSlider } from '~/composables/shared/useSlider';
import VIcon from '~/components/ui/VIcon.vue';

defineProps<{
    product: Product,
}>();

const imgArrLength = 5;

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
    <div :class="[$style.ProductSlider]">
        <div
            ref="swiper-ref"
            class="swiper"
        >
            <div :class="['swiper-wrapper']">
                <div
                    v-for="item in imgArrLength"
                    :class="[$style.slide]"
                    class="swiper-slide"
                >
                    <img src="/public/images/products/tray-table.png" :alt="`picture of ${product.title}`">
                </div>
            </div>
            <div
                ref="navigation-btn-prev"
                :class="['swiper-navigation-btn', '_small', '_prev']"
            >
                <VIcon
                    name="arrow-left"
                />
            </div>
            <div
                ref="navigation-btn-next"
                :class="['swiper-navigation-btn', '_small', '_next']"
            >
                <VIcon
                    name="arrow-right"
                />
            </div>
            <div :class="['swiper-pagination']">
                <div
                    v-for="(item, index) in imgArrLength"
                    :class="['swiper-pagination-dot', { '_active': sliderActiveIndex === index }]"
                />
            </div>
        </div>
        <div :class="$style.badge">
            <ProductBadge :product="product"/>
        </div>
    </div>
</template>

<style module lang="scss">
.ProductSlider {
    position: relative;
    width: 100%;
    height: 500px;
    background: $neutral-02;

    img {
        width: 100%;
        height: 100%;
    }

    :global(.swiper) {
        height: 100%;
    }

    :global(.swiper-pagination) {
        @include respond-to(l) {
            display: none;
        }
    }
}

.slide {
    width: 100%;

    img {
        object-fit: contain;
    }
}

.badge {
    position: absolute;
    z-index: 1;
    top: 24px;
    left: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>
