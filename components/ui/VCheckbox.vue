<script setup lang="ts">
defineProps<{
    preContent?: string;
    postContent?: string;
    errorMsg?: string;
}>();


const modelValue = defineModel<boolean>({ required: true })
</script>

<template>
    <label :class="[$style.VCheckbox, { [$style._active]: modelValue }]">
        <slot v-if="$slots.pre" name="pre"/>
        <span v-else-if="preContent">{{ preContent }}</span>

        <input
            v-model="modelValue"
            type="checkbox"
            value="qeqwe"
            :class="$style.originalInput"
        >
        <span :class="$style.checkmarkBlock">
            <svg :class="$style.checkmarkIcon">
                <use :href="`/svg-sprite/sprite.svg#checkmark`"/>
            </svg>
        </span>

        <slot v-if="$slots.post" name="post"/>
        <span v-else-if="postContent">{{ postContent }}</span>
    </label>
    <Transition name="opacity">
        <div v-show="errorMsg" :class="$style.errorMsg">{{ errorMsg }}</div>
    </Transition>
</template>

<style module lang="scss">
.VCheckbox {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    &._active {
        .checkmarkBlock {
            background: $neutral-07;
        }

        .checkmarkIcon {
            transform: scale(1);
        }
    }
}

.originalInput {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    width: 0;
    height: 0;
}

.checkmarkBlock {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: $base;
    border: 1px solid $neutral-04;
    border-radius: 4px;
    transition: background $transition-duration;
}

.checkmarkIcon {
    width: 100%;
    height: 100%;
    transform: scale(0);
    transition: transform $transition-duration;
}

.errorMsg {
    @include text(caption-1);

    margin-top: 4px;
    color: $red;
}
</style>
