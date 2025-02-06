<script setup lang="ts">
import Hero from '~/components/pages/index/Hero.vue';
import Categories from '~/components/pages/index/Categories.vue';
import Advantages from '~/components/pages/index/Advantages.vue';
import SaleBanner from '~/components/pages/index/SaleBanner.vue';
import PageSection from '~/components/pages/index/layout/PageSection.vue';
import ProductList from '~/components/shared/ProductList.vue';

const { data: cards } = await useFetch('/api/products')

</script>

<template>
    <div>
        <section class="container">
            <Hero/>
        </section>
        <section class="container">
            <Categories/>
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
            <Advantages :class="$style.advantages"/>
        </section>
        <!--<div :class="$style.testBlock">Sale</div>-->
        <SaleBanner/>
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
