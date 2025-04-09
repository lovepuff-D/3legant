import auth from '~/config/api/auth';
import products from '~/config/api/products';
import advantages from '~/config/api/advantages';

export interface IFetchDataInstance {
    get: <T>(url: string) => Promise<T>;
    post: <T>(url: string, data?: any, fetchOption?: any) => Promise<T>;
}

// TODO Реализовать CSRF токен для post запросов

const instance: IFetchDataInstance = {
    get: (url) => {
        return $fetch(url);
    },
    post: (url, data, fetchOption) => {
        return $fetch(url, {
            method: 'POST',
            body: data,
            ...fetchOption,
        });
    },
};

export default defineNuxtPlugin(nuxtApp => {
    const api = {
        auth: auth(instance),
        product: products(instance),
        advantages: advantages(instance),
    };

    return {
        provide: {
            fetchData: api,
        },
    };
});
