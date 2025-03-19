<script setup lang="ts">
import { $fetch } from 'ofetch';

const { $fetchData } = useNuxtApp();

console.log('compoennt 1');

const { data: test } = await useAsyncData(async () => {
    const res = await new Promise(res => {
        setTimeout(() => {
            res('qwe');
        }, 1000);
    })
    const res2 = await new Promise(res => {
        setTimeout(() => {
            res('qwe');
        }, 1000);
    })
    return res + res2;
});

console.log('compoennt 1.5', test.value);

const { data: cards } = await useAsyncData(async () => {
    const res1 = await $fetch('api/advantages');
    console.log('isServer1', res1);
    const res2 = await $fetchData.advantages.getAdvantages();
    console.log('isServer2', res2);
    return await $fetchData.advantages.getAdvantages();
});

console.log('compoennt 2', cards.value);

onMounted(() => {
    $fetchData.advantages.getAdvantages();
})
</script>

<template>
    <div :class="$style.wrapper">
        <div
            v-for="(card, index) in cards"
            :key="index"
            :class="$style.card"
        >
            <div
                :class="$style.icon"
                v-html="card.icon"
            />
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
