<script setup lang="ts">
import IndexPageLink from '~/components/pages/components/IndexPageLink.vue';
</script>

<template>
    <div :class="$style.wrapper">
        <article :class="[$style.block, $style._medium]">
            <div :class="$style.imgWrapper">
                <img src="/public/images/categories/category-1.png" alt="">
            </div>
            <div :class="$style.content">
                <h3 :class="$style.contentTitle">Living Room</h3>
                <IndexPageLink
                    href="/shop"
                    :class="$style.contentLink"
                >
                    Shop Now
                </IndexPageLink>
            </div>
        </article>
        <article :class="[$style.block, $style._small]">
            <div :class="$style.imgWrapper">
                <img src="/public/images/categories/category-2.png" alt="">
            </div>
            <div :class="$style.content">
                <h3 :class="$style.contentTitle">Bedroom</h3>
                <IndexPageLink
                    href="/shop"
                    :class="$style.contentLink"
                >
                    Shop Now
                </IndexPageLink>
            </div>
        </article>
        <article :class="[$style.block, $style._small]">
            <div :class="$style.imgWrapper">
                <img src="/public/images/categories/category-3.png" alt="">
            </div>
            <div :class="$style.content">
                <h3 :class="$style.contentTitle">Kitchen</h3>
                <IndexPageLink
                    href="/shop"
                    :class="$style.contentLink"
                >
                    Shop Now
                </IndexPageLink>
            </div>
        </article>
    </div>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include respond-to(d) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas:
        "main second"
        "main third";
        gap: 24px;

        & > *:nth-child(1) {
            grid-area: main;
        }
        & > *:nth-child(2) {
            grid-area: second;
        }
        & > *:nth-child(3) {
            grid-area: third;
        }
    }
}

.block {
    position: relative;
    display: flex;
    padding: 32px;
    background: $neutral-02;


    &._medium {
        height: 377px;

        .imgWrapper {
            height: auto;
            right: 0;
            bottom: 0;
        }

        @include respond-to(d) {
            height: 664px;
        }
    }

    &._small {
        height: 180px;

        .content {
            margin-top: auto;
        }

        .imgWrapper {
            top: 0;
            right: 0;
        }

        @include respond-to(d) {
            height: auto;
        }
    }
}

.content {
    position: relative;
}

.contentTitle {
    @include heading(heading-6);
}

.contentLink {
    margin-top: 8px;
}

.imgWrapper {
    position: absolute;
    z-index: 0;

    img {
        width: 100%;
        height: 100%;
    }

    @include respond-to(d) {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
}
</style>
