

alert ("Bienvenido a nuestra Página!!!");

function hora() {
    var DateString=(new Date()).toString();
    self.status=DateString.substring(0,3+DateString.lastIndexOf(':'))+
    "Cualquier mensaje";
    setTimeout("hora()",200);}
   hora()

    function prompter() {
        var reply = prompt("Buenas ¿cuál es tu nombre?", "")
        alert ( "Es un gusto tenerte aquí " + reply + "!")
        }

const nombres = ['Tom', 'Alex', 'Bob', 'John'];

nombres.push("Pedro");
nombres.unshift("Arturo");
nombres.indexOf('Alex');
      
console.log(nombres);

let objeto ={
    nombre: "Tom",
    sexo: "Hombre",
    edad: "30",
}

console.log(objeto.nombre);

const arrayObjetos = [
    {
    nombre: "Tom",
    edad: "20",
    estado: "true",
    },
    {
        nombre: "Alex",
        edad: "25",
        estado: "true",
    },
    {
        nombre: "Bob",
        edad: "19",
        estado: "true",
    },
    {
        nombre: "John",
        edad: "30",
        estado: "false",
    }
]
// console.log(arrayObjetos[0].nombre);

for (let i of arrayObjetos){
    console.log(i.nombre);
    console.log(i.edad);
}

