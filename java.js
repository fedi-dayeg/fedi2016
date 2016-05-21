function Commencer()
{
    var canvas = document.getElementById("monCanvas");
    //attribuer un context
    var context = canvas.getContext("2d");
    // canvas temps
    var canvasTemp= document.getElementById("Ctemps");
    var Moncontext2=canvasTemp.getContext("2d");

    //creation de rectangle
    context.clearRect(0, 0, 500, 400);
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

    //enregistrement pour l'apparition de carré aléatoire
    var cube = {
      x: Math.random() * (longeur - 40),
      y: Math.random() * (largeur - 40),
      longeur: 20,
      largeur: 20
    };

    //addEventListener permet la controle de touche du clavier pour le mouvement de la carré elle et comme l'evenment onClick
    //ajouter evenement pour le touche bas
    //la fonction keyCode  permet de donner code ASCII  d'un touche
    window.addEventListener("keydown", function(e){
      touche[e.keyCode] = true;
    }, false);

    //ajout evenement pour le touche haut
    window.addEventListener("keyup",function(e){
      delete touche[e.keyCode];
    }, false);

//fonction pour animation de la jeux
function jeux(){
  update();
  render();
}
//cette fonction permet la mise a jours de cube a chaque touche appuyer dans le clavier (haut, bas, gouche, droit)
function update(){
  if(touche[38]) joueur.y-=vitesse;
  if (touche[40]) joueur.y+=vitesse;
  if (touche[37]) joueur.x-=vitesse;
  if (touche[39]) joueur.x+=vitesse;

  if (joueur.x < 0) joueur.x = 0;
  if (joueur.y < 0) joueur.y = 0;
  if (joueur.x >= longeur - joueur.longeur) joueur.x = longeur - joueur.longeur;
  if (joueur.y >= largeur - joueur.)
  }
}

}
