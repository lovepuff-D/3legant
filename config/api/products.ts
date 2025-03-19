import type { IFetchDataInstance } from '~/plugins/02.fetchData';
import type { Product } from '~/@types/product';

export default (instance: IFetchDataInstance) => {
    return {
        getProducts() {
            return instance.get<Product[]>('/api/products')
        },
        getProduct(id: Product['id']) {
            return instance.get<Product>(`/api/product/${id}`)
        }
    }
}
