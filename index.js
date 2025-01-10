
for ( let  i=0;i<document.querySelectorAll("button").length ; i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    switch (i) {
      case 0 :
        var audio=new Audio('./sounds/tom-1.mp3');
        break;
      case 1 :
        var audio=new Audio('./sounds/tom-2.mp3');
        break;
      case 2 :
        var audio=new Audio('./sounds/tom-3.mp3');
        break;
      case 3 :
        var audio=new Audio('./sounds/tom-4.mp3');
        break;
      case 4 :
          var audio=new Audio('./sounds/snare.mp3');
          break;
      case 5 :
            var audio=new Audio('./sounds/crash.mp3');
            break;
      case 6 :
            var audio=new Audio('./sounds/kick-bass.mp3');
            break;



    }
    audio.play();

  });
}


document.addEventListener("keypress",function(event){
  switch (event.key) {
    case 'w' :
      var audio=new Audio('./sounds/tom-1.mp3');
      break;
    case 'a' :
      var audio=new Audio('./sounds/tom-2.mp3');
      break;
    case 's' :
      var audio=new Audio('./sounds/tom-3.mp3');
      break;
    case 'd' :
      var audio=new Audio('./sounds/tom-4.mp3');
      break;
    case 'j' :
        var audio=new Audio('./sounds/snare.mp3');
        break;
    case 'k' :
          var audio=new Audio('./sounds/crash.mp3');
          break;
    case 'l' :
          var audio=new Audio('./sounds/kick-bass.mp3');
          break;
        }
        audio.play();


}
);
