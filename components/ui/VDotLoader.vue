<script setup lang="ts">
</script>

<template>
    <div :class="$style.loader">
        <div/>
    </div>
</template>

<style module lang="scss">
.loader {
    position: relative;

    div,
    &:before,
    &:after {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: block;
        background: #FFF;
        animation: shadowPulse 1.2s linear infinite;
    }

    div {
        animation-delay: .2s;
    }

    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 0;
    }

    &:before {
        content: "";
        position: absolute;
        left: -20px;
    }

    &:after {
        right: -20px;
        animation-delay: .4s;
    }
}

@keyframes shadowPulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
</style>
