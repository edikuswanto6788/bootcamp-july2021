function clickButton() {
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    console.log(username.value);
    console.log(password.value);
    window.location.replace("index.html");

}