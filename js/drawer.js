const sideBarDrawer = document.getElementById('sidebar-drawer');
let sideBarVisible = false;
const menuIcon = document.getElementById('menu-icon');

const wrapper = document.getElementById('wrapper');

const menuRight = document.getElementById('menu-right');

menuIcon.onclick = () => {
  if (sideBarVisible === false) {
    sideBarVisible = true;
    sideBarDrawer.classList.add('drawer-open');
    sideBarDrawer.classList.remove('drawer-hide');

    wrapper.classList.add('wrapper-after');
    wrapper.classList.remove('wrapper-before');

    for (let i = 0; i < menuRight.children.length; i++) {
      menuRight.children.item(i).classList.add('hide');
      // menuRight.children.item(i).style.display = 'none';
    }

    document.body.classList.add('overflow-hidden');
  } else {
    sideBarVisible = false;
    sideBarDrawer.classList.add('drawer-hide');
    sideBarDrawer.classList.remove('drawer-open');

    wrapper.classList.add('wrapper-before');
    wrapper.classList.remove('wrapper-after');

    for (let i = 0; i < menuRight.children.length; i++) {
      menuRight.children.item(i).classList.remove('hide');
      // menuRight.children.item(i).style.display = 'flex';
    }
    document.body.classList.remove('overflow-hidden');
  }
};
