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

enum EFieldTypes {
    name = 'name',
    email = 'email',
    password = 'password',
    policy = 'policy',
}

const { values: formValues, defineField, errors, setFieldError, handleSubmit } = useForm({
    validationSchema: toTypedSchema(yup.object({
        name: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required().min(4),
        policy: yup.boolean().oneOf([true], 'Agree to Terms and Policy').required('Agree to Terms and Policy'),
    }))
})

const { defineFiledConfig, isActionSucceed, isLoading } = useAuth();

const [nameValue] = defineField(EFieldTypes.name, defineFiledConfig);
const [emailValue] = defineField(EFieldTypes.email, defineFiledConfig);
const [passwordValue] = defineField(EFieldTypes.password, defineFiledConfig);
const [policyValue] = defineField(EFieldTypes.policy, defineFiledConfig);

const onSubmit = handleSubmit(async () => {
    isLoading.value = true;

    try {
        const response = await $fetchData.auth.create({
            name: formValues.name as string,
            email: formValues.email as string,
            password: formValues.password as string,
            policy: formValues.policy as boolean,
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
                <div :class="$style.title">Sign Up</div>
                <div :class="$style.subTitle">Already have an account? <NuxtLink to="/auth/sign-in">Sign in</NuxtLink></div>
            </div>
            <form :class="$style.form">
                <VInput
                    v-model="nameValue"
                    placeholder="Your name"
                    :error-msg="errors.name"
                />
                <VInput
                    v-model="emailValue"
                    placeholder="Email address"
                    :error-msg="errors.email"
                />
                <VInputPassword
                    v-model="passwordValue"
                    :error-msg="errors.password"
                />
            </form>
            <div :class="$style.option">
                <label>
                    <VCheckbox
                        v-model="policyValue"
                        :error-msg="errors.policy"
                    >
                        <template #post>
                            <span :class="$style.policy">I agree with <NuxtLink to="/privacy-policy" target="_blank">Privacy Policy</NuxtLink> and <NuxtLink to="/terms-of-use" target="_blank">Terms of Use</NuxtLink></span>
                        </template>
                    </VCheckbox>
                </label>
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

.policy {
    @include text(caption-2);

    color: $neutral-04;

    a {
        @include text(caption-2, semi);

        color: $neutral-07;
    }

    @include respond-to(t) {
        @include text(caption-1);

        a {
            @include text(caption-1, semi);
        }
    }
}
</style>
