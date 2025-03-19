// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        'no-duplicate-imports': 'error',
        'no-empty-function': 'error',
        'vue/multi-word-component-names': 'off'
    },
});
