

function LogicaPremio() {
    const edad = parseInt(document.getElementById("edad").value);
    const sexo = document.getElementById("sexo").value;

    let premio = document.getElementById("resultado2");
 
  
      if (edad <= 10) {
        console.log("jugo")
        premio.innerHTML = "Reclame un jugo"
      } else if (edad >= 18) {
        console.log("cerveza")
        premio.innerHTML = "Reclame una cerveza"
      } 
      if (sexo === "M") {
        console.log("pizza hawiana")
        premio.innerHTML = "Usted recibe pizza hawaiana"
      } else if (sexo === "H") {
        console.log("pizza tres carnes")
        premio.innerHTML = "Usted recibe pizza tres carnes"
      }else{
        console.log("Por favor ingrese un código válido")
        premio.innerHTML = "Ingrese la informacion"
      }         
    }