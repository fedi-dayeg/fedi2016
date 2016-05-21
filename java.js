function Commencer()
{
    var canvas=document.getElementById("mainCanvas");
    //attribuer un context
    var Moncontext= canvas.getElementById("2d");
    // canvas temps
    var canvasTemp= document.getElementById("Ctemps");
    var Moncontext2=canvasTemp.getContext("2d");

    //creation de rectangle
    Moncontext.clearRect(0, 0, 500, 400);
    Moncontext2.clearRect(0, 0, 250, 30);

    //variable pour le temps du compteur
    var temp=50;
    Moncontext2.font = "bold 25px helvetica";
    //fillText permet de colorer le compteur de temps
    Moncontext2.fillText(temp, 225, 20);
}
