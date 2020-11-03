import {GetterTree} from 'vuex';
import {IIconDate, IPageDate, IStoreState} from '@/types';
import {useRouter} from 'vue-router';
import {PAGE_404_NAME} from '@/shared/const/urlConst';

export const getters: GetterTree<IStoreState, IStoreState> = {
  getCurrentPageDate(state: IStoreState): IPageDate {
    const currentRouteName = useRouter().currentRoute.value.name;
    const pageName = currentRouteName ? String(currentRouteName) : PAGE_404_NAME;
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
};
