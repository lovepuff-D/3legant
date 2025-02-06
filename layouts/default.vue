<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>

<template>
    <Header/>
    <div :class="$style.main">
        <slot/>
    </div>
    <Footer/>
</template>

<style module lang="scss">
.main {
    flex: 1 0 auto;
}
</style>
