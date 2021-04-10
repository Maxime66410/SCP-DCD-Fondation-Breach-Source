using UnityEngine;

public class Resolution : MonoBehaviour
{
	void Start()
	{
		// Switch to 1280 x 720 fullscreen
		Screen.SetResolution(1280, 720, true);
	}
}