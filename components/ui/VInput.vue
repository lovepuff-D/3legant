<script setup lang="ts">
import type { InputHTMLAttributes, InputTypeHTMLAttribute } from '@vue/runtime-dom';

withDefaults(defineProps<{
    placeholder?: HTMLInputElement['placeholder'],
    type?: InputTypeHTMLAttribute,
    iconNameAfterContent?: string,
    inputAttr?: InputHTMLAttributes,
    errorMsg?: string,
}>(), {
    type: 'text',
    errorMsg: '',
})

const emit = defineEmits<{
    'icon-after-content-click': [void],
}>();

const modelValue = defineModel<string>({ required: true })
</script>

<template>
    <div :class="$style.wrapper">
        <label :class="$style.label">
            <input
                v-model="modelValue"
                v-bind="inputAttr"
                :type="type"
                :placeholder="placeholder"
                :class="$style.input"
            >
            <span :class="$style.placeholder">{{ placeholder }}</span>
            <span
                v-if="iconNameAfterContent"
                :class="$style.icon"
                @click="emit('icon-after-content-click')"
            >
                <svg>
                    <use :href="`/svg-sprite/sprite.svg#${iconNameAfterContent}`"/>
                </svg>
            </span>
        </label>
        <Transition name="opacity">
            <div v-show="errorMsg" :class="$style.errorMsg">{{ errorMsg }}</div>
        </Transition>
    </div>
</template>

<style module lang="scss">
.wrapper {
    position: relative;
    color: $neutral-04;

    @include text(body-2);
}

.label {
    display: flex;
    padding-bottom: 14px;
    border-bottom: 1px solid $neutral-02;
}

.input {
    width: 100%;
    font-size: inherit;
    font-weight: inherit;

    &::placeholder {
        transform: translateY(100px);
    }
}

.placeholder {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    transition-property: transform, font-size;
    transition-duration: $transition-duration;
    pointer-events: none;
    text-wrap: nowrap;
    text-overflow: ellipsis;
}

.input:focus + .placeholder,
.input:not(:placeholder-shown) + .placeholder {
    transform: translateY(-25px);

    @include text(caption-1);
}

.icon {
    display: flex;

    svg {
        width: 24px;
        height: 24px;
    }
}

.errorMsg {
    @include text(caption-1);

    margin-top: 4px;
    color: $red;
}
</style>
