import {createStore, GetterTree} from 'vuex';
import {IStoreState} from '@/types';
import {actions} from '@/store/actions';
import {mutations} from '@/store/mutations';
import {Store} from '@/store/types';
import {getters} from '@/store/getters';

const state: IStoreState = {
  pageState: [],
  navState: [],
  isLoading: false
}

const store = createStore({state, getters, actions, mutations});

export function useStore() {
  return store as Store
}