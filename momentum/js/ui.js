/*==================== TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('utils__active')
    })
    target.classList.add('utils__active')

    tabs.forEach(tab => {
      tab.classList.remove('utils__active')
    })
    tab.classList.add('utils__active')
  })
})

/*==================== MENU SHOW AND HIDDEN ====================*/
const mainMenu = document.getElementById('nav-container'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      section = document.querySelector('.main');

function closeMenu() {
  mainMenu.classList.remove('show-menu');
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
      mainMenu.classList.add('show-menu');
  })
}

if (section) {
  section.addEventListener('click', () => {
    closeMenu();
  })
}

navClose.addEventListener('click', closeMenu)


