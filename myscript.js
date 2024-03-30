function vald(){
    const pass = document.querySelector("#password");
    const conf_pass = document.querySelector("#conf_password");
    const name = document.querySelector("#first_name");
    const email = document.querySelector("#email");
    const Regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  // source-link: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript

    let p = pass.value;
    let cp = conf_pass.value;
    let em = email.value;
    let nm = name.value;
    let n = p.localeCompare(cp);

    if(p.length > 0 && n!=0){
        document.querySelector(".row7").innerHTML = "* Passwords do not match";
        conf_pass.focus();
        event.preventDefault();
    }
    else if(p.length > 0 && n==0 && em.match(Regex) && nm){
        alert("Successfully created!");
        location.reload();
    }
}