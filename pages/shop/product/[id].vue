<script setup lang="ts">
import type { Product } from '~/@types/product';
import ProductHero from '~/components/pages/product/ProductHero.vue';
import ProductList from '~/components/shared/ProductList.vue';
import PageSection from '~/components/pages/index/layout/PageSection.vue';
import Breadcrumbs from '~/components/shared/Breadcrumbs.vue';
import type { BreadcrumbList } from '~/@types/ui/breadcrumbs';

const route = useRoute();

const { data: product } = await useAsyncData<Product>(async () => {
    return await $fetch(`/api/product/${ route.params.id }`);
});

const { data: cards } = await useFetch('/api/products');

const path: BreadcrumbList = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Shop',
        link: '/shop',
    },
    {
        title: product.value.title,
        link: `/shop/product/${ product.value.id }`,
    },
];
</script>

<template>
    <div class="container">
        <Breadcrumbs
            :path="path"
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
