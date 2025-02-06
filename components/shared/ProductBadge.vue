<script setup lang="ts">
import type { Product } from '~/@types/product';
import { useProductHelper } from '~/composables/product/useProductHelper';

const props = defineProps<{
    product: Product,
}>();

const { isDiscountActive } = useProductHelper(props.product);

</script>

<template>
    <div
        v-if="product.is_new"
        :class="[$style.badge, $style.new]"
    >
        New
    </div>
    <div
        v-if="isDiscountActive"
        :class="[$style.badge, $style.discount]"
    >
        -{{ product.discount!.value }}%
    </div>
</template>

<style module lang="scss">
.badge {
    padding: 4px 14px;
    border-radius: 4px;
    text-align: center;
    @include text(hairline-1, 700);
}

.new {
    background: $base;
}

.discount {
    background: #38CB89;
    color: $neutral-01;
}
</style>
