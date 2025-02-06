<script setup lang="ts">

</script>

<template>
    <div :class="$style.title">
        <slot/>
        <div :class="$style.icon">
            <svg>
                <use href="/svg-sprite/sprite.svg#chevron-bottom"/>
            </svg>
        </div>
    </div>
</template>

<style module lang="scss">
.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0 8px;
    border-bottom: 1px solid $neutral-07;

    @include text(button-m, 500);
}

.icon {
    width: 24px;
    height: 24px;

    svg {
        width: 100%;
        height: 100%;
    }
}
</style>
