const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((listItem, idx) => {
  listItem.addEventListener('click', () => {
    hideAllItems();
    hideAllContents();

    listItem.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideAllItems() {
  listItems.forEach(listItem => listItem.classList.remove('active'));
}

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'));
}
