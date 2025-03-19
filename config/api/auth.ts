import type { IAuthCreateFetchBody, IAuthLoginFetchBody, IAuthLoginResult, IAuthCreateResult } from '~/@types/auth';
import type { IFetchDataInstance } from '~/plugins/02.fetchData';

export default (instance: IFetchDataInstance) => {
    return {
        create(data: IAuthCreateFetchBody) {
            return instance.post<IAuthCreateResult>('/api/auth/create', data)
        },
        login(data: IAuthLoginFetchBody) {
            return instance.post<IAuthLoginResult>('/api/auth/login', data)
        }
    }
}
