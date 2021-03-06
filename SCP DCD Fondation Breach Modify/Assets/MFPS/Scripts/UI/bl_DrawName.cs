//////////////////////////////////////////////////////////////////////////////
//  bl_DrawName.cs
//
// Can be attached to a GameObject to show Player Name 
//
//           Lovatto Studio
/////////////////////////////////////////////////////////////////////////////
using UnityEngine;

public class bl_DrawName : bl_MonoBehaviour
{
    /// <summary>
    /// at what distance the name is hiding
    /// </summary>
    public float m_HideDistance;
    /// <summary>
    /// 
    /// </summary>    
    public Texture2D m_HideTexture;
    /// <summary>
    /// 
    /// </summary>
    public GUIStyle m_Skin;
    /// <summary>
    /// 
    /// </summary>
    [HideInInspector]
    public string m_PlayerName= string.Empty;
    /// <summary>
    /// 
    /// </summary>
    public Transform m_Target;
    //Private
    private float m_dist;
    private Transform myTransform;

    /// <summary>
    /// 
    /// </summary>
    protected override void OnEnable()
    {
        base.Awake();
        this.myTransform = this.transform;
    }

    /// <summary>
    /// 
    /// </summary>
    void OnGUI()
    {
        if (bl_UtilityHelper.CameraInUse == null)
            return;

            Vector3 vector = bl_UtilityHelper.CameraInUse.WorldToScreenPoint(this.m_Target.position);
            if (vector.z > 0)
            {
                if (this.m_dist < m_HideDistance)
                {
                    GUI.Label(new Rect(vector.x - 5, (Screen.height - vector.y) - 7, 10, 11), m_PlayerName,m_Skin);
                }
                else
                {
                    GUI.DrawTexture(new Rect(vector.x - 5, (Screen.height - vector.y) - 7, 13, 13), this.m_HideTexture);
                }
            }
    }

    /// <summary>
    /// 
    /// </summary>
    public override void OnUpdate()
    {
        if (bl_UtilityHelper.CameraInUse == null)
            return;
        
            this.m_dist = bl_UtilityHelper.GetDistance(this.myTransform.position, bl_UtilityHelper.CameraInUse.transform.position);       
    }
}