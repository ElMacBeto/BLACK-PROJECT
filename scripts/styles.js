

const $menu = $('.mynav');
$('.carousel-item img').addClass('img-fit');
$('.nav-item').addClass('center-item');
$menu.css({background: 'blue'});
$menu.css('box-shadow', '0 5px 10px black');
$('.mynav a').css('color', 'white');

// efecto navbar
const YMenu = document.getElementById('myMenu');
const YnavMenu = document.getElementById('navMenu');
const Yscroll = YMenu.offsetTop - YnavMenu.offsetHeight;

window.onscroll = function(){
    const yOffset = window.pageYOffset;
    
    if(yOffset > Yscroll){
        //console.log(YnavMenu.offsetHeight);
        YMenu.classList.add('sticky-menu');
    } else{
        YMenu.classList.remove('sticky-menu');
    };
    
    //console.log(`window: ${yOffset} y Menu:${YMenu - YnavMenu.offsetHeight}`);
};
