function al(){const pass = document.querySelector("#password");
const conf_pass = document.querySelector("#conf_password");
const name = document.querySelector("#first_name");
const email = document.querySelector("#email");

let p = pass.value;
let cp = conf_pass.value;
let em = email.value;
let nm = name.value;

let n = p.localeCompare(cp);
if(p.length > 0 && n!=0){
    document.querySelector(".row7").innerHTML = "* Passwords do not match";
    event.preventDefault();
}
else if(p.length > 0 && n==0 && em && nm){
    alert("su");
}
}