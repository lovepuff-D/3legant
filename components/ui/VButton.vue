<script
    setup
    lang="ts"
>
import type NuxtLink from '#app/components/nuxt-link';
import { EColor, ESize } from '~/@types/ui/types';
import VDotLoader from '~/components/ui/VDotLoader.vue';
import VIcon from '~/components/ui/VIcon.vue';

const props = withDefaults(defineProps<{
    tag?: keyof HTMLElementTagNameMap | InstanceType<typeof NuxtLink>,
    size?: ESize,
    color?: EColor,
    disabled?: boolean
    loading?: boolean,
    fullWidth?: boolean,
    iconNameBeforeContent?: string,
    iconNameAfterContent?: string,
}>(), {
    tag: 'button',
    size: ESize.medium,
    color: EColor.black,
    loading: false,
    disabled: false,
    fullWidth: false,
});

const style = useCssModule();

const classList = computed(() => [
    style.button,
    style[`_${ props.size }`],
    style[`_${ props.color }`],
    {
        [style._fullWidth]: props.fullWidth,
        [style._disabled]: props.disabled,
    },
]);
</script>

<template>
    <component
        :is="tag"
        :class="classList"
        :disabled="loading"
    >
        <Transition name="opacity">
            <div
                v-show="loading"
                :class="$style.loader"
            >
                <VDotLoader/>
            </div>
        </Transition>
        <div
            v-if="iconNameBeforeContent"
            :class="$style.icon"
        >
            <VIcon :name="iconNameBeforeContent"/>
        </div>
        <slot/>
        <div
            v-if="iconNameAfterContent"
            :class="$style.icon"
        >
            <VIcon :name="iconNameAfterContent"/>
        </div>
    </component>
</template>

<style
    module
    lang="scss"
>
.button {
    position: relative;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    transition-property: color, background-color, border-radius;
    transition-duration: $transition-duration;

    /* sizes */
    &._small {
        @include text(button-xs, 500);

        height: 32px;
        border-radius: 4px;

        &:hover {
            border-radius: 16px;
        }

        .icon {
            svg {
                width: 16px;
                height: 16px;
            }
        }
    }

    &._medium {
        @include text(button-s, 500);

        height: 48px;
        border-radius: 6px;

        &:hover {
            border-radius: 20px;
        }

        .icon {
            svg {
                width: 20px;
                height: 20px;
            }
        }
    }

    &._large {
        @include text(button-m, 500);

        height: 52px;
        border-radius: 8px;

        &:hover {
            border-radius: 24px;
        }

        .icon {
            svg {
                width: 24px;
                height: 24px;
            }
        }
    }

    /* colors */

    &._black {
        background: $neutral-07;
        border-color: $neutral-07;
        color: $base;

        /*&:hover {
            background: $base;
            color: $neutral-07;
        }*/
    }

    &._white {
        background: $base;
        border-color: $neutral-07;
        color: $neutral-07;

        /*&:hover {
            background: $neutral-07;
            color: $base;
        }*/
    }

    /* options */

    &._fullWidth {
        width: 100%;
    }

    &._disabled {
        pointer-events: none;
        opacity: .3;
    }
}

.loader {
    position: absolute;
    inset: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $neutral-07;
    transition: opacity $transition-duration;
}

.icon {
    display: flex;
}
</style>
