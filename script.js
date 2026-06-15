document.getElementById("myForm").addEventListener("submit", function(event){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    let valid = true;

    if(name === ""){
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    if(email === ""){
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }
    else if(!email.includes("@")){
        document.getElementById("emailError").innerHTML = "Invalid Email";
        valid = false;
    }

    if(password === ""){
        document.getElementById("passwordError").innerHTML = "Password is required";
        valid = false;
    }
    else if(password.length < 6){
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        valid = false;
    }

    if(!valid){
        event.preventDefault();
    }
});