import {MutationTree} from 'vuex';
import {IIconDate, IPageDate, IStoreState} from '@/types';
import {TMutations} from '@/store/types';
import * as types from '@/shared/const/store.types';
import {reactive} from 'vue';

export const mutations: MutationTree<IStoreState> & TMutations = {
  [types.SET_CONTENT](state: IStoreState, pageDate: IPageDate) {
    state.pageState.push(pageDate);
  },
  [types.SET_NAV_CONTENT](state: IStoreState, date: IIconDate[]) {
    state.navState = reactive(date);
  },
  [types.SET_LOADING_STATE](state: IStoreState, value: boolean) {
    state.isLoading = value
  }
}