class Persona{

    static instance;

    constructor(nombre,apellido,edad){

        if(!!Persona.instance){

            return Persona.instance

        }
        Persona.instance=this;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    getInfo(){

        console.log(`Hola soy un songleton  ${this.nombre}`)

    }
}

let tony=new Persona('Tony','Stark','41');
let spiderman=new Persona('Peter','Parker','19');
console.log(tony);
console.log(spiderman);



