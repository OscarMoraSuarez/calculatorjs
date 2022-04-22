class Automovil{

    static porObjeto({marca,referencia,modelo}){

        return new Automovil(marca,referencia,modelo);

    }
    
    constructor(marca,referencia,modelo){

        if(!marca) throw Error('se requiere la marca del automovil');
        this.marca=marca;
        this.referencia=referencia;
        this.modelo=modelo;

    }
    set setMarca(marca){

        this.marca=marca.toUpperCase();

    }

    get getMarca(){

        return this.marca;

    }

    getInfo(){

        console.warn(`info:${this.marca},${this.referencia},${this.modelo}`);

    }

}

const bmw={
    marca:setMarca='bmw',
    referencia:'bmw1500',
    modelo:'2022'
}
const autoObjeto=Automovil.porObjeto(bmw);
console.log(autoObjeto.getMarca);

autoObjeto.getInfo();


const dodge = new Automovil('Dodge','S500','1999');
dodge.setMarca='Dodge';
console.log(dodge.getMarca);
dodge.getInfo();
