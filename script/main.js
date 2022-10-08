//*****************************/
//*****BURGER NAVBAR START*****/
//*****************************/
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
//*****************************/
//*****BURGER NAVBAR END*******/
//*****************************/

//*****************************/
//*********SLIDER START********/
//*****************************/
$(document).ready(() => {
  $('.slider').slick({
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: true,
    cssEase: 'linear',
    prevArrow: `
      <button type="button" class="slick-prev">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="#454950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 5L5 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    `,
    nextArrow: `
      <button type="button" class="slick-next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="#454950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>      
      </button>
    `,
    responsive: [

      {
        breakpoint: 570,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  })
})
//*****************************/
//*********SLIDER END**********/
//*****************************/

//*****************************/
//*********MAP START***********/
//*****************************/

function initMap() {
  //*Coordinates
  const coordinates = { lat: 46.446717633227095, lng: 30.708664031967036 }

  //*Init map
  const map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    zoom: 19,
    disableDefaultUI: false,
  });

  //*Create icon
  const image = '/img/icons/google-map-marker.svg'

  //*Create marker
  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: image
  });

  //*popUpContent
  const popupContent = `<p class="content"></p>`

  const infowindow = new google.maps.InfoWindow({
    content: popupContent
  });
  //default open popUp

  infowindow.open(map, marker);

}
//initMap()

//*****************************/
//*********MAP END***********/
//*****************************/

//*****************************/
//**RENDER POP-UP FORM START***/
//*****************************/
const body = document.getElementById('body')
const log = document.querySelector('.log')
function openClosePopUp(clickOn) {
  clickOn.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains(clickOn.classList[0])) {
      clickOn.classList.remove('open-pop-up')
      body.classList.remove('hide-body')
    } else {
      return false
    }
  })
}
function logInField() {
  const entries = [document.querySelector('.header__main-icon'), document.getElementById('profile-mob')]
  entries.forEach(entry => entry.addEventListener('click', (e) => {
    e.preventDefault()
    log.classList.add('open-pop-up')
    body.classList.add('hide-body')
  }))
  // render registration Pop-up
  openClosePopUp(log)
}
logInField()
function openClosePopUp(clickOn) {
  clickOn.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains(clickOn.classList[0])) {
      clickOn.classList.remove('open-pop-up')
      body.classList.remove('hide-body')
    } else {
      return false
    }
  })
}
function registrationField() {
  const createAcc = document.getElementById('log__form-btn-create')
  const reg = document.querySelector('.reg')
  createAcc.addEventListener('click', (e) => {
    e.preventDefault()
    setTimeout(() => {
      reg.classList.add('open-pop-up')
    }, 200)
    body.classList.add('hide-body')
    log.classList.remove('open-pop-up')
  })
  // render registration Pop-up
  openClosePopUp(reg)
}
registrationField()
//*****************************/
//****RENDER POP-UP FORM END***/
//*****************************/