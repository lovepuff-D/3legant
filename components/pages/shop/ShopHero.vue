<script
    setup
    lang="ts"
>
import Breadcrumbs from '~/components/shared/Breadcrumbs.vue';
import type { BreadcrumbList } from '~/@types/ui/breadcrumbs';
import { ERoutes } from '~/@types/routes';

const paths: BreadcrumbList = [
    {
        title: 'Home',
        link: ERoutes.Main,
    },
    {
        title: 'Shop',
        link: ERoutes.Shop,
    },
];
</script>

<template>
    <div :class="$style.ShopHero">
        <picture>
            <source srcset="/public/images/shop-page-hero.png" media="(min-width: 720px)">
            <img
                src="/public/images/shop-page-hero-mobile.png"
                alt="Image of hero block"
                :class="$style.heroImg"
            >
        </picture>
        <Breadcrumbs :paths="paths"/>
        <h1 :class="$style.heroTitle">Shop Page</h1>
        <p :class="$style.heroDescription">Let’s design the place you always imagined.</p>
    </div>
</template>

<style
    module
    lang="scss"
>
.ShopHero {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 78px 0;

    @include respond-to(t) {
        gap: 24px;
        padding: 115px 0;
    }

    @include respond-to(d) {
        gap: 24px;
        padding: 115px 0;
    }
}

.heroImg {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.heroTitle {
    @include heading(heading-4);

    @include respond-to(d) {
        @include heading(heading-3);
    }
}

.heroDescription {
    @include text(body-2);

    text-align: center;

    @include respond-to(d) {
        @include text(body-1);
    }
}
</style>
