<script setup lang="ts">
// TODO Попробовать сделать path автогенерируемым
import type { BreadcrumbList } from '~/@types/ui/breadcrumbs';
import { useDevice } from '~/composables/shared/useDevice';
import VIcon from '~/components/ui/VIcon.vue';
import { EIconSize } from '~/@types/ui/icon';

const props = defineProps<{
    path: BreadcrumbList,
}>();

const { isTablet } = useDevice();

// TODO Временное решение, до реализации dropdown
const isShowDropdown = ref(false);
const onClickEllipsis = () => {
    isShowDropdown.value = !isShowDropdown.value;
}

const isShortened = computed(() => !isTablet.value);

const restPaths = computed(() => props.path.slice(1, props.path.length - 1));
const firstPath = computed(() => props.path[0]);
const lastPath = computed(() => props.path[props.path.length - 1]);
</script>

<template>
    <div :class="$style.wrapper">
        <ul :class="$style.breadcrumbs">
            <template v-if="isShortened && path.length > 3">
                <li
                    :class="$style.breadcrumb"
                >
                    <NuxtLink :to="firstPath.link">
                        {{ firstPath.title }}
                    </NuxtLink>
                </li>
                <li
                    :class="$style.breadcrumb"
                    @click="onClickEllipsis"
                >
                    ...
                </li>
                <li :class="$style.breadcrumb">
                    <NuxtLink :to="lastPath.link">
                        {{ lastPath.title }}
                    </NuxtLink>
                </li>
            </template>
            <template v-else>
                <li
                    v-for="(el, index) in path"
                    :key="el.title"
                    :class="$style.breadcrumb"
                >
                    <NuxtLink :to="el.link">
                        {{ el.title }}
                    </NuxtLink>
                    <VIcon
                        v-if="path.length !== index + 1"
                        name="chevron-right"
                        :size="EIconSize.xxs"
                    />
                </li>
            </template>
        </ul>
        <ul
            v-if="isShortened"
            v-show="isShowDropdown"
            :class="$style.dropdown"
        >
            <li
                v-for="pathEl in restPaths"
                :key="pathEl.title"
            >
                <NuxtLink :to="pathEl.link">
                    {{ pathEl.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style module lang="scss">
.wrapper {
    position: relative;
}

.breadcrumbs {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 12px;
    font-weight: 500;
    line-height: 20px;

    @include respond-to(d) {
        @include text(button-xs, 500);
    }
}

.breadcrumb {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 8px;
    transition: color $transition-duration;

    $block: &;

    &:last-child {
        pointer-events: none;
    }

    &:not(:last-child) {
        color: #605F5F;

        &:hover {
            color: $neutral-07;
        }
    }
}

.dropdown {
    position: absolute;
    bottom: -90px;
    z-index: 5;
    background: $base;
}
</style>
