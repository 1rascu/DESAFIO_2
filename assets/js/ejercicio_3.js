let num1,num2,num3;
let num4,num5,num6;

const nsecreto1 = 9;
const nsecreto2 = 1;
const nsecreto3 = 1;
const nsecreto4 = 7;
const nsecreto5 = 1;
const nsecreto6 = 4;


num1 = document.querySelector("#num1");
num2 = document.querySelector("#num2");
num3 = document.querySelector("#num3");
const boton1 = document.querySelector("#boton1")
const resultado = document.querySelector("#resultado")

num1.addEventListener("input", () => {
    if (num1.value.lenght > 1){
        num1.value = num1.value.slice(0,1);
    }
});

num2.addEventListener("input", () => {
    if (num2.value.lenght > 1){
        num2.value = num2.value.slice(0,1);
    }
});

num3.addEventListener("input", () => {
    if (num3.value.lenght > 1){
        num3.value = num3.value.slice(0,1);
    }
});

boton1.addEventListener("click", () => {
    const bool1 = parseInt(num1.value) === nsecreto4
    const bool2 = parseInt(num2.value) === nsecreto5;
    const bool3 = parseInt(num3.value) === nsecreto6;
    num1.classList.remove("danger");
    num2.classList.remove("danger");
    num3.classList.remove("danger");

    if (bool1 && bool2 && bool3){
        resultado.textContent = "PASWORD 2 CORRECTO";
    } else {
        resultado.textContent = "ERROR";
        if (!bool1){
            num1.classList.add("danger");
        }
        if (!bool2){
            num2.classList.add("danger");
        }
        if (!bool3){
            num3.classList.add("danger");
        }
       
    } 
});









