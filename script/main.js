const closeNav = document.getElementById('header__nav-burger-hub-1-field')

closeNav.addEventListener("click", () => {
  // const navPopUp = document.getElementById('header__nav-burger')
  // const navPopUpValues = window.getComputedStyle(navPopUp)
  // console.log(navPopUpValues.left);

  // if (navPopUpValues.left !== '0px') {
  //    navPopUp.style.left = "0"
  // } else {
  //    navPopUp.style.left = "-100%"
  // }
  const navPopUp = document.querySelector('.header__nav-burger')
  const body = document.getElementById('body')
  navPopUp.classList.toggle('header__nav-burger--active')
  body.classList.toggle('header__nav-burger--hideBody')
})