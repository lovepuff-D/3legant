<script setup lang="ts">
import Breadcrumbs from '~/components/shared/Breadcrumbs.vue';

const appConfig = useAppConfig()


onMounted(() => {
    console.log(appConfig)
})

const route = useRoute();
const router = useRouter();

const product = {
    title: 'Love sofa'
}

router.replace({
    query: {
        ...route.query,
        breadcrumbName: product.title,
    }
})

const routes = [
    {
        path: '/',
        meta: { breadcrumbName: 'Home' },
    },
    {
        path: '/shop',
        children: [
            {
                path: '/product',
                meta: { breadcrumbName: 'Product' },
            },
            {
                path: '/product/:id',
                meta: { breadcrumbName: '' },
            }
        ],
        meta: { breadcrumbName: 'Shop' },
    },
]

const path = computed(() => [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Shop',
        link: '/shop',
    },
    {
        title: 'Living Room',
        link: 'test',
    },
    {
        title: 'Loveseat Sofa',
        link: 'test'
    }
])
const path2 = computed(() => [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Shop',
        link: '/shop',
    },
    {
        title: 'Living Room',
        link: 'test',
    },
])
</script>

<template>
    <div>
        <Breadcrumbs
            :path="path"
        />
        <Breadcrumbs
            :path="path2"
        />
    </div>
</template>

<style module lang="scss">

</style>
