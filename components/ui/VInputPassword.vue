<script setup lang="ts">
import VInput from '~/components/ui/VInput.vue';

const modelValue = defineModel({ required: true })

const isShowPassword = ref(false);
const passwordInputType = computed(() => isShowPassword.value ? 'text' : 'password');
const onClickShowPassword = () => {
    isShowPassword.value = !isShowPassword.value;
};
</script>

<template>
    <VInput
        v-model="modelValue"
        :type="passwordInputType"
        placeholder="Password"
        icon-name-after-content="heart-icon"
        @icon-after-content-click="onClickShowPassword"
    />
</template>

<style module lang="scss">

</style>
