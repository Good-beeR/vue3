import {createStore, StoreOptions} from 'vuex';
import {IIconDate, IPageContentDate, IPageDate, IStoreState} from '@/types';
import {store} from '@/store';
import {CHANGE_LOADING_STATE, GET_NAV_DATE, GET_PAGE_REQUEST} from '@/shared/const/store.types';
import {IVuexRepository} from '@/repositories/types';
import {Store} from '@/store/types';

class VuexRepository implements IVuexRepository {
  public store: Store;
  constructor(client: StoreOptions<IStoreState>) {
    this.store = createStore(client);
  }
  // Actions
  setNavList(payload: IIconDate[]) {
    this.store.dispatch(GET_NAV_DATE, payload);
  }
  changeLoadingState(payload: boolean) {
    this.store.dispatch(CHANGE_LOADING_STATE, payload);
  }
  getPageContent(payload: string): Promise<IPageDate> {
    return this.store.dispatch(GET_PAGE_REQUEST, payload);
  }
  // Getters
  getCurrentPageContent(): IPageContentDate {
    return this.store.getters.getCurrentPageDate.content;
  }
  getNavList(): IIconDate[] {
    return this.store.getters.getStateNavState;
  }
  getLoadingState(): boolean {
    return this.store.getters.getStateLoadingState;
  }
  isPageExist(name: string): boolean {
    return this.store.getters.pageContentIsFound(name);
  }
}

export const vuexStore = new VuexRepository(store);