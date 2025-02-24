<script setup lang="ts">
import { useCounter } from '~/composables/shared/useCounter';
import VButton from '~/components/ui/VButton.vue';
import { EColor, ESize } from '~/@types/ui/types';
import { useDevice } from '~/composables/shared/useDevice';

const props = defineProps<{
    counterMax: number
}>();

const { isDesktop } = useDevice();

const { isMin, isMax, count, increase, decrease } = useCounter(1, props.counterMax, 1);

// TODO Заменить кнопки на VButton

const addToCartValue = ref(false);
const addToCartText = computed(() => addToCartValue.value ? 'Remove' : 'Add to Cart')
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

            <VButton
                :class="[$style.wishlistBtn, { [$style._active]: favoriteBtnValue }]"
                :size="isDesktop ? ESize.medium : ESize.small"
                :color="EColor.white"
                icon-name-before-content="heart-icon"
                @click="addToFavorite"
            >
                <span>Wishlist</span>
            </VButton>
        </div>
        <VButton
            :class="$style.addBtn"
            :size="isDesktop ? ESize.medium : ESize.small"
            @click="addToCart"
        >
            {{ addToCartText }}
        </VButton>
    </div>
</template>

<style module lang="scss">
.top {
    display: flex;
}

.counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 80px;
    background: #F5F5F5;
    border-radius: 4px;
    font-size: 12px;
    line-height: 20px;

    @include respond-to(d) {
        gap: 24px;
        width: 127px;
        border-radius: 8px;
        font-size: 16px;
        line-height: 26px;
    }
}

.counterBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    transition: opacity $transition-duration;

    &._disabled {
        opacity: 0.5;
    }

    @include respond-to(d) {
        width: 20px;
        height: 20px;
        font-size: 20px;
    }
}

.counterValue {
    min-width: 10px;
}

.wishlistBtn {
    flex: 1;
    margin-left: 8px;

    //&:hover {
    //    svg {
    //        stroke: $base;
    //    }
    //}

    svg {
        width: 16px;
        height: 16px;
        fill: transparent;
        stroke: $neutral-07;

        transition: all $transition-duration;
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
