import type { IFetchDataInstance } from '~/plugins/02.fetchData';
import type { IAdvantage } from '~/@types/advantages';

export default (instance: IFetchDataInstance) => {
    return {
        getAdvantages() {
            return instance.get<IAdvantage[]>('/api/advantages');
        },
    };
}
