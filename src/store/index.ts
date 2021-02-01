import {IStoreState} from '@/types';
import {actions} from '@/store/actions';
import {mutations} from '@/store/mutations';
import {getters} from '@/store/getters';
import {PAGE_404_NAME} from '@/shared/const/urlConst';
import {initDate} from '@/shared/const/initDate';

const state: IStoreState = {
  pageState: [
    {
      name: PAGE_404_NAME,
      path: '/!*',
      content: initDate
    }
  ],
  navState: [],
  isLoading: false
};

export const store = {
  state,
  mutations,
  getters,
  actions
};