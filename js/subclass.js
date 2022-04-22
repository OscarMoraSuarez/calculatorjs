class Tractomulas extends Vehiculo{

    #ejes
    constructor(marca,referencia,modelo,color,tanque,rendimiento,ejes1,ejes2){
        super(marca,referencia,modelo,color,tanque,rendimiento,)
        this.#ejes=ejes1+ejes2;

    }

    devolverDatos(){
        console.log(this.#ejes);
        super.devolverDatos();
    }

}


const kenworth= new Tractomulas('Kenworth','zr6600','2022','negro',150,20,6,6);

console.log({kenworth});