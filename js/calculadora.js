const teclaSigno=document.querySelectorAll('#signo');
const teclasNumero=document.querySelectorAll('#numero');
const display=document.querySelector('.display');
const display2=document.querySelector('.display2');
const raiz=document.querySelector('#raiz');
const elevar=document.querySelector('#elevar');
const reset=document.querySelector('#reset');
const borrar=document.querySelector('#borrar');
const igual=document.querySelector('#igual');
const signos=[];
const numeros=[];
const decimal='.';
const memoria=[
    {
        operacion:'',
        resultado:''

    }    
];
const botones=document.querySelectorAll('.boton');
const expresionInicio='0';
let parametro;
let habilitarPunto=true;
let habilitarSigno=false;

let expresion='';
/* console.log('Los signos son',signos); */

//? rellenar arreglo de signos 
for(let i=0;i<teclasNumero.length;i++){

    const numero=teclasNumero[i].innerHTML;
    numeros.push(numero)  

}

//? rellenar el arreglo de numeros 
for (let i = 0; i < teclaSigno.length; i++) {

    const signo = teclaSigno[i].innerHTML;
    signos.push(signo)
}

//? capturar caracteres
for(let i=0;i<botones.length;i++){

    botones[i].addEventListener('click',()=>{

     const caracter=botones[i].innerHTML;
     agregarCaracter(caracter);


    })

}

//?  Funcion para agregar caracteres a a la expresion 
const agregarCaracter=(caracter)=>{

   let parametro=(signos.includes(caracter))?'signo': 
    (numeros.includes(caracter))?'numero':
    (caracter=='.')?'decimal':'accion';

    switch (parametro) {
        case 'signo':
           
                escribirSigno(caracter);    
                
            
            break;
        case 'numero':
            
                escribirNumero(caracter);
                
           break;
        case 'decimal':
            
                escribirDecimal(caracter);
                
            break;                                                                            
        
        default:
            
            break;
    }

}

//?funciones

// funcion para resetear
const resetear = () => {

    expresion = '';
    display.innerHTML = '0';
    display2.innerHTML='0';
    habilitarSigno = false;


}


const escribirSigno=(caracter)=>{
    
    if(habilitarSigno==true){

        expresion += caracter;
        escribirTablero(expresion);
        habilitarSigno=false;
        habilitarPunto=true;
    }
}

  

const escribirNumero = (caracter) => {

    habilitarSigno=true;
    expresion += caracter;
    escribirTablero(expresion);


}

const escribirDecimal = (caracter) => {
   

     if (habilitarPunto == true) {
        expresion += caracter;
        escribirTablero(expresion);
        habilitarPunto = false;
    } 


}

const borrarUltimo=()=>{
    
        expresion = expresion.substring(0, expresion.length - 1);
        console.log('la longitud es',expresion.length);
        escribirTablero(expresion);
        if(expresion.length=='0'){
            resetear();
        } 
        habilitarSigno=true;
    
}

const hacerOperacion=()=>{

    if(expresion!==''){
           
        const depurarOperacion=(expresion)=>{

            expresion = expresion = (isNaN(expresion[expresion.length - 1])) ?
            expresion.substring(0, expresion.length - 1) :
            expresion;
            return expresion       

        }
        let operacion=expresion;
        operacion = depurarOperacion(operacion);
        display2.innerHTML=operacion;     
        expresion =depurarOperacion(expresion); 
        expresion=eval(expresion);
        if(expresion=='0'){
            expresion='';
            display.innerHTML=expresionInicio;
        }
        display.innerHTML=expresion;
        expresion = display.innerHTML;
        
    }
    
    habilitarPunto = true;

}
const raizCuadrada=()=>{

    expresion=(expresion=='')?'0':expresion;
    expresion=eval(expresion);
    console.log(typeof(expresion));
    display2.innerHTML =`√${expresion}`;    
    expresion=Math.sqrt(expresion);
     escribirTablero(expresion);  
     console.log('Hola Mundo');
    
}
const elevarPotencia=()=>{



}
const escribirTablero=(expresion)=>{
    
    display.innerHTML = expresion;

}

//? eventos
borrar.addEventListener('click',borrarUltimo);
reset.addEventListener('click', resetear);
igual.addEventListener('click',hacerOperacion)
raiz.addEventListener('click',raizCuadrada)

const operar='3+3^2-8;';
operar.replace('^','**');
/* resultado=eval(operar); */
console.log(operar);

/* const potenciación=(evaluar)=>{
     evaluar.

    return evaluar
} */

console.log(expresion);




