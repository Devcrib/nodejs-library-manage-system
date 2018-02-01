const butty = document.getElementById("butty");
let passcode = document.getElementById("passcode");

butty.addEventListener("click", function(e){
       if(passcode.getAttribute("type")=="password"){
            passcode.setAttribute("type","text");
        } else {
            passcode.setAttribute("type","password");
        }
    });
