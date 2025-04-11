<script setup lang="ts">
import ProductHero from '~/components/pages/product/ProductHero.vue';
import ProductList from '~/components/shared/ProductList.vue';
import PageSection from '~/components/pages/index/layout/PageSection.vue';
import Breadcrumbs from '~/components/shared/Breadcrumbs.vue';
import type { BreadcrumbList } from '~/@types/ui/breadcrumbs';
import { ERoutes } from '~/@types/routes';

const route = useRoute();
const { $fetchData } = useNuxtApp();
const { data: product } = await useAsyncData(() => $fetchData.product.getProduct(Number(route.params.id)));
const { data: cards } = await useAsyncData(() => $fetchData.product.getProducts());

const paths: BreadcrumbList = [
    {
        title: 'Home',
        link: ERoutes.Main,
    },
    {
        title: 'Shop',
        link: ERoutes.Shop,
    },
    {
        title: product.value.title,
        link: `/shop/product/${ product.value.id }`,
    },
];
</script>

<template>
    <div class="container page">
        <Breadcrumbs
            :paths="paths"
            :class="$style.breadcrumbs"
        />
        <ProductHero
            v-if="product"
            :product="product"
        />
        <PageSection
            v-if="cards?.length"
            title="You might also like"
            link-title="More Products"
            title-size="small"
            href="/shop"
            is-show-footer
            :class="$style.productListWrapper"
        >
            <ProductList :cards="cards"/>
        </PageSection>
    </div>
</template>

<style module lang="scss">
.breadcrumbs {
    margin: 16px 0;
}

.productListWrapper {
    margin: 32px 0 80px;
}
</style>
