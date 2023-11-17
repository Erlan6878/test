//!--------------события клав------------------
//?     keydown: вознекает при нажатие клав и длится пока нажата клавиша
window.addEventListener("keydown", (event) => {
  // console.log(event)
});
//todo----------------------------------------------------------
//?    keyup:  возникает при отпускани клавиш клав
window.addEventListener("keyup", (event) => {
  // console.log(event)
});
//todo----------------------------------------------------------
//?    Submit:

let form = document.querySelector("form");
let inpForm = document.querySelectorAll("input");
let btn1 = document.querySelector("#btn1")
let img =document.querySelector("form img")

//todo----------------------------------------------------------
btn1.addEventListener("click",()=>{
    form.style.display ="block"
})
//todo----------------------------------------------------------
img.addEventListener("click", ()=>{
    form.style.display= "none"
})
//todo----------------------------------------------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  inpForm.forEach((elem) => {
    elem.value = "";
  });
  form.style.display = "none"
});
