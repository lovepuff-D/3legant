<script setup lang="ts">
import HeroBlock from '~/components/pages/index/HeroBlock.vue';
import CategoriesBlock from '~/components/pages/index/CategoriesBlock.vue';
import AdvantagesBlock from '~/components/pages/index/AdvantagesBlock.vue';
import SaleBannerBlock from '~/components/pages/index/SaleBannerBlock.vue';
import PageSection from '~/components/pages/index/layout/PageSection.vue';
import ProductList from '~/components/shared/ProductList.vue';

const { $fetchData } = useNuxtApp();
const { data: cards } = await useAsyncData(() => $fetchData.product.getProducts());

</script>

<template>
    <div class="page">
        <section class="container">
            <HeroBlock/>
        </section>
        <section class="container">
            <CategoriesBlock/>
        </section>
        <section
            v-if="cards"
            class="container"
        >
            <PageSection
                title="New Arrivals"
                link-title="More Products"
                href="/shop"
                is-show-footer
                :class="[$style.pageSection, $style._noMarginBottom]"
            >
                <ProductList :cards="cards"/>
            </PageSection>
        </section>
        <section class="container">
            <AdvantagesBlock :class="$style.advantages"/>
        </section>
        <!--<div :class="$style.testBlock">Sale</div>-->
        <SaleBannerBlock/>
        <!--<div :class="$style.testBlock">Subscription</div>-->
    </div>
</template>

<style module lang="scss">
.testBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: rgba($neutral-02, 0.4);
}

.advantages {
    padding: 32px 0;
}

.pageSection {
    margin: 32px 0;

    &._noMarginBottom {
        margin-bottom: 0;
    }
}

@include respond-to(d) {
    .advantages {
        padding: 48px 0;
    }

    .pageSection {
        margin: 48px 0;
    }
}
</style>
