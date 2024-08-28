const treeArrow = document.querySelectorAll('.tree__up-arrow');
const treeBtn = document.querySelector('.tree__header');
const treeFirstFolder = document.querySelector('.tree__folder--first');

const treeFirst = document.querySelector('.tree__first-lvl');
const treeSecond = document.querySelector('.tree__second-lvl');

treeBtn.addEventListener('click', function () {
  treeFirst.classList.toggle('hidden');
  treeArrow[0].classList.toggle('rotate');
});
treeFirstFolder.addEventListener('click', function () {
  treeSecond.classList.toggle('hidden');
  treeArrow[1].classList.toggle('rotate');
});

const treeItems = document.querySelectorAll('.tree__item');
treeItems.forEach(function (item) {
  item.addEventListener('click', function () {
    treeItems.forEach(function (el) {
      el.classList.remove('tree__item--active');
    });

    item.classList.add('tree__item--active');
  });
});

const compileOpen = document.querySelector('.compile__open');

const compile = document.querySelector('.compile');
const compileConsole = document.querySelector('.compile__console');
const compileClear = document.querySelector('.compile__clear');

compileOpen.addEventListener('click', function () {
  compile.classList.toggle('hidden');
});

// Инициализация CodeMirror
var editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
  lineNumbers: true,
  mode: 'python',
  theme: 'default',
  lineNumbers: true,
});

compile.classList.add('hidden');
compile.classList.remove('opacity');
// Обработчик для кнопки очистки кода
compileClear.addEventListener('click', function () {
  editor.setValue('');
});

const compileResOpen = document.querySelector('.compile-res__open');
const compileCode = document.querySelector('.compile__code');
const compileSize = document.querySelector('.CodeMirror');

const asideBtn = document.querySelector('.aside__btn');

compileResOpen.addEventListener('click', function () {
  compileSize.classList.toggle('compile--small');
  compileConsole.classList.toggle('hidden');
  if (asideBtn.textContent === 'Сохранить изменения') {
    asideBtn.textContent = 'Закрыть';
  } else {
    asideBtn.textContent = 'Сохранить изменения';
  }
});
asideBtn.addEventListener('click', function () {
  compileSize.classList.remove('compile--small');
  compileConsole.classList.add('hidden');
  asideBtn.textContent = 'Сохранить изменения';
});

const changeTheme = document.querySelector('.settings__btn');
const bodyElement = document.querySelector('body');
const treeIconRes = document.querySelectorAll('.tree__icon--res');
changeTheme.addEventListener('click', function () {
  if (bodyElement.classList.contains('light-theme')) {
    bodyElement.classList.remove('light-theme');
    bodyElement.classList.add('dark-theme');
    treeIconRes[0].setAttribute('src', 'img/file-compile-res-dark.svg');
    treeIconRes[1].setAttribute('src', 'img/file-question-res-dark.svg');
  } else {
    bodyElement.classList.remove('dark-theme');
    bodyElement.classList.add('light-theme');
    treeIconRes[0].setAttribute('src', 'img/file-compile-res.svg');
    treeIconRes[1].setAttribute('src', 'img/file-question-res.svg');
  }
});

const contextMenu = document.querySelector('.context-menu');
const contextTarget = document.querySelector('.create');

// Функция для показа/скрытия контекстного меню
function toggleContextMenu(event) {
    if (event.button === 0) {
        if (contextMenu.style.display === 'block') {
            hideContextMenu();
        } else {
            showContextMenu(event);
        }
    }
}

function showContextMenu(event) {
    // Устанавливаем позицию контекстного меню
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;

    contextMenu.style.display = 'block';
    event.preventDefault();
}

function hideContextMenu() {
    contextMenu.style.display = 'none';
}
contextTarget.addEventListener('click', toggleContextMenu);

const contextMenuClose = document.querySelector('.context-menu__close');
contextMenuClose.addEventListener('click', hideContextMenu);