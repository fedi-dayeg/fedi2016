function Commencer()
{
    var canvas=document.getElementById("moncanvas");
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

    //variable pour les rectangle de joueur
    var longeur=500, largeur=400, vitesse=3;
    //variable de score
    var score=0;
    //variable pour le touche de mouvement
    var touche=[];
    //une enregestrement pour le joueur
    var joueur={
      x: 40,
      y: 40,
      longeur: 20,
      largeur: 20
    };

}
