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
initMap()

//*****************************/
//*********MAP END***********/
//*****************************/