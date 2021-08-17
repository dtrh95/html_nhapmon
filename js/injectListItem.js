export const injectListItem = (list, element) => {
  list.forEach((item) => {
    const li = document.createElement('li'); // <li></li>
    li.innerHTML = item; // <li>SALE</li>
    element.append(li); // <ul><li>SALE</li></ul>
  });
};
