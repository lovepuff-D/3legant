<script
    setup
    lang="ts"
>
import { EIconSize } from '~/@types/ui/icon';
import VIcon from '~/components/ui/VIcon.vue';

definePageMeta({
    layout: false,
});
</script>

<template>
    <div :class="$style.wrapper">
        <div :class="$style.preview">
            <NuxtLink to="/" :class="$style.companyLogo">
                <VIcon
                    name="company-logo"
                    :size="EIconSize.custom"
                />
            </NuxtLink>
            <img
                :class="$style.img"
                src="/public/images/auth.png"
                alt=""
            >
        </div>
        <div :class="$style.auth">
            <NuxtPage/>
        </div>
    </div>
</template>

<style
    module
    lang="scss"
>
.wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.preview {
    position: relative;
    height: 430px;
    background: $neutral-02;

    @include respond-to(t) {
        height: auto;
    }
}

.companyLogo {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    margin-top: 32px;
    transition: opacity $transition-duration;

    &:hover {
        opacity: 0.6;
    }

    svg {
        width: 105px;
        height: 24px;
        margin: 0 auto;

        path:nth-child(2) {
            color: $neutral-04;
            stroke: $neutral-04;
        }
    }
}

.img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: translate(-50%, -50%);
}

.auth {
    background-color: $base;
}

@include respond-to(t) {
    .wrapper {
        flex-direction: row;
    }

    .preview,
    .auth {
        flex: 1;
    }

    .auth {
        display: flex;
        align-items: center;
    }
}
</style>
