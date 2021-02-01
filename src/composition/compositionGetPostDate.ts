import {vuexStore} from '@/repositories';
import {useRouter} from 'vue-router';
import {PAGE_404_NAME} from '@/shared/const/urlConst';
import {IPageContentDate, IPageDate} from '@/types';

async function getPostData(): Promise<IPageContentDate> {
  return new Promise((resolve) => {
    vuexStore.changeLoadingState(true);
    const currentRouteName = useRouter().currentRoute.value.name;
    const pageName = currentRouteName ? String(currentRouteName) : PAGE_404_NAME;
    const isPageDateExist = vuexStore.isPageExist(pageName);

    if (!isPageDateExist) {
      vuexStore.loadPage(pageName).then((pageContent: IPageDate) => {
          resolve(pageContent.content);
          vuexStore.changeLoadingState(false);
        }
      ).catch((pageContent: IPageDate) => {
        resolve(pageContent.content);
        vuexStore.changeLoadingState(false);
      });
    } else {
      resolve(vuexStore.getPage(pageName));
      vuexStore.changeLoadingState(false);
    }
  });
}

export default getPostData;