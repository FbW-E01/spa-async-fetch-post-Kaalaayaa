// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

console.log("hi");
const form = document.querySelector("#submit-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
        name : name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.value
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .then(result => {
            console.log(result);
            return alert("Form submitted " + result.id)
        })
})

 const user = {
        name : name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.value
    };

form.addEventListener("submit", (e) => {
    e.preventDefault();

     const user = {
        name : name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.value
    };

    getUsers(user);
    return alert("Form submitted ")

});

const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(user)
        });
    } catch (error) {
        console.log(error);
        return alert("An error as occured")
    }
}

