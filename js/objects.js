var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log('Auto ${this.modelo} ${this.annio}');
    }
};

miAuto.detalleDelAuto();


//Función constructora

function auto(branding,model,year){
    this.branding = branding;
    this.model = model;
    this.year = year;
}//Enter

var autoNuevo = new auto("Tesla", "Model 3", 2020);
//e. autoNuevo

var autoNuevo2 = new auto("Tesla", "Model x", 2018);
var autoNuevo2 = new auto("Toyota", "Corolla", 2020);
//...