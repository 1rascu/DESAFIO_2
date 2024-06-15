let input1,input2,input3;


input1 = document.querySelector("#input1");
input2 = document.querySelector("#input2");
input3 = document.querySelector("#input3");
const boton1 = document.querySelector("#boton1");
const resultado = document.querySelector("#resultado");

input1.addEventListener("input1", () => {
    if (input1.value.lenght > 1){
        input1.value = input1.value.slice(0,1);
    }
});

num2.addEventListener("input2", () => {
    if (input2.value.lenght > 1){
        input2.value = input2.value.slice(0,1);
    }
});

num3.addEventListener("input3", () => {
    if (input3.value.lenght > 1){
        input3.value = input3.value.slice(0,1);
    }
});

boton1.addEventListener("click", () => {
    const bool1 = parseInt(input1.value);
    const bool2 = parseInt(input2.value);
    const bool3 = parseInt(input3.value);
    const bool4 = bool1 + bool2 +bool3;
    input1.ClassList.remove("danger");
    input2.ClassList.remove("danger");
    input3.ClassList.remove("danger");

    if (bool1 && bool2 && bool3 === 0){
        resultado.textContent = " deves seleccionar almenos 1 sticker";

    }else {
        resultado.textContent = " error solo"
    }

});