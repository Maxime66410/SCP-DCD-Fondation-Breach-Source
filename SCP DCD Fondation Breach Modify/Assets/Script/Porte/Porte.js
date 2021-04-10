/*
Instruction:
      créer un cube à utiliser comme charnière où est nécessaire, le cube de withe
      appuyez sur f pour l'atteindre
      créer un cube à utiliser comme re-taille de fin de porte, le cube brun
      centrer la charnière sur la porte __________________________pic door1
      parent la charnière à la porte
 
      dans l'inspecteur, centrez le collisionneur à la taille de la porte selon vos besoins
      et activer le déclencheur ___________________________________pic door2
 
      Assignez ce script à la charnière
 
      Appuyez sur "f" pour ouvrir et fermer la porte
      si whant change, if (Input.GetKeyDown ("e") à la ligne 46
      Assurez-vous que le personnage principal est marqué "player"
      lorsque tout le travail peut supprimer le rendu Mash et le filtre Mash
     */ 
 
 
 
 
     // Ouvrez doucement une porte
     var smooth = 2.0;
     var DoorOpenAngle = 90.0;
     var DoorCloseAngle = 0.0;
     var open : boolean;
     var enter : boolean; 
     var son : AudioClip;
     //La function
      function Update ( ){
 
      if(open == true){ 
        var target = Quaternion.Euler (0, DoorOpenAngle, 0);
          // Humidifier vers la rotation de la cible
           transform.localRotation = Quaternion.Slerp(transform.localRotation, target,
           Time.deltaTime * smooth);
      }
 
      if(open == false){
        var target1 = Quaternion.Euler (0, DoorCloseAngle, 0);
          // Humidifier vers la rotation de la cible
           transform.localRotation = Quaternion.Slerp(transform.localRotation, target1,
        Time.deltaTime * smooth);
      }
 
       if(enter == true){
         if(Input.GetKeyDown("e")){
      open = !open;

      GetComponent.<AudioSource>().clip = son;
	  GetComponent.<AudioSource>().PlayOneShot(son, 0.2f);
         }
      }
 
     }
 
     //Activer la fonction principale lorsque le joueur est près de la porte
     function OnTriggerEnter (other : Collider){
 
      if (other.gameObject.tag == "Player") {
      (enter) = true;
      }
     }
 
     //Désactiver la fonction principale lorsque le joueur s'éloigne de la porte
     function OnTriggerExit (other : Collider){
 
      if (other.gameObject.tag == "Player") {
      (enter) = false;
      }
     }