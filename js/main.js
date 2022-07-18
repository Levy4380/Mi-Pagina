//---------------------------------------------
//---------Alto de pantalla responsivo---------
//---------------------------------------------
let altoVentana = function(section){
    var alto = $(window).height();

    section.css({'height' : alto + 'px'}); 
};
altoVentana($('.section_home'));
altoVentana($('.section_sobre_mi'));
altoVentana($('.section_ubicacion'));
altoVentana($('.section_contacto'));

$(window).resize(function(){
    altoVentana($('.section_home'));
    altoVentana($('.section_sobre_mi'));
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
function isInViewport(section) {
    const elementos = document.getElementsByClassName(section);
    const rect = elementos[0].getBoundingClientRect();

    return (
        (rect.top >= 0 || 
        rect.bottom > ((window.innerHeight)/2) ) &&
        (rect.top <= (window.innerHeight)/2 ||
        rect.bottom <= window.innerHeight)
    );
};

function elementInViewport(section){
    if (isInViewport(section) == true){
        $("#"+ section).addClass('nav_menu_link_active');
    
    }
    else {
        $("#"+ section).removeClass('nav_menu_link_active');
    }
};

elementInViewport('section_home');

$(window).scroll(function(){
    elementInViewport('section_home');
    elementInViewport('section_sobre_mi');
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

        $(".contenedor_slider_habilidades").children('.active').prev().animate({
            'left' : '-100%'
        },500);

        $(".contenedor_slider_habilidades").children('.active').animate({
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
     //Permite el click luego de 1/2 segundo
     setTimeout(function(){
        $("#habilidades_next").css("pointer-events", "auto");
     },500);
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

        $('.contenedor_slider_habilidades').children('.active').removeClass('active').animate({
            'left' : '100%'
        },500);

        slide.padre.children().last().addClass('active').animate({
            'left':'0'
        },500);

        slide.posicion = slide.numeroSlide
    }
    $("#habilidades_prev").css("pointer-events", "none");
    setTimeout(function(){
       $("#habilidades_prev").css("pointer-events", "auto");
    },500);
});

//-------------------------------------
//----------Section ubicacion----------
//-------------------------------------

function iniciarMap(){
    var coord = {lat: -34.921126 ,lng:-57.954565};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 12,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}