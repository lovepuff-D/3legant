<script setup lang="ts">

</script>

<template>
    <div :class="$style.wrapper">
        <div :class="$style.slider">
            <img src="/public/images/hero-slider-1.png" alt="picture of room">
            <div :class="[$style.sliderNavigationBtn, $style._prev]"/>
            <div :class="[$style.sliderNavigationBtn, $style._next]"/>
            <div :class=$style.sliderPagination>
                <div :class="[$style.sliderPaginationDot, $style._active]"/>
                <div :class="$style.sliderPaginationDot"/>
                <div :class="$style.sliderPaginationDot"/>
            </div>
        </div>
        <div :class="$style.textContent">
            <h1 :class="$style.title">
                Simply Unique<span>/</span>
                <br/>
                Simply Better<span>.</span>
            </h1>
            <p :class="$style.subTitle"><span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est
                since 2019. </p>
        </div>
    </div>
</template>

<style module lang="scss">
.wrapper {
    padding-bottom: 40px;
}

.slider {
    position: relative;
    margin-bottom: 32px;
    height: 304px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    @include respond-to(d) {
        height: 536px;
    }
}

.sliderNavigationBtn {
    @include respond-to(d) {
        position: absolute;
        top: 50%;
        width: 52px;
        height: 52px;
        background: $base;
        border-radius: 50%;
        transform: translateY(-50%);

        &._prev {
            left: 32px;
        }
        &._next {
            right: 32px;
        }
    }
}

.sliderPagination {
    position: absolute;
    left: 50%;
    bottom: 16px;
    display: flex;
    gap: 16px;
    transform: translateX(-50%);
}

.sliderPaginationDot {
    width: 8px;
    height: 8px;
    background: $base;
    border-radius: 50%;
    transition: width $transition-duration, border-radius $transition-duration;

    &._active {
        width: 30px;
        border-radius: 12px;
    }
}

.textContent {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include respond-to(d) {
        flex-direction: row;
        align-items: center;
        gap: 24px;
    }
}

.title {
    color: $neutral-05;
    @include heading(heading-4);

    span {
        color: $neutral-04;
    }

    @include respond-to(d) {
        flex: 1;
        @include heading(heading-2);
    }
}

.subTitle {
    color: $neutral-04;
    @include text(caption-1);

    span {
        color: $neutral-05;
        font-weight: 600;
    }

    @include respond-to(d) {
        max-width: 424px;
        margin-right: 29px;
        @include text(body-2);
    }
}
</style>
