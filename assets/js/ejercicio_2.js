let input1,input2,input3;
let suma;


input1 = document.querySelector("#input1");
input2 = document.querySelector("#input2");
input3 = document.querySelector("#input3");
const boton1 = document.querySelector("#boton1");
const resultado = document.querySelector("#resultado");


boton1.addEventListener("click", () => {
    const bool1 = Number(input1.value);
    const bool2 = Number(input2.value);
    const bool3 = Number(input3.value);
    console.log(bool1,bool2,bool3)
    suma= bool1+bool2+bool3
    console.log(suma)

    if (suma > 10){
        resultado.textContent = "Estas llevando demaciados stickers solo puedes llevar 10 " + " llevas" + suma + " stickers"
        }else {
          resultado.textContent = "debes ingresar a lo menos 01 sticker" + " llevas" + suma
    }

});

