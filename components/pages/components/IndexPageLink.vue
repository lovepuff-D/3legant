<script setup lang="ts">
import type { RouterLinkProps } from '#vue-router';

defineProps<{
    href: RouterLinkProps['to']
}>();
</script>

<template>
    <NuxtLink :to="href" :class="$style.wrapper">
        <div :class="$style.link">
            <span><slot/></span>
            <span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33331 8H12.6666" stroke="#141718" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.66669 12L12.6667 8" stroke="#141718" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.66669 4L12.6667 8" stroke="#141718" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        </div>
        <div :class="$style.line"></div>
    </NuxtLink>
</template>

<style module lang="scss">
.wrapper {
    &:hover {
        .line {
            width: 30%;
        }
    }
}

.link {
    display: inline-flex;
    align-items: center;
    gap: 4px;

    @include text(button-xs, 500);

    svg {
        display: flex;
    }
}

.line {
    width: 100%;
    height: 1px;
    background: $neutral-07;
    transition: width $transition-duration;
}

@include respond-to(d) {
    .link {
        @include text(button-s, 500);
    }
}

</style>
