import {IIconDate, IPageContentDate, IPageDate} from '@/types';

export interface IVuexRepository {
  setNavList(payload: IIconDate[]): void;
  getNavList(): IIconDate[];
  loadPage(payload: string): Promise<IPageDate>;
  changeLoadingState(payload: boolean): void;
  getPage(name: string): IPageContentDate;
  getLoadingState(): boolean;
  isPageExist(name: string): boolean;
}