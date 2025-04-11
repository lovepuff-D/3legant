<script setup lang="ts">
import VButton from '~/components/ui/VButton.vue';
import VInput from '~/components/ui/VInput.vue';
import VCheckbox from '~/components/ui/VCheckbox.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import AuthRedirected from '~/components/pages/auth/AuthRedirected.vue';
import VInputPassword from '~/components/ui/VInputPassword.vue';
import { useAuth } from '~/components/pages/auth/composables/useAuth';
import successfulAuth from '~/pages/auth/helpers/successfulAuth';

definePageMeta({
    layout: 'auth',
})

const { $fetchData } = useNuxtApp();

const { defineFiledConfig, isActionSucceed, isLoading } = useAuth();

enum EFieldTypes {
    email = 'email',
    password = 'password',
}

const { values: formValues, defineField, errors, setFieldError, handleSubmit } = useForm({
    validationSchema: toTypedSchema(yup.object({
        email: yup.string().required().email(),
        password: yup.string().required(),
    })),
    initialValues: {
        email: 'test@gmail.com',
        password: 'test',
    }
})

const [emailValue] = defineField(EFieldTypes.email, defineFiledConfig);
const [passwordValue] = defineField(EFieldTypes.password, defineFiledConfig);
const rememberMeCheckbox = ref(false);

const onSubmit = handleSubmit(async () => {
    isLoading.value = true;

    try {
        const response = await $fetchData.auth.login({
            email: formValues.email as string,
            password: formValues.password as string,
        });

        if (response.result) {
            isActionSucceed.value = true;
            successfulAuth();
        } else {
            const fieldType = (Object.values(EFieldTypes) as string[])
                .includes(response.errorType as string)
                ? response.errorType as EFieldTypes : null;

            if (fieldType) {
                setFieldError(fieldType, response.errorMessage as string)
            }
        }
    } finally {
        isLoading.value = false;
    }
});
</script>

<template>
    <div :class="$style.wrapper">
        <template v-if="!isActionSucceed">
            <div :class="$style.header">
                <div :class="$style.title">Sign In</div>
                <div :class="$style.subTitle">Don’t have an accout yet?
                    <NuxtLink to="/auth/sign-up">Sign Up</NuxtLink>
                </div>
            </div>
            <form :class="$style.form">
                <VInput
                    v-model="emailValue"
                    placeholder="Your email address"
                    :error-msg="errors.email"
                />
                <VInputPassword
                    v-model="passwordValue"
                    :error-msg="errors.password"
                />
            </form>
            <div :class="[$style.option, $style._spaceBetween]">
                <label>
                    <VCheckbox
                        v-model="rememberMeCheckbox"
                        post-content="Remember me"
                    />
                </label>
                <button disabled>Forgot password?</button>
            </div>
            <VButton
                full-width
                :loading="isLoading"
                @click="onSubmit"
            >
                Sign Up
            </VButton>
        </template>
        <template v-else>
            <AuthRedirected/>
        </template>
    </div>
</template>

<style module lang="scss">
@import '@/components/pages/auth/style';
</style>
