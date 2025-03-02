document
    .getElementById("btn-update-text")
    .addEventListener("click", function () {
        // console.log("hey");
        const pageTitleElement = document.getElementById("page-title");
        console.log(pageTitleElement);
        pageTitleElement.innerText = "Updated page title text";
    });

document
    .getElementById("btn-login")
    .addEventListener("click", function () {
        const userInfoEl = document.getElementById("user-info");
        // console.log(userInfoEl);
        userInfoEl.innerText = "user logged in successfully";
    });