import { injectListItem } from './injectListItem.js';

const list = [
  'SALE',
  'MUST HAVE',
  'ÁO',
  'ÁO VEST & ÁO KHOÁC',
  'ÁO KHOÁC DÀI',
  'VÁY',
  'QUẦN',
  'QUẦN SHORT',
  'CHÂN VÁY',
  'PHỤ KIỆN',
];

const mainSidebarLeft = document.getElementById('main-nav-sidebar-left');

injectListItem(list, mainSidebarLeft);
