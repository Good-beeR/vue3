import {GetterTree} from 'vuex';
import {IIconDate, IPageDate, IStoreState} from '@/types';

export const getters: GetterTree<IStoreState, IStoreState> = {
  getPageDate: (state: IStoreState) => (name: string): IPageDate => {
    return state.pageState.filter(item => item.name == name)[0];
  },
  pageContentIsFound: (state: IStoreState) => (name: string): boolean => {
    return state.pageState.filter(item => item.name == name).length > 0;
  },
  getNavState(state: IStoreState): IIconDate[] {
    return state.navState;
  },
  getStoreLoadingState(state: IStoreState): boolean {
    return state.isLoading;
  }
};
