const autos = [
    {marca: "Nissan",modelo:"GTR",precio:1000},
    {marca: "BMW", modelo: "M4", precio:2000},
    {marca: "Pagani",modelo: "Utopia",precio:3000}
]
  

class AtributosAutos{
    constructor(modelo,motor,hp){
   this.modelo = modelo;
    this.motor = motor;
    this.hp = hp;
}
mostrarMotor(){
    return `Modelo: ${this.modelo} Con un motor ${this.motor} Y unos ${this.hp}`
}
}

let nissan = new AtributosAutos("Nissan GTR", "V6 3.8","565HP",)
let bmw = new AtributosAutos ( "BMW M4", "V6 3.0","550HP",)
let pagani = new AtributosAutos ("Pagani Utopia","V12 6.0","886HP")



alert("Bienvenido a AlquileresDeLujo.\n tu sueño en 4 ruedas")
alert("Estos son los vehiculos que tenemos en disponibilidad")

let muestraAutos = autos.map(auto => ` ${auto.marca}  ${auto.modelo} \n`)
alert(muestraAutos.join(" "))




 let caracteristicasMotor = prompt("¿Desea ver las caracteristicas del motor de cada vehiculo? \n si \n no")
if(caracteristicasMotor == "si"){
    alert("Excelente! A continuacion le enseñaremos el modelo,motor y los caballos de fuerza de las unidades!")
}else{
    alert("Recuerda que siempre puede volver a consultar por las caracteristicas del motor!!")
}

if(caracteristicasMotor === "si"){
let mostrarMotor = prompt("Eliga que vehiculo desea ver \n nissan \n m4 \n pagani") 

while(mostrarMotor=== "nissan" && mostrarMotor === "m4" && mostrarMotor !="pagani"){
    alert("Seleccione un numero valido porfavor e intentelo nuevamente");
}
switch(mostrarMotor){
    case "nissan":
        alert(nissan.mostrarMotor())
        break;
        case "m4":
        alert(bmw.mostrarMotor())
            break;
            case "pagani":
            alert(pagani.mostrarMotor())
                break;
                default:
                alert("seleccione una opcion correcta")
} 
}


let seleccion = prompt("¿Esta interesado en adquirir alguno? \n si \n no")
while(seleccion != "si"){
    alert("Gracias por visitarnos!! Recuerde que cada mes actualizamos nuestro catalogo de vehiculos")
window.stop()
i++;
}

 let auto = prompt("Elige el vehiculo \n 1.nissan gtr $1000 \n 2.bmw m4 $2000 \n 3.pagani utopia $3000")

 while(auto != "1" && auto != "2" && auto !="3"){
        alert("Seleccione un numero valido porfavor e intentelo nuevamente");
        window.location.reload()
        i++; 
    }
    let precio = Number;
     
        switch(auto){
         case "1":
         precio = 1000;
        alert("Excelente eleccion del Nissan GTR")
         break;
         case "2" :
         precio = 2000;
           alert("Excelente eleccion del BMW M4")
         break;
            case "3":
         precio =3000;
            alert("Excelente eleccion del Pagani Utopia") 
                break;
        default:
        alert("Seleccione una opcion correcta!!")    
        break;
            
    
    }
    
    let alquiler = [];
    
    let diasAlquiler = parseInt(prompt("¿Cuantos dias desea alquilarlo? \n Recuerde que el precio de cada vehiculo es por dia"))
    
alquiler.push({auto,diasAlquiler,precio})
           
alquiler.forEach(alquilerFinal => {
            console.log(`auto:${alquilerFinal.auto}  dias alquilados:${alquilerFinal.diasAlquiler},
            total a pagar ${alquilerFinal.diasAlquiler * alquilerFinal.precio}`)
       })
