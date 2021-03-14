
const $menu = $('.mynav');
$('.carousel-item img').addClass('img-fit');
$('.nav-item').addClass('center-item');
$menu.css({background: 'blue'});
$menu.css('box-shadow', '0 5px 10px black');
$('.mynav a').css('color', 'white');

// efecto navbar
const YMenu = document.getElementById('myMenu'),
      YnavMenu = document.getElementById('navMenu'),
      Yscroll = YMenu.offsetTop - YnavMenu.offsetHeight,
      stickyVacio = document.getElementById('sticky-vacio');

var heigthVp = window.matchMedia("(min-height: 550px)"),
    itemsCar = document.getElementsByClassName('card');

window.onscroll = function(){
    const yOffset = window.pageYOffset;
    //console.log(x.matches);
    if(heigthVp.matches){
        if(yOffset > Yscroll){
            //console.log(YnavMenu.offsetHeight);
            YMenu.classList.add('sticky-menu');
        } else{
            YMenu.classList.remove('sticky-menu');
        };
    } else{
        YMenu.classList.remove('sticky-menu');
    }
        //console.log(`window: ${yOffset} y Menu:${YMenu - YnavMenu.offsetHeight}`);
    
// efecto aparecer items-paquetes con el scroll--------------------------------------------
    if(itemsCar[5].dataset.show === 'false'){
        for(i=0; i<itemsCar.length;  i++){
            if((itemsCar[i].offsetTop-550)<yOffset){
                if(itemsCar[i].dataset.show == "false"){
                    //console.log('funciona');
                    itemsCar[i].classList.add('show');
                    itemsCar[i].dataset.show = 'true';
                };
            };
        };
    }; 
};
