using UnityEngine;

public class Resolution1920x1080 : MonoBehaviour
{
	void Start()
	{
		// Switch to 1920 x 1080 fullscreen
		Screen.SetResolution(1920, 1080, true);
	}
}