import * as types from '@/shared/const/store.types';
import {ActionContext, CommitOptions, DispatchOptions, Store as VuexStore} from 'vuex';
import {IIconDate, IPageDate, IStoreState} from '@/types';

export type TGettersPageContent = {
  (name: string): boolean;
}

export type TGettersPageDate = {
  (name: string): IPageDate;
}

export type TGetters = {
  getPageDate(state: IStoreState): TGettersPageDate
  pageContentIsFound(state: IStoreState): TGettersPageContent
  getNavState(state: IStoreState): IIconDate[]
  getStoreLoadingState(state: IStoreState): boolean
}

export type TMutations<S = IStoreState> = {
  [types.SET_CONTENT](state: S, payload: IPageDate): void
  [types.SET_NAV_CONTENT](state: S, payload: IIconDate[]): void
  [types.SET_LOADING_STATE](state: S, payload: boolean): void
}

type TActionContext = {
  commit<K extends keyof TMutations>(
    key: K,
    payload: Parameters<TMutations[K]>[1]
  ): ReturnType<TMutations[K]>
} & Omit<ActionContext<IStoreState, IStoreState>, 'commit'>

export interface IActionsList {
  [types.GET_PAGE_REQUEST]({commit}: TActionContext, payload: string): Promise<IPageDate>

  [types.GET_NAV_DATE]({commit}: TActionContext, payload: IIconDate[]): void

  [types.CHANGE_LOADING_STATE]({commit}: TActionContext, payload: boolean): void
}

export type Store = Omit<VuexStore<IStoreState>,
  'getters' | 'commit' | 'dispatch'> & {
  commit<K extends keyof TMutations, P extends Parameters<TMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<TMutations[K]>
} & {
  dispatch<K extends keyof IActionsList>(
    key: K,
    payload: Parameters<IActionsList[K]>[1],
    options?: DispatchOptions
  ): ReturnType<IActionsList[K]>
} & {
  getters: {
    [K in keyof TGetters]: ReturnType<TGetters[K]>
  }
}