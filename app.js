// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    console.log(valueInDollar)
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInEuro = valueInYen * 0.8;
    // retornamos el valor
    return valueInEuro;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// tenemos que incluir la funcion en el exports 
//para que sea exportada a otros archivos como test.js
module.exports = { sum, fromDollarToYen,fromEuroToDollar,fromYenToPound }
