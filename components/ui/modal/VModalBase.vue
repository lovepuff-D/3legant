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
    inset: 0 0 0 auto;
    padding: 24px;
    background: $base;

    @include respond-to(d) {
        padding: 40px 24px;
    }
}
</style>
