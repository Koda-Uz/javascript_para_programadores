const car = {
  brand: 'Ford',
  getBrand() {
    console.log(this.brand);
  },
};

car.getBrand(); // Ford

const carBrandFunction = car.getBrand;

carBrandFunction(); // undefined

// la función hace referencia a this.brand
// this hace referencia al contexto en el que se ejecuta la función
// al no exixtir una variable brand en el contexto global retorna undefined

carBrandFunction.call(car); // Ford

// con el método call especificamos el contexto de ejecución de la función
// al especificar el contexto car retornará "Ford"
