

let nombre = prompt("Ingrese su nombre:");
alert("¡Hola " + nombre + "! Bienvenido al simulador de manicura.");

let dedos = prompt("¿Cuántos dedos desea pintarse? (máximo 10 dedos)");
do {
  dedos = parseInt(dedos);
} while (isNaN(dedos) || dedos < 1 || dedos > 10);

let precio = dedos * 200;
let masDedos = true;

while (masDedos) {
  alert("El precio total de la manicura es $" + precio);
  masDedos = confirm("¿Desea agregar más dedos a pintar?");
  if (masDedos) {
    let nuevosDedos = prompt("¿Cuántos dedos desea agregar? (máximo " + (10 - dedos) + " dedos)");
    do {
        nuevosDedos = parseInt(nuevosDedos);
      } while (isNaN(nuevosDedos) || nuevosDedos < 1 || nuevosDedos > (10 - dedos));
      dedos += nuevosDedos;
      precio = dedos * 200;
    }
  }
  
  alert("El precio total de la manicura es $" + precio);