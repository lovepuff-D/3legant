<script setup lang="ts">
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
        <svg
            v-for="i in 5"
            :key="i"
            :class="{ [$style._highlight]: i <= rating }"
        >
            <use href="/svg-sprite/sprite.svg#rating-star"/>
        </svg>
    </div>
</template>

<style module lang="scss">
.rating {
    display: flex;
    gap: 2px;

    & > svg {
        width: 16px;
        height: 16px;

        stroke: $neutral-05;
        fill: none;
    }

    ._highlight {
        fill: $neutral-05;
    }
}
</style>
