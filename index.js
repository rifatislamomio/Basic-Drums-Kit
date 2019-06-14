var handleClick = function () {
    
}

for(var i=0;i<document.querySelectorAll('.drum').length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnInner = this.innerHTML;
        switch(btnInner) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
            var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("./sounds/crash.mp3");
                    crash.play();
                    break;            
             case "l":
                    var kick = new Audio("./sounds/kick-bass.mp3");
                    kick.play();
                    break;
        }
    });
}


$('body').keypress(function(e)
{
    var btnPressed = e.key+"";
        switch(btnPressed) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                $('body').keydown(function(e){
                    if(e.key=="w")
                        $('.w').addClass('pressed');
                });
                $('body').keyup(function(e){
                    if(e.key=="w")
                        $('.w').removeClass('pressed');
                });
                break;
            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                $('body').keydown(function(e){
                    if(e.key=="a")
                        $('.a').addClass('pressed');
                });
                $('body').keyup(function(e){
                    if(e.key=="a")
                        $('.a').removeClass('pressed');
                });
                break;
            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                $('body').keydown(function(e){
                    if(e.key=="s")
                        $('.s').addClass('pressed');
                });
                $('body').keyup(function(e){
                    if(e.key=="s")
                        $('.s').removeClass('pressed');
                });
                break;
            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                $('body').keydown(function(e){
                    if(e.key=="d")
                        $('.d').addClass('pressed');
                });
                $('body').keyup(function(e){
                    if(e.key=="d")
                        $('.d').removeClass('pressed');
                });
                break;
            case "j":
            var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                $('body').keydown(function(e){
                    if(e.key=="j")
                        $('.j').addClass('pressed');
                });
                $('body').keyup(function(e){
                    if(e.key=="j")
                        $('.j').removeClass('pressed');
                });
                break;
            case "k":
                var crash = new Audio("./sounds/crash.mp3");
                    crash.play();
                    $('body').keydown(function(e){
                        if(e.key=="k")
                            $('.k').addClass('pressed');
                            
                    });
                    $('body').keyup(function(e){
                        if(e.key=="k")
                            $('.k').removeClass('pressed');
                    });
                    break;            
             case "l":
                    var kick = new Audio("./sounds/clap.wav");
                    kick.play();
                    $('body').keydown(function(e){
                        if(e.key=="l")
                            $('.l').addClass('pressed');
                    });
                    $('body').keyup(function(e){
                        if(e.key=="l")
                            $('.l').removeClass('pressed');
                    });
                    break;
        }
});
