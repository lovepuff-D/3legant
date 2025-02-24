<script setup lang="ts">
import VButton from '~/components/ui/VButton.vue';
import VInput from '~/components/ui/VInput.vue';
import VCheckbox from '~/components/ui/VCheckbox.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import AuthRedirected from '~/components/pages/auth/AuthRedirected.vue';

definePageMeta({
    layout: 'auth',
})

const isActionSucceed = ref(false);

const isLoading = ref(false);

const defineFiledConfig = {
    validateOnModelUpdate: false,
    validateOnBlur: false,
    validateOnChange: false,
}
const { values: formValues, defineField, errors, setFieldError, handleSubmit } = useForm({
    validationSchema: toTypedSchema(yup.object({
        name: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required().min(4),
        policy: yup.boolean().oneOf([true], 'Agree to Terms and Policy').required('Agree to Terms and Policy'),
    }))
})
const [nameValue] = defineField('name', defineFiledConfig);
const [emailValue] = defineField('email', defineFiledConfig);
const [passwordValue] = defineField('password', defineFiledConfig);
const [policyValue] = defineField('policy', defineFiledConfig, );

const isShowPassword = ref(false);
const passwordInputType = computed(() => isShowPassword.value ? 'type' : 'password');
const onClickShowPassword = () => {
    isShowPassword.value = !isShowPassword.value;
};

const onSubmit = handleSubmit(async () => {
    isLoading.value = true;

    try {
        const a: { result: boolean, errorType: string, errorMessage: string } = await $fetch(`/api/auth/create`, {
            method: 'POST',
            body: {
                name: formValues.name,
                email: formValues.email,
                password: formValues.password,
                policy: formValues.policy,
            }
        });

        if (a.result) {
            sessionStorage.setItem('isAuth', 'true')
            isActionSucceed.value = true;
            setTimeout(() => {
                navigateTo('/', { replace: true })
            }, 1500);
        } else {
            if (a.errorType === 'email') {
                setFieldError('email', a.errorMessage)
            } else if (a.errorType === 'password') {
                setFieldError('password', a.errorMessage)
            }
            throw new Error();
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
                <VInput
                    v-model="passwordValue"
                    :type="passwordInputType"
                    placeholder="Password"
                    icon-name-after-content="heart-icon"
                    :error-msg="errors.password"
                    @icon-after-content-click="onClickShowPassword"
                />
            </form>
            <div :class="[$style.option, $style._spaceBetween]">
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
