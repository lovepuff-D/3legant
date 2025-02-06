<script setup lang="ts">

import IndexPageLink from '~/components/pages/components/IndexPageLink.vue';
</script>

<template>
    <section :class="$style.wrapper">
        <img :class="$style.img" src="/public/images/sale-banner.png" alt="Sale banner">
        <div :class="$style.content">
            <div :class="$style.saleUp">SALE UP TO 35% OFF</div>
            <div :class="$style.title">HUNDREDS of <br> New lower prices!</div>
            <p :class="$style.description">It’s more affordable than ever to give every room in your home a stylish
                makeover</p>
            <IndexPageLink :class="$style.link" href="/shop">
                Shop Now
            </IndexPageLink>
        </div>
    </section>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    background: $neutral-02;
}

.img,
.content {
    height: 367px;
}

.img {
    object-fit: cover;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 16px;
    padding: 0 32px;
}

.saleUp {
    font-size: 16px;
    line-height: 16px;
    color: $blue;
    font-weight: 700;
}

.title {
    @include heading(heading-5);
}

.description {
    @include text(body-2);
}

.link {
    margin-top: 8px;
}

@include respond-to(t) {
    .img,
    .content {
        height: 450px;
    }
}

@include respond-to(d) {
    .wrapper {
        flex-direction: row;
        max-height: 532px;
    }

    .img,
    .content {
        flex: 1 0 50%;
        height: auto;
    }

    .content {
        padding: 0 72px;
    }

    .title {
        @include heading(heading-4);
    }

    .description {
        width: 60%;
        @include text(body-1);
    }
}
</style>
