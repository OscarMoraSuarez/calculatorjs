class Vehiculo{

    static combustible= 'gasolina';
    static conteo=0;

    static getCombustible=()=>{

        alert(`los vehiculos usan ${this.combustible}`);

    }
    #autonomia;
    constructor(marca='sin valor',referencia='sin valor',modelo='sin valor',color='sin valor',tanque,rendimiento){
        if(!marca) throw Error('necesitamos la marca');
        this.marca=marca;
        this.referencia=referencia;
        this.modelo=modelo;
        this.color=color;
        this.tanque=tanque;
        this.rendimiento=rendimiento;
        this.#autonomia=this.tanque*this.rendimiento;
        Vehiculo.conteo++;
    }

    set setTanque(tanque){

        this.tanque=parseInt(tanque,10);
    }

    set setRendimiento(rendimiento) {

        this.rendimiento = parseInt(rendimiento, 10);
    }

    get getTanque(){

        return this.tanque;
    }
    get getRendimiento(){

        return this.rendimiento;
    }

    devolverDatos(){

        console.log(`auto de marca:${this.marca},referencia:${this.referencia},modelo:${this.modelo}
        color:${this.color},autonomia:`+parseInt(this.#autonomia,10));
        

    }
    

}

const camionetaLuv= new Vehiculo('Chevrolet','Dimax','2022','negro','50','25');
camionetaLuv.setTanque='50';
camionetaLuv.setRendimiento='25'; 

console.log(camionetaLuv.getTanque,camionetaLuv.getRendimiento);
console.log({camionetaLuv});
camionetaLuv.devolverDatos();
/* camionetaLuv.#autonomia=100; */

Vehiculo.getCombustible();
const instancias=Vehiculo.conteo;
console.log(instancias);


