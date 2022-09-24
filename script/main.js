function headerBurger() {
  const closeNav = document.getElementById('header__nav-burger-hub-1-field')
  return closeNav.addEventListener("click", () => {
    const navPopUp = document.querySelector('.header__nav-burger')
    const body = document.getElementById('body')
    navPopUp.classList.toggle('header__nav-burger--active')
    body.classList.toggle('header__nav-burger--hideBody')
  })
}
headerBurger()