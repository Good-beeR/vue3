import {IStoreState} from '@/types';
import {actions} from '@/store/actions';
import {mutations} from '@/store/mutations';
import {getters} from '@/store/getters';

const state: IStoreState = {
  pageState: [
    {
      name: 'NotFound',
      path: '/!*',
      content: {
        title: '404, sorry Page not found',
        pageContent: ''
      }
    }
  ],
  navState: [],
  isLoading: false
}

export const store = {
  state,
  mutations,
  getters,
  actions
}