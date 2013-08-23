#pragma strict

function Start () {

}

function Update () {
	
	transform.position.x += Input.GetAxis("Horizontal") * 2;
	transform.position.z += Input.GetAxis("Vertical") * 2;
}