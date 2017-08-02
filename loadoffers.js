window.onload = function() {
  setTimeout(function(){
    var buttons = document.getElementsByClassName('c-coupon__button a-button -red -grows -full-width js-load-to-card js-coremetrics-location');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].click();
    }
  }, 3000);

}
