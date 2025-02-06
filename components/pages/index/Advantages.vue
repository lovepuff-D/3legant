<script setup lang="ts">
import type { AdvantageCard as AdvantageCardInterface } from '~/components/pages/types/advantages';

const cards = ref<AdvantageCardInterface[]>([
    {
        title: 'Free Shipping',
        description: 'Order above $200',
        iconUrl: '/_nuxt/public/images/advantages/fast-delivery.svg',
    },
    {
        title: 'Money-back',
        description: '30 days guarantee',
        iconUrl: '/_nuxt/public/images/advantages/money.svg',
    },
    {
        title: 'Secure Payments',
        description: 'Secured by Stripe',
        iconUrl: '/_nuxt/public/images/advantages/lock.svg',
    },
    {
        title: '24/7 Support',
        description: 'Phone and Email support',
        iconUrl: '/_nuxt/public/images/advantages/call.svg',
    },
]);
</script>

<template>
    <div :class="$style.wrapper">
        <div
            v-for="card in cards"
            :class="$style.card"
        >
            <img :class="$style.icon" :src="card.iconUrl" alt="icon of advantage"/>
            <p :class="$style.title">{{ card.title }}</p>
            <p :class="$style.description">{{ card.description }}</p>
        </div>
    </div>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 24px;
}

.card {
    flex: 1 0 45%;
    padding: 32px 16px;
    background: $neutral-02;
}

.icon {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
}

.title {
    @include text(caption-1, semi);
    color: $neutral-07;
}

.description {
    margin-top: 4px;
    color: $neutral-04;

    @include text(caption-1);
}

@include respond-to(d) {
    .wrapper {
        column-gap: 24px;
    }

    .card {
        flex: 1;
        padding: 48px 32px;
    }

    .title {
        @include heading(heading-7);
    }

    .description {
        font-family: 'Poppins', sans-serif;
        margin-top: 8px;
        line-height: 24px;
    }
}
</style>
