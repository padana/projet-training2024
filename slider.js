const img = ['slider_1.jpg', 'slider_2.jpg', 'slider_3.jpg'];
let num  = 0;

function ChangeSlider(sens){
    num = num + sens;
    if(num > 2)
    num = 0;
    
    if(num < 0)
    num = 2;
    
    document.getElementById('slide').src = './image/' + img[num];
}
setInterval("ChangeSlider(1)", 4000);

/*
  1) je vais mettre en paramaitre -1 (je vais retirer l'image precedent)
  2) je vais mettre en paramaitre  1 (je vais mettre sur l'image suivant)

3) Sens comme parametre qui va recuperer (-1, 1)

4) maintenant aprés avoir etablie le tableau des images on va exploiter les paramaitres (-1) (1)
par let qu'on va initialiser à 0 pour memoriser l'image actuel; pour ajouter 1 ou retirer 1
 ---(sens) est une variable qui va prendre 1 si on clique sur suivant et -1 si on clique sur precedent
 --- maintenant on va etablir une condition pour stoper la boucle

 --- (-1)(+1) == (sens) maintenant on regarde il va rentrer dans le fonction pour calculer (num) sur chaque condition 

 setInterval("ChangeSlider(1)", 4000) ==  pour permettre chaque quatre seconde l'image defile
*/
