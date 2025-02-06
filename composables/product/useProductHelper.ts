import type { Product } from '~/@types/product';

export const useProductHelper = (product: Product) => {
    const isShowOldPrice = computed(() => product.price < product.old_price);

    const isDiscountActive = computed(() => {
        if (!product.discount) {
            return false;
        }

        if (!product.discount.value) {
            return false;
        }

        const nowDate = new Date().getTime();
        const expiresDate = new Date(product.discount.expires).getTime();

        return expiresDate > nowDate;
    });

    return {
        isShowOldPrice,
        isDiscountActive,
    }
}
