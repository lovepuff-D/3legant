<script setup lang="ts">
import type { RouterLinkProps } from '#vue-router';
import IndexPageLink from '~/components/pages/components/IndexPageLink.vue';

withDefaults(defineProps<{
    title: string,
    linkTitle: string,
    isShowFooter?: boolean,
    href: RouterLinkProps['to']
}>(), {
    isShowFooter: false,
});


</script>

<template>
    <div>
        <div :class="$style.header">
            <div :class="$style.title">{{ title }}</div>
            <IndexPageLink
                :class="$style.headerLink"
                :href="href"
            >
                {{ linkTitle }}
            </IndexPageLink>
        </div>
        <slot/>
        <div v-if="isShowFooter" :class="$style.footer">
            <IndexPageLink :href="href">
                {{ linkTitle }}
            </IndexPageLink>
        </div>
    </div>
</template>

<style module lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
}

.title {
    width: 60%;
    @include heading(heading-5);
}

.headerLink {
    display: none;
}

.footer {
    margin-top: 40px;
}

@include respond-to(d) {
    .title {
        width: auto;
        @include heading(heading-4);
    }

    .headerLink {
        display: block;
    }

    .footer {
        display: none;
    }
}
</style>
