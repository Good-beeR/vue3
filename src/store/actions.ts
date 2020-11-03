import {ActionTree} from 'vuex';
import {IIconDate, IPageDate, IStoreState} from '@/types';
import * as types from '@/shared/const/store.types';
import {AxiosResponse} from 'axios';
import api from '@/shared/api/api';
import {pageURL} from '@/shared/const/urlConst';

export const actions: ActionTree<IStoreState, IStoreState> = {
  [types.GET_PAGE_REQUEST]({commit}, name: string) {
    return new Promise((resolve, reject) => {
      api.get(`${pageURL}/${name}`).then((response: AxiosResponse<IPageDate>) => {
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
};