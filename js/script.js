

var boton1 = $('#button-1');
var boton2 = $('#button-2');
var boton3 = $('#button-3');
var boton4 = $('#button-4');
var boton5 = $("#button-5");
var boton6 = $("#button-6");



$(document).ready(function (){

  
    // CAMBIAR COLOR DEL BOTÓN

    $("#button-1").click(function(){
        boton1.toggleClass('clicked');
    });
    
    $("#button-2").click(function(){
        boton2.toggleClass('clicked');
    });
       
    $("#button-3").click(function(){
        boton3.toggleClass('clicked');
    });

    $("#button-4").click(function(){
        boton4.toggleClass('clicked');
    });

    $("#button-5").click(function(){
        boton5.toggleClass('clicked');
    });

    $("#button-6").click(function(){
        boton6.toggleClass('clicked');
    });

    // CORROBORAR SI GANASTE

    $("#check").click(function(){
        if ($(boton1).hasClass("clicked") && $(boton3).hasClass("clicked") && $(boton4).hasClass("clicked") && $(boton6).hasClass("clicked") && !$(boton2).hasClass("clicked") && !$(boton5).hasClass("clicked")){
            $("#win-pop-up").css('display', 'block');
    
        } else {
            $("#loose-pop-up").css('display','block');
           
    
        }
    });

    //CERRAR POP-UP

    $(".popup-close").click(function(){
        $(".popup-wrapper").css('display', 'none');
    })

    $(".popup-content button").click(function(){
        $(".popup-wrapper").css('display', 'none');
    })

    



 
});

