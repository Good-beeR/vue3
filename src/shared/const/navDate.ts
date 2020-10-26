import {IIconDate} from "@/types/types";

export const navDate = ([
  {
    name: 'Video',
    path: '/',
    icon: require('@/assets/icon/video.svg'),
    iconActive: require('@/assets/icon/video-w.svg')
  },
  {
    name: 'Girls',
    path: '/girls',
    icon: require('@/assets/icon/girls.png'),
    iconActive: require('@/assets/icon/girls-w.png')
  },
  {
    name: 'Privacy',
    path: '/privacy',
    icon: require('@/assets/icon/guard.svg'),
    iconActive: require('@/assets/icon/guard-w.svg')
  },
  {
    name: 'Rules',
    path: '/rules',
    icon: require('@/assets/icon/attention.svg'),
    iconActive: require('@/assets/icon/attention-w.svg')
  },
]) as IIconDate[];