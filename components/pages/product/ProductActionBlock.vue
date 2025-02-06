<script setup lang="ts">
import { useCounter } from '~/composables/shared/useCounter';

const props = defineProps<{
    counterMax: number
}>();

const { isMin, isMax, count, increase, decrease } = useCounter(1, props.counterMax, 1);

const addToCartValue = ref(false);
const addToCartText = computed(() => addToCartValue.value ? 'Remove from cart' : 'Add to cart')
const addToCart = () => {
    addToCartValue.value = !addToCartValue.value;
    console.log('was added/removed: ', count.value);
}

const favoriteBtnValue = ref(false);
const addToFavorite = () => {
    favoriteBtnValue.value = !favoriteBtnValue.value;
}
</script>

<template>
    <div>
        <div :class="$style.top">
            <div :class="$style.counter">
                <button
                    :class="[$style.counterBtn, { [$style._disabled]: isMin }]"
                    @click="decrease"
                >
                    -
                </button>
                <span :class="$style.counterValue">{{ count }}</span>
                <button
                    :class="[$style.counterBtn, { [$style._disabled]: isMax }]"
                    @click="increase"
                >
                    +
                </button>
            </div>

            <button
                :class="[$style.wishlistBtn, $style.btn, $style._white, { [$style._active]: favoriteBtnValue }]"
                @click="addToFavorite"
            >
                <svg>
                    <use href="/svg-sprite/sprite.svg#heart-icon"/>
                </svg>
                <span>Wishlist</span>
            </button>
        </div>
        <button
            :class="[$style.addBtn, $style.btn]"
            @click="addToCart"
        >
            {{ addToCartText }}
        </button>
    </div>
</template>

<style module lang="scss">
.top {
    display: flex;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 4px 20px;
    background: $neutral-07;
    border-radius: 4px;
    color: $base;

    @include text(button-xs, 500);

    &._white {
        border: 1px solid $neutral-07;
        background: none;
        color: $neutral-07;
    }

    svg {
        width: 16px;
        height: 16px;
    }
}

.counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 80px;
    background: #F5F5F5;
    border-radius: 4px;
}

.counterBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;

    &._disabled {
        opacity: 0.5;
    }
}

.counterValue {
    min-width: 10px;
}

.wishlistBtn {
    flex: 1;
    margin-left: 8px;

    svg {
        fill: transparent;
        stroke: $neutral-07;
    }

    &._active {
        svg {
            fill: $neutral-07;
        }
    }
}

.addBtn {
    width: 100%;
    margin-top: 16px;
}
</style>
