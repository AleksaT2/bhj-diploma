/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const bodyElement = document.querySelector('body');
    const menuBtn = document.querySelector('a.sidebar-toggle');
    menuBtn.addEventListener('click', () => {
      bodyElement.classList.toggle('sidebar-open');
      bodyElement.classList.toggle('sidebar-collapse');
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const registerBtn = document.querySelector('li.menu-item_register');
    const logInBtn = document.querySelector('li.menu-item_login');
    const logOutBtn = document.querySelector('li.menu-item_logout');

    registerBtn.addEventListener('click', (e) => {
      App.getModal('register').open();
    })

    logInBtn.addEventListener('click', (e) => {
      App.getModal('login').open();
    })

    logOutBtn.addEventListener('click', (e) => {
      
      User.logout((err, response) => {
        if (response && response.success) {
          App.setState('init');
        }
      })
    })
  }
}
