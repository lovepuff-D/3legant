<script
    setup
    lang="ts"
>
import type { RouterLinkProps } from '#vue-router';
import { EIconSize } from '~/@types/ui/icon';
import VIcon from '~/components/ui/VIcon.vue';

defineProps<{
    href: RouterLinkProps['to']
}>();
</script>

<template>
    <NuxtLink
        :to="href"
        :class="$style.wrapper"
    >
        <div :class="$style.link">
            <span><slot/></span>
            <span>
            <VIcon
                name="arrow-right"
                :size="EIconSize.custom"
            />
        </span>
        </div>
        <div :class="$style.line"/>
    </NuxtLink>
</template>

<style
    module
    lang="scss"
>
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
        width: 16px;
        height: 16px;

        path {
            stroke-width: 1.5;
        }

        @include respond-to(d) {
            width: 20px;
            height: 20px;
        }
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
