document.write("Hello world");
let numberOne = 200;
let numberTwo = 100;

let result = numberOne*numberTwo;
console.log(result);
document.write("<br>"+result);

let name = "Jhon";
let lastname = "Ñañez";
console.log(name + ' ' + lastname);
document.write("<br>"+ name + ' ' + lastname);

let comparison = numberOne > numberTwo;
console.log(comparison);
document.write("<br>"+ comparison);

//Condicionales

let pass = "123456";
let passUser= '1234536';

if(pass==passUser){
  console.log("login correcto");
  document.write("<br>"+"login correcto!!!");
}else{
  document.write("<br>"+"login incorrecto!!!");
}

switch (pass){
  case passUser:
    document.write("<br>"+"login correcto con switch!!!");
    break;
  default:
    document.write("<br>"+"Login incorrecto con switch!!!");
}

//Iteradores o bucles
let count = 1;
while (count <= 10){
  document.write("<br>"+"Hello world!!!" + ' '+ count);
  count++;
}

let names = ['Jhon','Daniela', 'Steed', 'Jorge'];
document.write("<br>"+ names + ' se imprime el arreglo completo');

for (let i=0;i<names.length;i++){
  document.write("<br>"+ names[i]);
}




