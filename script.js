// console.log(suma(1,2))

// function suma(a, b){
//     return a+b
// }

// console.log(suma(1,5))

// const otraFuncion = function(a,b){
//     return a+b
// }

// const multiplicar = function suma (a,b){
//     return (b != 0) ? a + suma(a, b-1) : 0
// }

// console.log(multiplicar(2,5));

// let a = 10
// let b = 50

// function resta(){
//     return a-b
// }

// console.log(resta());

// //function recursiva

// let numero = 0
// while(numero < 10){
//     console.log(numero);
//     numero++
// }

// function contador(numero = 0){
//     if(numero >= 10){
//         return
//     }
//     console.log(numero)
//     contador(numero+1)
// }

// contador()

//funciones anidades
// function media(datos){
//     function sumatoria(serie){
//         let suma = 0
//         serie.forEach(numero => {
//             suma += numero 
//         });
//         return suma
//     }

//     return sumatoria(datos) / datos.length
// }

// const numeros = [5,6,7,8,1,2,]
// console.log(media(numeros))

// function prueba(a){
//     return function(b) {
//         return function(c){
//             return a + b + c
//         }
       
//     }
// }

// console.log(prueba(6)(4)(5))

// function setPersona(){
//     return{
//         setNombre: function(nombre){
//             this.nombre = nombre
//         },
//         getNombre: function(){
//             return this.nombre
//         }
//     }
// }

// const persona1 = setPersona()
// persona1.setNombre("Reina Isabel")
// console.log(persona1.getNombre())

// const suma = (a,b) => {
//     return a + b
// }

// function multiplicar(a,b){
//     return a * b
// }

// function multiplicar(a, ...args){
//     if( a > 0) {
//         args.forEach(item =>{
//             a *= item

//         });
//     }
//     return a
// }

// console.log(multiplicar(2));
// console.log(multiplicar(2,2));
// console.log(multiplicar(2,2,2));
// console.log(multiplicar(2,2,2,3));

// Leer una serie de n datos por formulario o prompt.

// muestra = parseInt(prompt('Cuantos datos deseas ingresar'))

// lista de datos
// const datos = []

// for(let i = 0; i<muestra; i++){
//     numero = parseFloat(prompt(`Ingresa el dato numero ${(i+1)}`))
//     datos.push(numero)
// }

// function media(datos){
//     function sumatoria(serie){
//         let suma = 0
//         serie.forEach(item => {
//             l
//             suma += item
//         });
//     }
//     return sumatoria(datos) / datos.length
// }

// function varianza(datos){
//     function sumatoria(serie){
//         let suma = 0
//         serie.forEach(item => {
//             let resultado = parseFloat(item) - media(serie)
//             suma += Math.pow(resultado, 2)
//         })
//         return suma
//     }
//     return sumatoria(datos) / datos.length
// }
// console.log(media(datos))
// console.log(varianza(datos))


// 1: Leer una serie de n datos por prompt y almacenarlos en un array.
function leerDatos() {
    let datos = [];
    let n = parseInt(prompt("¿Cuántos datos deseas ingresar?"));
    
    for (let i = 0; i < n; i++) {
      let dato = parseFloat(prompt(`Ingresa el dato #${i + 1}`));
      datos.push(dato);
    }
    
    return datos;
  }
  
  // 2: Función para calcular la media de los datos.
  function calcularMedia(datos) {
    let suma = datos.reduce((total, dato) => total + dato, 0);
    return suma / datos.length;
  }
  
  // 3: Función para calcular la varianza.
  function calcularVarianza(datos) {
    let media = calcularMedia(datos);
    let sumaDiferenciasCuadradas = 0;
    
    for (let dato of datos) {
      sumaDiferenciasCuadradas += Math.pow(dato - media, 2);
    }
    
    return sumaDiferenciasCuadradas / datos.length;
  }
  
  //  4: Función para calcular la moda.
  function calcularModa(datos) {
    let contador = {};
    
    for (let dato of datos) {
      contador[dato] = (contador[dato] || 0) + 1;
    }
    
    let moda = [];
    let maxFrecuencia = 0;
    
    for (let dato in contador) {
      if (contador[dato] > maxFrecuencia) {
        moda = [parseFloat(dato)];
        maxFrecuencia = contador[dato];
      } else if (contador[dato] === maxFrecuencia) {
        moda.push(parseFloat(dato));
      }
    }
    
    return moda;
  }
  
  //  5: Función para calcular la mediana.
  function calcularMediana(datos) {
    let datosOrdenados = datos.sort((a, b) => a - b);
    let n = datosOrdenados.length;
    
    if (n % 2 === 0) {
      let medio1 = datosOrdenados[n / 2 - 1];
      let medio2 = datosOrdenados[n / 2];
      return (medio1 + medio2) / 2;
    } else {
      return datosOrdenados[Math.floor(n / 2)];
    }
  }
  
  //  6: Función para calcular la desviación estándar.
  function calcularDesviacionEstandar(datos) {
    let varianza = calcularVarianza(datos);
    return Math.sqrt(varianza);
  }
  
  // Ahora, podemos usar estas funciones para realizar cálculos con los datos ingresados.
  let datos = leerDatos();
  let media = calcularMedia(datos);
  let varianza = calcularVarianza(datos);
  let moda = calcularModa(datos);
  let mediana = calcularMediana(datos);
  let desviacionEstandar = calcularDesviacionEstandar(datos);
  
  console.log("Media:", media);
  console.log("Varianza:", varianza);
    console.log("Desviación Estándar:", desviacionEstandar);
  console.log("Moda:", moda);
  console.log("Mediana:", mediana);
  console.log("Desviación Estándar:", desviacionEstandar);
  