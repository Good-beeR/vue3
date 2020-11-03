import {ActionTree} from 'vuex';
import {IIconDate, IPageDate, IStoreState} from '@/types';
import * as types from '@/shared/const/store.types';
import axios, {AxiosResponse} from 'axios';

export const actions: ActionTree<IStoreState, IStoreState> = {
  [types.GET_PAGE_REQUEST]({commit}, name: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://5f8fed5ee0559c0016ad5be0.mockapi.io/api/v1/page/${name}`)
        .then((response: AxiosResponse<IPageDate>) => {
          const pageDate = response.data;
          commit(types.SET_CONTENT, pageDate);
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    })
  },
  [types.GET_NAV_DATE]({commit}, date: IIconDate[]) {
    commit(types.SET_NAV_CONTENT, date);
  },
  [types.CHANGE_LOADING_STATE]({commit}, value: boolean) {
    commit(types.SET_LOADING_STATE, value);
  }
}