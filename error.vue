<script setup lang="ts">
import type { NuxtError } from '#app';
import VButton from '~/components/ui/VButton.vue';
import { NuxtLink } from '#components';

const props = defineProps<{
    error: NuxtError
}>();

const statusMessage = computed(() => {
    switch (props.error.statusCode) {
        case (404): {
            return 'Page not found';
        }

        default: {
            return null;
        }
    }
});
</script>

<template>
    <NuxtLayout>
        <div :class="[$style.wrapper, 'container']">
            <div :class="$style.heading">
                Ops...
            </div>
            <div :class="$style.description">
                <div>{{ error.statusCode }}</div>
                <div>{{ statusMessage || error.statusMessage }}</div>
            </div>
            <VButton
                :tag="NuxtLink"
                to="/"
                :class="$style.btn"
            >
                Go home
            </VButton>
        </div>
    </NuxtLayout>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 32px;
    max-width: 350px;
    height: 100%;
}

.heading {
    @include text(heading-3);
}

.description {
    color: $neutral-04;
}

.btn {
    min-width: 200px;
}
</style>
