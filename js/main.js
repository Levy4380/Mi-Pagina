//---------------------------------------------
//---------Alto de pantalla responsivo---------
//---------------------------------------------
let altoVentana = function(banner){
    var alto = $(window).height();

    banner.css({'height' : alto + 'px'}); 
};
altoVentana($('.section_sobre_mi'));
altoVentana($('.section_habilidades'));
altoVentana($('.section_proyectos'));
altoVentana($('.section_ubicacion'));
altoVentana($('.section_contacto'));

$(window).resize(function(){
   altoVentana($('.section_sobre_mi'));
   altoVentana($('.section_habilidades'));
   altoVentana($('.section_proyectos'));
    altoVentana($('.section_ubicacion'));
    altoVentana($('.section_contacto'));    
});

//---------------------------------------
//---------Menu movil responsivo---------
//---------------------------------------

const navToggle = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu');
navToggle.addEventListener('click',function(e){
    e.preventDefault();
   navMenu.classList.toggle('nav_menu_visible') 
});

//-------------------------------------
//--------Selector elemento nav--------
//-------------------------------------
function isInViewport(element) {
    const elementos = document.getElementsByClassName(element);
    const rect = elementos[0].getBoundingClientRect();

    return (
        (rect.top >= 0 || 
        rect.bottom > ((window.innerHeight)/2) ) &&
        (rect.top <= (window.innerHeight)/2 ||
        rect.bottom <= window.innerHeight)
    );
};

function elementInViewport(element){
    if (isInViewport(element) == true){
        $("#"+ element).addClass('nav_menu_link_active');
    
    }
    else {
        $("#"+ element).removeClass('nav_menu_link_active');
    }
};

elementInViewport('section_sobre_mi');
elementInViewport('section_habilidades');
elementInViewport('section_proyectos');
elementInViewport('section_ubicacion');
elementInViewport('section_contacto');

$(window).scroll(function(){
    elementInViewport('section_sobre_mi');
    elementInViewport('section_habilidades');
    elementInViewport('section_proyectos');
    elementInViewport('section_ubicacion');
    elementInViewport('section_contacto');
});





//--------------------------------------
//------Flechas slider-habilidades------
//--------------------------------------
var slide = {
    padre:$(".contenedor_slider_habilidades"),
    numeroSlide:$(".contenedor_slider_habilidades").children('.slide').length,
    posicion:1
};
slide.padre.children('.active').css({
    'left' : '0'
});


$('#habilidades_next').on('click',function(e){
    e.preventDefault();

    if(slide.posicion < slide.numeroSlide){
        
        slide.padre.children().not('.active').css({
            'left': '100%'
        });
    
        $(".contenedor_slider_habilidades").children('.active').removeClass('active').next().addClass('active');

        $(".contenedor_slider_habilidades").children('.active').prev().css({
            'left':'0'
        }).animate({
            'left' : '-100%'
        },500);


        $(".contenedor_slider_habilidades").children('.active').css({
            'left':'100%'
        }).animate({
            'left':'0'
        },500);

        slide.posicion += 1;
    }

    else{
        $(".contenedor_slider_habilidades").children('.active').removeClass('active').animate({
            'left':'-100%'
        },500);

        slide.padre.children().first().addClass('active').animate({
            'left' : '0'
        },500);
        slide.posicion = 1;
    }
     //Delay para las imagenes
     $("#habilidades_next").css("pointer-events", "none");
     setTimeout(function(){
        // enable click after 1 second
        $("#habilidades_next").css("pointer-events", "auto");
     },400);
})

$('#habilidades_prev').on('click',function(e){ 
    e.preventDefault();
    if(slide.posicion >= 2 ){

        slide.padre.children().not('.active').css({
            'left': '-100%'
        });

        $('.contenedor_slider_habilidades').children('.active').removeClass('active').prev().addClass('active').animate({
            'left' : '0'
        },500);
        $('.contenedor_slider_habilidades').children('.active').next().animate({
            'left' : '100%'
        },500);
        slide.posicion -= 1;
    }
    else{
        slide.padre.children().not('.active').css({
            'left': '-100%'
        });

        slide.padre.children().last().css({
            'color':'red'
        });

        $('.contenedor_slider_habilidades').children('.active').removeClass('active').animate({
            'left' : '100%'
        },500);

        slide.padre.children().last().addClass('active').animate({
            'left':'0'
        });

        slide.posicion = slide.numeroSlide
    }
    //Delay para las imagenes
    $("#habilidades_prev").css("pointer-events", "none");
    setTimeout(function(){
       // enable click after 1 second
       $("#habilidades_prev").css("pointer-events", "auto");
    },400);
});