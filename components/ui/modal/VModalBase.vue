<script
    setup
    lang="ts"
>
</script>

<template>
    <div :class="$style.VModalBase">
        <slot/>
    </div>
</template>

<style
    module
    lang="scss"
>
.VModalBase {
    overflow: auto;
    position: absolute;
    inset: auto 0 0;
    padding: 24px;
    background: $base;

    @include respond-to(d) {
        inset: 0 0 0 auto;
        padding: 40px 24px;
    }
}
</style>
