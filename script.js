let icon = document.getElementsByClassName("icon")[0];
let container = document.getElementsByClassName("cont")[0];
let x = document.getElementsByClassName("x")[0];
let login = document.getElementsByClassName("login")[0];
let signup = document.getElementsByClassName("signup")[0];
let login1 = document.getElementsByClassName("login1")[0];
let signup1 = document.getElementsByClassName("signup1")[0];
let loginform = document.getElementsByClassName("loginform")[0];
let signupform = document.getElementsByClassName("signupform")[0];
let loginx = document.getElementsByClassName("loginx")[0];
let signupx = document.getElementsByClassName("signupx")[0];




icon.addEventListener("click", () => {
    container.style.display = "inline-flex";
    icon.style.display = "none";
})

x.addEventListener("click", () => {
    container.style.display = "none";
    icon.style.display = "block";
})

x.addEventListener("mouseover", ()=> {
    x.style.transform = "scale(1.5)";
})

x.addEventListener("mouseout", ()=> {
    x.style.transform = "scale(1)";
})

login.addEventListener("mouseover", () => {
    login.style.transform = "translate(-8px,-8px)";
})

login.addEventListener("mouseout", ()=> {
    login.style.transform = "translate(0px,0px)";
})

login.addEventListener("click", () => {
    login.style.transform = "translate(0px,250px)";
    login.style.visibility = "hidden";
    login1.style.visibility = "hidden";
    signup.style.visibility = "hidden";
    signup1.style.visibility = "hidden";
    loginform.style.top = "120px";
    loginform.style.display = "inline-flex";
})

signup.addEventListener("mouseover", () => {
    signup.style.transform = "translate(-8px,-8px)";
    
})

signup.addEventListener("mouseout", ()=> {
    signup.style.transform = "translate(0px,0px)";
})

signup.addEventListener("click", () => {
    signup.style.transform = "translate(px,250px)";
    signup.style.visibility = "hidden";
    signup1.style.visibility = "hidden";
    login.style.visibility = "hidden";
    login1.style.visibility = "hidden";
    signupform.style.top = "120px";
    signupform.style.display = "inline-flex";
})

let form1 = document.getElementsByTagName("form")[0];


form1.addEventListener("submit",e => {
    e.preventDefault();
    let name = e.target.elements.name;
    let name_val = e.target.elements.name.value;
    
    let email = e.target.elements.email;
    let email_val = e.target.elements.email.value;

    let password = e.target.elements.password;
    let password_val = e.target.elements.password.value;

    let user_credentials = [];

    let data = {name : name_val, email : email_val, password : password_val};

    user_credentials.push(data);
    console.log(user_credentials);
});

let form2 = document.getElementsByTagName("form")[1];

form2.addEventListener("submit", a => {
    a.preventDefault();

    let email = a.target.elements.email;
    let email_val = a.target.elements.email.value;

    let password = a.target.elements.password;
    let password_val = a.target.elements.password.value;

    let user_credentials1 = [];

    let data = {email : email_val, password : password_val};

    user_credentials1.push(data);
    console.log(user_credentials1);
});
document.addEventListener("click",(b) => {
    if(!container.contains(b.target)){
        loginform.style.display = "none";
        signupform.style.display = "none";
        signup.style.visibility ="visible";
        signup1.style.visibility = "visible";
        login.style.visibility = "visible";
        login1.style.visibility = "visible";
    }

})

loginx.addEventListener("click", () => {
    loginform.style.display = "none";
    signup.style.visibility ="visible";
    signup1.style.visibility = "visible";        
    login.style.visibility = "visible";
    login1.style.visibility = "visible";
})

signupx.addEventListener("click", () => {
    signupform.style.display = "none";
    signup.style.visibility ="visible";
    signup1.style.visibility = "visible";        
    login.style.visibility = "visible";
    login1.style.visibility = "visible";
})
