var soundTurnOn : AudioClip;
var soundTurnOff : AudioClip;
var light1:Light;
private var lightOn : boolean = false;
 
function Update()
{


if (!lightOn && Input.GetKeyDown ("f")) //bouton
{
lightOn = !lightOn; //Lampe torche allumé


light1.enabled = true;
GetComponent.<AudioSource>().clip = soundTurnOn;
GetComponent.<AudioSource>().PlayOneShot(soundTurnOn, 0.2f);

}else if (lightOn && Input.GetKeyDown ("f")) //bouton
{
lightOn = !lightOn; //Lampe torche éteint

light1.enabled = false;
GetComponent.<AudioSource>().clip = soundTurnOff;
GetComponent.<AudioSource>().PlayOneShot(soundTurnOff, 0.2f);

}
}