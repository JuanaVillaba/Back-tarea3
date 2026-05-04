require("colors");
const transferencia = (saldoActual, dineroPorTransferir, cuentaExterna) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`El saldo actual es ${saldoActual} el dinero por tranferir ${dineroPorTransferir}` .blue)
            saldoActual = -dineroPorTransferir;
            cuentaExterna = dineroPorTransferir;
            console.log(`Se a enviado ${cuentaExterna} de manera exitosa` .blue);
            console.log("Tranferencia terminada de manera exitosa" .blue);
            resolve();
        }, 10000)
    })
}
const validacion = (saldoActual, dineroPorTransferir, cuentaExterna) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            saldoActual > dineroPorTransferir ?
                resolve(true) :
                reject("Dinero insuficiente" .red);
        }, 5000);
})
const cuentaBancaria = () => {
    //Version promesa cumplida con dinero en cuenta
    let saldoActual = 100;
    //Version promesa rechazada por falta de dinero
    //let saldoActual = 10;
    let dineroPorTransferir = 20;
    let cuentaExterna = 0;
    return validacion(saldoActual, dineroPorTransferir, cuentaExterna).then((respose) => {
        console.log("Dinero suficiente para realizar la transferencia".bgGreen);
        return transferencia(saldoActual, dineroPorTransferir, cuentaExterna);
    }).catch((error) => {
        console.error(error.red);
    }).finally((end) => {
        console.log("Finalizado".yellow)
    })
};
module.exports = {cuentaBancaria};