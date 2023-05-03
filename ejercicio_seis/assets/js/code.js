// ejercicio 5
function calcularMatricula() {
    let promedio = document.getElementById("promedio").value;
    let matricula;
  
    if (promedio < 3) {
      matricula = 1000000;
    } else if (promedio >= 3 && promedio <= 4) {
      matricula = 1000000 * 0.95;
    } else if (promedio > 4) {
      matricula = 1000000 * 0.5;
    }
  
    document.getElementById("resultado").innerHTML = `El valor de su matrícula es $${matricula}.`;
  }