<script setup lang="ts">
import type { Product } from '~/@types/product';
import ProductBadge from '~/components/shared/ProductBadge.vue';
import { Navigation } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';

defineProps<{
    product: Product,
}>();

const imgArrLength = ref(2);

const navigationBtnPrev = useTemplateRef<HTMLElement>('navigation-btn-prev');
const navigationBtnNext = useTemplateRef<HTMLElement>('navigation-btn-next');

const swiper = ref<Swiper | null>(null);
const swiperActiveIndex = ref(0);
const swiperWrapper = useTemplateRef<HTMLElement>('swiper-wrapper');

onMounted(() => {
    swiper.value = new Swiper(swiperWrapper.value as HTMLElement, {
        modules: [Navigation],
        navigation: {
            prevEl: navigationBtnPrev.value,
            nextEl: navigationBtnNext.value,
        },
        on: {
            slideChange: swiper => {
                swiperActiveIndex.value = swiper.realIndex;
            }
        },
    });
});
</script>

<template>
    <div :class="[$style.productSlider]">
        <div
            ref="swiper-wrapper"
            :class="['swiper', $style.wrapper]"
        >
            <div :class="['swiper-wrapper']">
                <div
                    v-for="item in imgArrLength"
                    :class="['swiper-slide']"
                >
                    <img src="/public/images/products/bamboo-basket.png" :alt="`picture of ${product.title}`">
                </div>
            </div>
            <div
                ref="navigation-btn-prev"
                :class="['swiper-navigation-btn', '_small', '_prev']"
            >
                <svg>
                    <use xlink:href="/svg-sprite/sprite.svg#arrow-right"/>
                </svg>
            </div>
            <div
                ref="navigation-btn-next"
                :class="['swiper-navigation-btn', '_small', '_next']"
            >
                <svg>
                    <use xlink:href="/svg-sprite/sprite.svg#arrow-right"/>
                </svg>
            </div>
            <div :class="['swiper-pagination']">
                <div
                    v-for="(item, index) in imgArrLength"
                    :class="['swiper-pagination-dot', { '_active': swiperActiveIndex === index }]"
                />
            </div>
        </div>
        <div :class="$style.productBadge">
            <ProductBadge :product="product"/>
        </div>
    </div>
</template>

<style module lang="scss">
.productSlider {
    position: relative;
    width: 100%;
    height: 414px;
    background: $neutral-02;

    img {
        width: 100%;
        height: 100%;
    }
}

.productBadge {
    position: absolute;
    top: 24px;
    left: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>
