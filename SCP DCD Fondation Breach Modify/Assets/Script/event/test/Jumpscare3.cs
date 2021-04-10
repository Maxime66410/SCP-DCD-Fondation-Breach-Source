using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Jumpscare3 : MonoBehaviour {

	public GameObject jumpscareObject;

	void Start () {

		jumpscareObject.SetActive(true);
	}

	void OnTriggerEnter (Collider player) {
		if(player.tag == "Player")
		{
			jumpscareObject.SetActive(false);
			StartCoroutine(DestroyObject());
		}		
	}
	IEnumerator DestroyObject()
	{
		yield return new WaitForSeconds(1f);
		Destroy(jumpscareObject);
		Destroy(gameObject);
	}
}
