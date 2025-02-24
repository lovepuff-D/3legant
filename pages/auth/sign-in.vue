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

const { $fetchData } = useNuxtApp();

const isActionSucceed = ref(false);

const isLoading = ref(false);

const defineFiledConfig = {
    validateOnModelUpdate: false,
    validateOnBlur: false,
    validateOnChange: false,
}
const { values: formValues, defineField, errors, setFieldError, handleSubmit } = useForm({
    validationSchema: toTypedSchema(yup.object({
        email: yup.string().required().email(),
        password: yup.string().required(),
    }))
})
enum EFieldTypes {
    email = 'email',
    password = 'password',
}
const [emailValue] = defineField(EFieldTypes.email, defineFiledConfig);
const [passwordValue] = defineField(EFieldTypes.password, defineFiledConfig);

const rememberMeCheckbox = ref(false);

const isShowPassword = ref(false);
const passwordInputType = computed(() => isShowPassword.value ? 'type' : 'password');
const onClickShowPassword = () => {
    isShowPassword.value = !isShowPassword.value;
};

const onSubmit = handleSubmit(async () => {
    isLoading.value = true;

    try {
        const response = await $fetchData.auth.login({
            email: formValues.email as string,
            password: formValues.password as string,
        });

        if (response.result) {
            sessionStorage.setItem('isAuth', 'true')
            isActionSucceed.value = true;
            setTimeout(() => {
                navigateTo('/', { replace: true })
            }, 1500);
        } else {
            let fieldType = Object.values(EFieldTypes)
                .includes(response.errorType as EFieldTypes)
                ? response.errorType as EFieldTypes : null;

            fieldType && setFieldError(fieldType, response.errorMessage as string)
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
