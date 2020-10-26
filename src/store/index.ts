import axios from 'axios'
import * as types from '@/shared/const/store.types'
import {createStore, ActionTree, MutationTree, GetterTree } from 'vuex';
import {useRouter} from 'vue-router';
import {reactive} from 'vue';
import {IIconDate, IPageDate, IStoreState} from '@/types';

const state: IStoreState = {
  pageState: [],
  navState: [],
  isLoading: false
}

const getters: GetterTree<IStoreState, IStoreState> = {
  currentPageContent(state: IStoreState) {
    //TODO: possibly there is a smarter way than using useRouter()
    const pageName = useRouter().currentRoute.value.name;
    return state.pageState.find(item => item.name == pageName);
  },
  pageContentIsFound: (state: IStoreState) => (name: string) => {
    return !!state.pageState.find(item => item.name == name);
  }
}

const mutations: MutationTree<IStoreState> = {
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

const actions: ActionTree<IStoreState, IStoreState> = {
  [types.GET_PAGE_REQUEST]({commit}, name: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://5f8fed5ee0559c0016ad5be0.mockapi.io/api/v1/page/${name}`)
        .then(response => {
          const pageDate = response.data;
          commit(types.SET_CONTENT, pageDate);
          resolve(response);
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

export const store = createStore({state, getters, actions, mutations});