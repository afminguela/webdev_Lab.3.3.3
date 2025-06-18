// 1- ENTRADA DISCOTECA

// A la entrada a una discoteca, se pregunta al cliente qué edad tiene. Darle una respuesta diferente si la edad es mayor, menor o igual a 18 años.

function portero(age) {
  
    if (age < 18){
        return "a casa a dormir"
    } else if (age === 18){
        return "a ver ese DNI"
    }else
    return "puedes pasar"
};

console.log(portero(17));
console.log(portero(18));
console.log(portero(19));

// 2 - CINCO COLORES

// Se le pide al usuario que escoja un color (azul, verde, rojo, amarillo y violeta) y darle una respuesta en relación al color elegido. Ejemplo: "el azul es como el mar, siempre que el cielo sea azul (y sea de día)". Dar otra respuesta en el caso que NO elija ninguno de los colores anteriores.
function colorCompare(colorin){

    if(typeof colorin !== "string") {
    return "eso no es ni un color" // comprueba el tipo de dato
}
    let color = colorin.toLowerCase()


if (color === "azul"){
    return "el azul es como el mar, siempre que el cielo sea azul (y sea de día)"
} else if (color === "rojo"){
    return "rojo que te cojo"
}else if (color === "amarillo"){
    return "Amarillo que te pillo"
}else if (color === "verde"){
    return "verde como el trigo verde, y el verde limón"
}else if (color === "violeta"){
    return "No me salen rimas con violeta la verdad"
}

else{
    return "pa gustos colores, pero ese no era"
}
}

console.log(colorCompare("azul"));
console.log(colorCompare("azUl"));
console.log(colorCompare("Rojo"));
console.log(colorCompare("aMArillO"));
console.log(colorCompare("verde"));
console.log(colorCompare("VioLETA"));
console.log(colorCompare("Naranja"));
console.log(colorCompare("asfdsa"));
console.log(colorCompare(45));


// 3- LAMPARA NO ENCIENDE

// Hacer 2 preguntas prompt (si/no). Se puede anidar dos condicionales (uno dentro de otro). Crear el código con condicionales para el algoritmo representado por el siguiente diagrama de flujo:


let engine = prompt("Está enchufada");
let lightbulb = prompt("El foco está quemado")

function lampara(engine,ligthbulb){
    if (engine){
        return "enchufarla"
    } else{
        
        if (ligthbulb){
            return "Reemplazar foco"
        } return "comprar nueva lampara"
}} 

console.log(lampara())