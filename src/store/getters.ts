import {GetterTree} from 'vuex';
import {IIconDate, IPageDate, IStoreState} from '@/types';
import {useRouter} from 'vue-router';

export const getters: GetterTree<IStoreState, IStoreState> = {
  currentPageDate(state: IStoreState): IPageDate {
    const currentRouteName = useRouter().currentRoute.value.name;
    const pageName = currentRouteName ? String(currentRouteName) : 'NotFound';
    return state.pageState.filter(item => item.name == pageName)[0];
  },
  pageContentIsFound: (state: IStoreState) => (name: string): boolean => {
    return state.pageState.filter(item => item.name == name).length > 0;
  },
  getStateNavState(state: IStoreState): IIconDate[] {
    return state.navState;
  },
  getStateLoadingState(state: IStoreState): boolean {
    return state.isLoading;
  }
}
