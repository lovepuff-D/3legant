<script setup lang="ts">
import type { Product } from '~/@types/product';
import RenderlessCounter from '~/components/shared/RenderlessCounter.vue';
import RatingIndicator from '~/components/shared/RatingIndicator.vue';
import { useProductHelper } from '~/composables/product/useProductHelper';
import { useCounter } from '~/composables/shared/useCounter';
import ProductBadge from '~/components/shared/ProductBadge.vue';

const props = defineProps<{
    card: Product
}>();

const { isShowOldPrice } = useProductHelper(props.card);

const style = useCssModule();

// TODO возможно стоит переписать на синтаксис объекта т.к мб не будет доступа через $route.params.id
const routeToProductPage = computed(() => `shop/product/${ props.card.id }`);

const isShowDiscount = computed(() => {
    if (!props.card.discount) {
        return false;
    }

    if (!props.card.discount.value) {
        return false;
    }

    const nowDate = new Date().getTime();
    const expiresDate = new Date(props.card.discount.expires).getTime();

    return expiresDate > nowDate;
});
const altImg = computed(() => `Picture of product: ${ props.card.title }`);

const isProductFavorite = ref(false);
const favoriteBtnClassList = computed(() => [
    style.favoriteBtn,
    {
        [style._added]: isProductFavorite.value,
    },
]);
const onClickFavoriteBtn = (evt: Event) => {
    evt.preventDefault();
    isProductFavorite.value = !isProductFavorite.value;
};

const { isMax, count, increase, decrease } = useCounter(0, props.card.balance);
const addBtnClassList = computed(() => [
    style.addBtn,
    {
        [style._added]: count.value > 0,
    },
]);
const onClickAddBtn = (evt: Event) => {
    evt.preventDefault();
    if (count.value >= 1) {
        return;
    }
    count.value++;
};
</script>

<template>
    <NuxtLink :to="routeToProductPage">
        <article :class="$style.ProductCard">
            <header :class="$style.header">
                <img
                    v-if="card.picture"
                    :src="card.picture"
                    :alt="altImg"
                    :class="$style.img"
                >
                <svg
                    v-else
                    :class="$style.noImgIcon"
                >
                    <use href="/svg-sprite/sprite.svg#no-image"/>
                </svg>
                <div :class="$style.leftSide">
                    <ProductBadge :product="card"/>
                </div>
                <div :class="$style.rightSide">
                    <button
                        @click="onClickFavoriteBtn"
                        :class="favoriteBtnClassList"
                    >
                        <svg>
                            <use href="/svg-sprite/sprite.svg#heart-icon"/>
                        </svg>
                    </button>
                </div>
                <div :class="$style.bottomSide">
                    <button
                        :class="addBtnClassList"
                        @click="onClickAddBtn"
                    >
                        <Transition name="opacity">
                            <div
                                v-if="count"
                                :class="$style.counter"
                            >
                                <div
                                    :class="$style.counterBtn"
                                    @click.stop.prevent="decrease"
                                >
                                    -
                                </div>
                                <div>
                                    {{ count }}
                                </div>
                                <div
                                    :class="[$style.counterBtn, { [$style._disabled]: isMax }]"
                                    @click.stop.prevent="increase"
                                >
                                    +
                                </div>
                            </div>
                            <span v-else>
                                Add to cart
                            </span>
                        </Transition>
                    </button>
                </div>
            </header>
            <div :class="$style.content">
                <RatingIndicator :rating="card.rating"/>
                <div
                    v-if="card.title"
                    :class="$style.title"
                >
                    {{ card.title }}
                </div>
                <div :class="$style.priceBlock">
                    <div :class="$style.price">
                        ${{ card.price.toFixed(2) }}
                    </div>
                    <div
                        v-if="isShowOldPrice"
                        :class="$style.oldPrice"
                    >
                        ${{ card.old_price.toFixed(2) }}
                    </div>
                </div>
            </div>
        </article>
    </NuxtLink>
</template>

<style module lang="scss">
.ProductCard {
    min-width: 231px;
}

.header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    background: $neutral-02;
    overflow: hidden;

    &:hover {
        .favoriteBtn {
            opacity: 1;
        }

        .addBtn {
            opacity: 1;
        }
    }
}

.img {
    width: 100%;
    text-align: center;
}

.noImgIcon {
    width: 24px;
    height: 24px;
}

.leftSide {
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.rightSide {
    position: absolute;
    top: 16px;
    right: 16px;
}

.bottomSide {
    $bottom: 16px;

    position: absolute;
    bottom: $bottom;
    display: flex;
    justify-content: center;
    width: 100%;
}

.favoriteBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    padding: 6px;
    border-radius: 50%;
    background: $base;
    box-shadow: 0 0 13px -10px rgba(0, 0, 0, 0.75);
    transition: opacity $transition-duration;
    opacity: 0;

    svg {
        width: 100%;
        height: 100%;

        stroke: $neutral-05;
        stroke-width: 1px;
    }

    &._added {
        opacity: 1;
    }
}

.addBtn {
    width: 80%;
    padding: 8px;
    background: $neutral-07;
    border-radius: 8px;
    color: $neutral-01;
    opacity: 0;
    transition: opacity $transition-duration;

    @include text(button-s, 500);

    &._added {
        opacity: 1;
    }
}

.counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.counterBtn {
    width: 24px;

    &._disabled {
        opacity: 0.5;
    }
}

.content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 12px;
}

.title {
    @include text(body-2);
}

.priceBlock {
    display: flex;
    align-items: center;
    gap: 12px;
}

.price {
    @include text(caption-1, semi);
}

.oldPrice {
    color: $neutral-04;
    text-decoration: line-through;
    @include text(caption-1);
}

@include respond-to(d) {
    .header {
        min-height: 350px;
    }
}
</style>
