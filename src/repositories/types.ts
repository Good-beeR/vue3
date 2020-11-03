import {IIconDate, IPageContentDate, IPageDate} from '@/types';

export interface IVuexRepository {
  setNavList(payload: IIconDate[]): void;
  getNavList(): IIconDate[];
  getPageContent(payload: string): Promise<IPageDate>;
  changeLoadingState(payload: boolean): void;
  getCurrentPageContent(): IPageContentDate;
  getLoadingState(): boolean;
  isPageExist(name: string): boolean;
}