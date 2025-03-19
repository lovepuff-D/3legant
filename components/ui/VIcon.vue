<script setup lang="ts">
import { EIconSize } from '~/@types/ui/icon';

withDefaults(defineProps<{
    name: string,
    size?: EIconSize,
    noDefaultTransition?: boolean;
}>(), {
    size: EIconSize.s,
    noDefaultTransition: false,
});
</script>

<template>
    <Icon
        :name="`icon:${name}`"
        :class="[$style.VIcon, $style[size], {[$style._baseTransition]: !noDefaultTransition}]"
    />
</template>

<style module lang="scss">
.VIcon {
    transition: color $transition-duration;

    &.xs {
        width: 16px;
        height: 16px;
    }

    &.s {
        width: 24px;
        height: 24px;
    }

    &.m {
        width: 32px;
        height: 32px;
    }

    &.l {
        width: 48px;
        height: 48px;
    }

    &._baseTransition {
        transition: fill $transition-duration, stroke $transition-duration, color $transition-duration;
    }
}
</style>
