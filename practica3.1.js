

// Partiendo de este código validar que la edad correcta sea un número
// entre 1 y 120.

let edad = Number(prompt('Introduzca un valor:'));

if(Number.isNaN(edad)) {
    console.log('No se permiten  letras introduzca valores numericos: ' + edad)
}

else if(edad >120 || edad <1){
    console.log('Esta edad no es valida')
}

else if(edad >=18 && edad<=120) {
    console.log('Es mayor de edad: ' + edad)
} 

else if(edad <18){
    console.log('Es menor de edad: ' + edad)
}


