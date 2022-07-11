// 選取id
const toggleMenuBtn = document.querySelector('#toggle-btn');
// 選取最外層的body
const body = document.querySelector('body');
// 點擊按鈕時，要對body做樣式的切換
toggleMenuBtn.addEventListener('click', (evt) => {
    evt.preventDefault;
    body.classList.toggle('sidebar-toggled');
})