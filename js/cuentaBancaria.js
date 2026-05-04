require("colors");

let saldoActual = 10;
let dineroPorTransferir = 20;
let cuentaExterna = 0;

const transferencia=(saldoActual,dineroPorTransferir,cuentaExterna)=>{
    return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log(`El saldo actual es ${saldoActual} el dinero por tranferir ${dineroPorTransferir}`)
        saldoActual=-dineroPorTransferir;
        cuentaExterna=dineroPorTransferir;
        console.log(`Se a enviado ${cuentaExterna} de manera exitosa`);
        console.log("Tranferencia terminada de manera exitosa");
        resolve();
    },10000)
    })
}
const validacion=(saldoActual, dineroPorTransferir,cuentaExterna)=>
    new Promise((resolve,reject)=>{
    setTimeout(()=>{
        saldoActual>dineroPorTransferir?
        resolve(true):
        reject("Dinero insuficiente");
    },5000);
})

validacion(saldoActual,dineroPorTransferir,cuentaExterna).then((respose)=>{
    console.log("Dinero suficiente para realizar la transferencia" .green);
    return transferencia(saldoActual, dineroPorTransferir, cuentaExterna);
}).catch((error)=>{
    console.error(error .red);
}).finally((end)=>{
    console.log("Finalizado" .cyan)
})
