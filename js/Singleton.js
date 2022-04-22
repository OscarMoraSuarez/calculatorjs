class Singleton{

    static instancia;/* es decir esta será la intancia incializada de la clase
    caundo alguien intente crear una nueva intancia regresara este valor 
    seria bueno poder declararla como porpiedad privada, peor por compatiblidad se 
    hara publica el valor por defecto es undefined*/

    nombre='';
    /* El nombre recibira valor si no tengo ninguna instancia */
    constructor(nombre=''){
    // tengo que comprobar si la instancia ya existe

        if (!!Singleton.instancia) {
            
            return Singleton.instancia;

        }

        Singleton.instancia=this;
        this.nombre=nombre;
        // return this;/* retorno una isntancia de la misma clase */
    }
}

const instancia1=new Singleton('Ironman');
// const instancia2=new Singleton('Spiderman');
console.log(`Nombre de la instancia1:${instancia1.nombre}`);
// console.log(`Nombre de la instancia2:${instancia2.nombre}`);