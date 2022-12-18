
var clk = document.getElementById('btnViewMode');
clk.addEventListener("click", viewModeChange);


var body = document.getElementById("body")
var img = document.getElementById("img")
var label = document.getElementsByClassName("description")


function viewModeChange() {

 switch (clk.value) {
 
     case "light":
         clk.value = "dark";
         img.src ="lmicon.jfif";
         body.style.backgroundColor  = "#4E545C";
         console.log("Dark mode!");

         for (let i = 0; i < label.length; i++){
            label[i].value = "dark";
        }
         break;
         
     case "dark":
         clk.value = "light";
         img.src="dmicon.jfif";
         body.style.backgroundColor = "aliceblue";
         console.log("Light mode!");
         for (let i = 0; i < label.length; i++){
            label[i].value = "light";
        }
         break;
 
     default:
         console.log("Switch failed :(");
         break;
 }
}




for (let i = 0; i < label.length; i++){
    label[i].classList.toggle("description_dark")
}