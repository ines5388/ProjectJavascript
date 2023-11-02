/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excusa").innerHTML = laExcusa();
  document.querySelector("#boton").addEventListener("click", function() {
    document.querySelector("#excusa").innerHTML = laExcusa();
  });
};

let laExcusa = () => {
  let tipoDePasta = ["Gnoquis", "Sorrentinos", "Canelones"];
  let tipoDeSalsa = [
    "bolognesa",
    "carbonara",
    "rosa",
    "de crema y champignon",
    "mixta"
  ];
  let quien = ["mi mamá", "mi abuela", "mi hermano", "mi sobrina"];
  let tipoDePastaIndice = Math.floor(Math.random() * tipoDePasta.length);
  let tipoDeSalsaIndice = Math.floor(Math.random() * tipoDeSalsa.length);
  let quienIndice = Math.floor(Math.random() * quien.length);

  return (
    tipoDePasta[tipoDePastaIndice] +
    " con salsa " +
    tipoDeSalsa[tipoDeSalsaIndice] +
    " hecha por " +
    quien[quienIndice]
  );
};
