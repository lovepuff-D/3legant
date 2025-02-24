import { products } from '~/server/constant/products';

export default defineEventHandler((event) => {
    const routeParam = getRouterParam(event, 'id');

    const product = products.find(el => el.id === Number(routeParam));

    if (!product) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Can\'t find product with that ID'
        });
    }

    return product;
});
