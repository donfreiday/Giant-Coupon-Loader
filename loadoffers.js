window.onload = function() {
  setTimeout(function(){
    var buttons = document.getElementsByClassName('button-alternate load-to-card');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].click();
    }
  }, 7000);

}
