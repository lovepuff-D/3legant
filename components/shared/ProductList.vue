<script setup lang="ts">
import ProductCard from '~/components/shared/ProductCard.vue';
import type { Product } from '~/@types/product';

defineProps<{
    cards: Product[]
}>();

const onScroll = () => {
    console.log('scroll');
}
</script>

<template>
    <div :class="$style.wrapper" @scroll="onScroll">
        <ProductCard
            v-for="card in cards"
            :key="card.id"
            :card="card"
        />
    </div>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    gap: 16px;
    overflow-y: auto;
    padding-bottom: 40px;
}

@include respond-to(d) {
    .wrapper {
        gap: 24px;
    }
}
</style>
