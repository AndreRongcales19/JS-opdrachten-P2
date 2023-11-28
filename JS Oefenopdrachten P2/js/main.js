// opdr 1 en 2
let password = prompt("Type your password"); 
while (password !== "123") {
    if (password == "quit") {
        alert("je hebt gequit");
        break;
    }
    alert("Password failed");
    password = prompt("Type it again");
}
if (password !== "quit") {
    alert("Welkom")
}

// opdr 3 
let coldest = 18.3;
let warmest = 0; 
let temperatuur = [3.6 , 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2]
for (let i = 0; i < temperatuur.length; i++) {
    const temp = temperatuur[i];

    if (temp > warmest) {
        warmest = temp;
    }

    if (temp < coldest) {
        coldest = temp;
    }
}
console.log("Temperatuur ", temperatuur);
console.log("Hoogste temperatuur is: ", warmest);
console.log("Coldest temperatuur is: ", coldest);

// opdr 4
const x = [
    {
        temp: 3.6,
        month: "Januari",
    },
    {
        temp: 3.9, 
        month: "februari",
    },
    {
        temp: 6.5, 
        month: "maart",
    },
]; 

const ulList = document.querySelector(".list");
for (let i = 0; i < x.length; i++) {
    const object = x[i];
    ulList.innerHTML += `<li>${object.month}: ${object.temp} graden </li>`
}







