const defineFiledConfig = {
    validateOnModelUpdate: false,
    validateOnBlur: false,
    validateOnChange: false,
}

export const useAuth = () => {
    const isLoading = ref(false);
    const isActionSucceed = ref(false);

    return {
        defineFiledConfig,
        isLoading,
        isActionSucceed,
    }
}
