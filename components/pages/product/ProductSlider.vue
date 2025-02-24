<script setup lang="ts">
import type { Product } from '~/@types/product';
import ProductBadge from '~/components/shared/ProductBadge.vue';
import { Navigation } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';

defineProps<{
    product: Product,
}>();

const imgArrLength = ref(5);

const navigationBtnPrev = useTemplateRef<HTMLElement>('navigation-btn-prev');
const navigationBtnNext = useTemplateRef<HTMLElement>('navigation-btn-next');

const swiper = ref<Swiper | null>(null);
const swiperActiveIndex = ref(0);
const swiperWrapper = useTemplateRef<HTMLElement>('swiper-wrapper');

onMounted(() => {
    swiper.value = new Swiper(swiperWrapper.value as HTMLElement, {
        slidesPerView: 'auto',
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
    <div :class="[$style.ProductSlider]">
        <div
            ref="swiper-wrapper"
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
