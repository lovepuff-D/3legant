import { faviconsTags } from './config/favicons';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    app: {
        head: {
            title: '3legant',
            link: [
                {
                    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
                    rel: 'stylesheet'
                },
                {
                    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
                    rel: 'stylesheet'
                },
                ...faviconsTags,
            ],
        }
    },

    imports: {
        scan: false,
    },

    components: {
        dirs: []
    },

    css: [
        '~/assets/scss/main.scss'
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/_variables.scss" as *;'
                }
            }
        },
    },

    modules: [
        '@nuxt/eslint',
        '@nuxtjs/device'
    ],

    device: {
        refreshOnResize: true
    }
});
