<script setup lang="ts">
definePageMeta({
    layout: false,
});
</script>

<template>
    <div :class="$style.wrapper">
        <div :class="$style.preview">
            <div :class="$style.companyLogo">
                <svg>
                    <use href="/svg-sprite/sprite.svg#company-logo"/>
                </svg>
            </div>
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

<style module lang="scss">
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
    display: flex;
    justify-content: center;
    margin-top: 32px;

    svg {
        width: 105px;
        height: 24px;
        margin: 0 auto;
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
