export interface IIconDate {
  name: string
  path: string
  icon: string
  iconActive: string
}

export interface IPageContentDate {
  title: string
  pageContent: string
}

export interface IPageDate {
  name: string
  path: string
  content: IPageContentDate
}

export interface IStoreState {
  pageState: IPageDate[]
  navState: IIconDate[]
  isLoading: boolean
}