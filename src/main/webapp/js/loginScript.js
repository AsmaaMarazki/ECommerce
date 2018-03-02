function loginHandler() {

    console.log("Here");
    var email = document.getElementById("email-modal");
    var password = document.getElementById("password-modal");
    var errorLabel = document.getElementById("errorMsg");
    var loginButton = document.getElementById("loginBtn");
    console.log(email.value);
    console.log(password.value);
    var postObject = {"email":email.value , "pass":password.value};
    loginButton.disabled = true;
    $.post("/Login" , postObject , function (data) {

        if(data === "success")
            window.location.replace("customer-account.jsp");
        else
        {
            errorLabel.innerHTML = "Email or Password Invalid";
        }
        loginButton.disabled = false;

    });

    return false;
}