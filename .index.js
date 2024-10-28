const Fname=document.getElementById("FName").value;

function savedata(){
    localStorage.setItem("Fname", Fname)
}
function greet(){
    localStorage.getItem(Fname);
    const Fname=document.querySelector(".name")=Fname

}