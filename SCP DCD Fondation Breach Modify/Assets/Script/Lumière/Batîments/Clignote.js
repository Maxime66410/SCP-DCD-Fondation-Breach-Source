var timer = 1; //Temps

function Start () { //Variable
   while (true){
     yield WaitForSeconds(timer);
     GetComponent.<Light>().enabled = !GetComponent.<Light>().enabled;
    }
}
