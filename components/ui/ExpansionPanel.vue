<script setup lang="ts">
const isOpen = ref(false);

const handleOpening = () => {
    isOpen.value = !isOpen.value;
};

const style = useCssModule();
const classList = computed(() => ({
    [style._expanded]: isOpen.value,
}));
</script>

<template>
    <div
        :class="[$style.ExpansionPanel, classList]"
    >
        <div
            :class="$style.title"
            @click="handleOpening"
        >
            <slot name="title"/>
            <div :class="$style.icon">
                <svg>
                    <use href="/svg-sprite/sprite.svg#chevron-bottom"/>
                </svg>
            </div>
        </div>
        <div :class="$style.body">
            <slot name="body"/>
        </div>
    </div>
</template>

<style module lang="scss">
.ExpansionPanel {
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr 0;
    transition: grid-template-rows $transition-duration;

    &._expanded {
        grid-template-rows: auto auto;

        .icon {
            transform: rotate(180deg);
        }
    }
}

.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0 8px;
    border-bottom: 1px solid $neutral-07;
    cursor: pointer;
    transition: color $transition-duration;

    @include text(button-m, 500);

    &:hover {
        color: $neutral-04;
    }
}

.icon {
    width: 24px;
    height: 24px;
    transition: transform $transition-duration;

    svg {
        width: 100%;
        height: 100%;
    }
}

.body {
    display: grid;
    grid-template-rows: 1fr;
    padding: 8px 0;
}
</style>
