import {GetterTree} from 'vuex';
import {IStoreState} from '@/types';
import {TGetters} from '@/store/types';
import {useRouter} from 'vue-router';

export const getters: GetterTree<IStoreState, IStoreState> & TGetters = {
  currentPageDate(state: IStoreState) {
    const currentRouteName = useRouter().currentRoute.value.name;
    const pageName = currentRouteName ? String(currentRouteName) : 'NotFound';
    //state.pageState.find(item => item.name == pageName)
    return state.pageState.filter(item => item.name == pageName)[0];
  },
  pageContentIsFound: (state: IStoreState) => (name: string) => {
    return state.pageState.filter(item => item.name == name).length > 0;
  }
}
