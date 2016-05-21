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
    var width=500, height=400, vitesse=3;
    //variable de score
    var score=0;
    //variable pour le touche de mouvement
    var touche=[];
    //une enregestrement pour le joueur
    var joueur={
      x: 40,
      y: 40,
      width: 20,
      height: 20
    };

    //enregistrement pour l'apparition de carré aléatoire
    var cube = {
      x: Math.random() * (width - 40),
      y: Math.random() * (height - 40),
      width: 20,
      height: 20
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
  if (joueur.x >= width - joueur.width) joueur.x = width - joueur.width;
  if (joueur.y >= height - joueur.height) joueur.y = height - joueur.height;
    if (collision(joueur, cube)) calcul();
  }
  //fonction permet de la cration de dux cube en atribueant leur couleur et leur taille
  function render(){
    context.clearRect(0, 0, width, height);
    //couleur de la cube de joueur
    context.fillStyle="blue";
    //les attribue pour le mouvement de la cube
    context.fillRect(joueur.x, joueur.y, joueur.width, joueur.height);
    //couleur de la cube rouge
    context.fillStyle="red";
    context.fillRect(cube.x, cube.y, cube.width, cube.height);
    //couleur de la cube noir;
    context.fillStyle="black";
    //la mise en forme de la conteur de temps en utilisant des balise de css car canvas peut fonctionner avec tous les balise de CSS
    context.font= "bold 30px helvetica";
    context.fillText(score, 30, 30);
  }
  //cette fonction permet de verifier les cube lors de la collusion entre deux cube
  function collision(debut, fin){
    return !(debut.x > fin.x + fin.width || debut.x + debut.width < fin.x || debut.y > fin.y + fin.height || debut.y + debut.height < fin.y);
   }
   // cette fonction permet de augmenter le score a chaque collision faite entre le cube de joueur et le cube aléatoire
   function calcul(){
     score++;
     cube.x = Math.random() * (width - 40);
     cube.y = Math.random() * (height - 40);
   }
   //un enregistrent permet de commencer le jeux avec l'intervalle le compteur temps
   var debutJeux = setInterval(function(){
     jeux();
   }, 1000/30);

   var finJeux = setInterval(function(){
     temp--;

     Moncontext2.clearRect(0, 0, 500, 30);
     Moncontext2.font = "bold 25px helvetica";
     Moncontext2.fillText(temp,255, 20);
     //si le temp = 0 alors en va appeler le fonction end pour arreter le jeux
      if (temp== 0){
        end();}
   },1000);
   //fonction permet de arreter le jeux lors de la compteur de temps sera a 0 et affichage de message avec le score obtenu
function end(){
  clearInterval(debutJeux);
  clearInterval(finJeux);
  context.clearRect(0, 0, width, height);
  Moncontext2.clearRect(0, 0, 500, 30);
  context.fillText("GAME OVER",150, 200);
  Moncontext2.fillText("VOTRE SCORE ET : "+ score, 120, 25);
}
}
