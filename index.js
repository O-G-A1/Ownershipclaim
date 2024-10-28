
function savedata(){
    const firstName=document.getElementById("firstName").value;
    localStorage.setItem("firstName", firstName)
}
function greet(){
    const firstName=localStorage.getItem("firstName");
    document.getElementById("Fname").textContent=`Congratulations, ${firstName}!`

}