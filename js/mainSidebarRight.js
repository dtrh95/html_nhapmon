import { collectionList } from './collectionList.js';
import { injectListItem } from './injectListItem.js';

const mainSidebarRight = document.getElementById('main-nav-sidebar-right');
console.log(mainSidebarRight);

injectListItem(collectionList, mainSidebarRight);
