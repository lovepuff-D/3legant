<script setup lang="ts">
import VIcon from '~/components/ui/VIcon.vue';
import { EIconSize } from '~/@types/ui/icon';

defineProps<{
    rating: number
}>();
</script>

<template>
    <div
        v-if="rating"
        :class="[$style.rating]"
        :title="String(rating)"
    >
        <VIcon
            v-for="i in 5"
            :key="i"
            name="star"
            :size="EIconSize.xs"
            :class="{ [$style._highlight]: i <= rating }"
        />
    </div>
</template>

<style module lang="scss">
.rating {
    display: flex;
    align-items: center;
    gap: 2px;

    & > svg {
        width: 16px;
        height: 16px;

        stroke: $neutral-05;
        fill: none;
    }

    ._highlight {
        path {
            fill: $neutral-05;
        }
    }
}
</style>
