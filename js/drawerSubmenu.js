import { collectionList } from './collectionList';
const eShopList = ['Áo', 'Quần', 'Xi líp', 'Áo dzú'];

const drawerSubmenuColletion = document.getElementById('drawer-sub-menu-collection');
const allCollections = document.getElementById('all-collections');
const eShopElement = document.getElementById('eshop-element');
const drawerSubmenuEshop = document.getElementById('drawer-sub-menu-eshop');

let subMenuCollectionVisible = false;
let subMenuEshopVisible = false;

function mapAnchor(element, list) {
  list.forEach((item) => {
    const anchor = document.createElement('a');
    const br = document.createElement('br');
    anchor.innerHTML = item;
    element.appendChild(anchor);
    element.appendChild(br);
  });

  return element;
}

const onClickHandler = (button, element, visible) => {
  button.onclick = () => {
    if (!visible) {
      visible = true;
      element.classList.add('sub-menu-expands');
    } else {
      visible = false;
      element.classList.remove('sub-menu-expands');
    }
  };
};

onClickHandler(
  allCollections,
  mapAnchor(drawerSubmenuColletion, collectionList),
  subMenuCollectionVisible,
);

onClickHandler(eShopElement, mapAnchor(drawerSubmenuEshop, eShopList), subMenuEshopVisible);
