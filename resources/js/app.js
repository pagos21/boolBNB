
require('./bootstrap');

window.Vue = require('vue');
window.$ = require('jquery');



$(document).ready(init)


function autocompletesearch(){
  // PARTE AUTOCOMPLETE
  var long;
  var lat;
  var city;
  var placesAutocomplete = places({
      appId: 'pl8W088Q8NFB',
      apiKey: '5f0867802489c340cd8ae9e3a2f0856b',
      container: document.querySelector('#address-input')
    });

    placesAutocomplete.on('change', function(e) {
      //   $address.textContent = e.suggestion.value


        long = e.suggestion.latlng.lng
        lat = e.suggestion.latlng.lat
        city = e.suggestion.name


        sessionStorage.setItem('long', e.suggestion.latlng.lng)
        sessionStorage.setItem('lat', e.suggestion.latlng.lat);
        sessionStorage.setItem('city', e.suggestion.name);

        document.cookie = `lat=${lat}`;
        document.cookie = `long=${long}`;
        document.cookie = `city=${city}`;
      });
}

function setDistance(){
  const $valueSpan = $('.valueSpan2');
    const $value = $('#customRange11');
    $valueSpan.html($value.val());
    $value.on('input change', () => {

      $valueSpan.html($value.val());
      var distance = $value.val();
      document.cookie = `distance=${distance}`;
    });
}


// JS modal + Jquery
function modal(){
  // Get the modal
  // reference for html and CSS "https://www.w3schools.com/howto/howto_css_modals.asp"
var modal = $("#myModal");

// Get the button that opens the modal
var btn = $(this);
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = $(".close");
console.log(span);

modal.show();

// When the user clicks on <span> (x), close the modal
span.click(function(){
modal.hide();
})
// When the user clicks anywhere outside of the modal, close it
$(document).mouseup(function (e){
var container = $(".modal-content");
if (!container.is(e.target) && container.has(e.target).length == 0){
modal.fadeOut("slow");
}
});
setTimeout(function () {
modal.fadeOut("slow");
}, 2000);
}



function init() {


    document.cookie = `lat=${""}`;
    document.cookie = `long=${""}`;
    document.cookie = `city=${""}`;
    document.cookie = `distance=${""}`;



      autocompletesearch();
      setDistance();

      // se il searchbar è empty
      $('#bottone').click(function(){
        if ($('#address-input').val() == "") {
            modal();
        } else {
          $("#bottone").attr('href', 'search');
        }
      })

      //Menu Toggle Script
        $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
        });
    }
