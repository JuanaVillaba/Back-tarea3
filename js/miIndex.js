const {cuentaBancaria} = require ("./cuentaBancaria");
const {instituto} = require ("./instituto");
const {mercadoRestringido} = require ("./mercadoRestringido");

const orden = async ()=>{
    await cuentaBancaria();
    await instituto();
    await mercadoRestringido();
};
orden();



