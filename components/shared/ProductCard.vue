<script
    setup
    lang="ts"
>
import type { Product } from '~/@types/product';
import RatingIndicator from '~/components/shared/RatingIndicator.vue';
import { useProductHelper } from '~/composables/product/useProductHelper';
import { useCounter } from '~/composables/shared/useCounter';
import ProductBadge from '~/components/shared/ProductBadge.vue';
import VIcon from '~/components/ui/VIcon.vue';

const props = defineProps<{
    card: Product
}>();

const { isShowOldPrice } = useProductHelper(props.card);

const style = useCssModule();

const routeToProductPage = computed(() => `/shop/product/${ props.card.id }`);

const altImg = computed(() => `Picture of product: ${ props.card.title }`);

const isProductFavorite = ref(false);
const favoriteBtnClassList = computed(() => [
    style.favoriteBtn,
    {
        [style._added]: isProductFavorite.value,
    },
]);
const onClickFavoriteBtn = async (event: Event) => {
    const currentTarget = event.currentTarget as HTMLElement
    event.preventDefault();
    isProductFavorite.value = !isProductFavorite.value;
    await nextTick();
    currentTarget?.classList.add(style._animationActive);
    // TODO подумать как лучше обрабатывать анимацию на кликах
    const animationEnd = () => {
        currentTarget?.classList.remove(style._animationActive);
        currentTarget.removeEventListener('animationend', animationEnd)
    }
    currentTarget.addEventListener('animationend', animationEnd)
};

const { isMax, count, increase, decrease } = useCounter(0, props.card.balance);
const addBtnClassList = computed(() => [
    style.actionBtn,
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
                <VIcon v-else name="no-image"/>
                <div :class="$style.leftSide">
                    <ProductBadge :product="card"/>
                </div>
                <div :class="$style.rightSide">
                    <button
                        :class="favoriteBtnClassList"
                        @click="onClickFavoriteBtn"
                    >
                        <VIcon name="heart"/>
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
                            <span v-else :class="$style.addBtn">
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

<style
    module
    lang="scss"
>
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

        .actionBtn {
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
    opacity: 1;

    &._animationActive {
        svg {
            animation: scale 500ms ease;
        }

        @keyframes scale {
            0% {
                transform: scale(1);
            }

            50% {
                transform: scale(0.7);
            }

            100% {
                transform: scale(1);
            }
        }
    }

    svg {
        path {
            transition: fill $transition-duration, stroke $transition-duration;
        }
    }

    &._added {
        svg {
            path {
                fill: $neutral-07;
                stroke: $neutral-07;
            }
        }
    }
}

.actionBtn {
    width: 80%;
    height: 46px;
    padding: 8px;
    background: $neutral-07;
    border-radius: 8px;
    color: $neutral-01;
    opacity: 1;
    transition: opacity $transition-duration;

    @include text(button-s, 500);

    &._added {
        opacity: 1;
    }
}

.addBtn,
.counter {
    position: absolute;
    inset: 0;
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
