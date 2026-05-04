require("colors");
const productos=[
    {id : 1,
    nombreProducto : "Mascarilla de pelo",
    precio : 10000,
    stock : 5
    },
    {id : 2,
    nombreProducto : "Shampoo",
    precio : 8000,
    stock : 2
    },
    {id : 3,
    nombreProducto : "Acondicionador",
    precio : 7000,
    stock : 1
    },
    {id : 4,
    nombreProducto : "Jabon",
    precio : 2000,
    stock : 10
    },
    {id : 5,
    nombreProducto : "Esponja",
    precio : 3500,
    stock : 0
    }
];

const realizarVenta=(productos, encontrado)=>{
    return new Promise(resuelve=>{
        setTimeout(()=>{
            productos[encontrado].stock = productos[encontrado].stock-1,
            console.log("Venta realizada" .bgGreen);
            resuelve(encontrado);
            //reject(console.error(error));
        },1000)
    })
}
const validarStock=(productoAbuscar,productos, encontrado)=>{
    return new Promise((resuelve,reject)=>{
        setTimeout(()=>{
            encontrado=-1;
            productos.forEach((element, index) => {
                if(element.nombreProducto===productoAbuscar){
                    encontrado = index;
                }  
            })
            if(encontrado ===-1){
                return reject("Producto no encontrado" .bgRed)
            }
            productos[encontrado].stock>0?
                resuelve(encontrado):
                reject("Stock insuficiente" .bgRed);
            
        },2000)
    })
}
const generarTicket=(productos,encontrado)=>{
    return new Promise(resuelve=>{
        setTimeout(()=>{
            console.log("----------TICKET----------" .magenta);
            console.log("----------CLIENTE---------" .magenta);
            console.log(`PRODUCTO: ${productos[encontrado].nombreProducto}` .cyan);
            console.log(`PRECIO: ${productos[encontrado].precio}` .cyan);
            console.log("----------CLIENTE----------" .magenta);
            console.log("----------TICKET----------" .magenta);
            console.log("");
            console.log("----------TICKET----------" .magenta);
            console.log("----------EMPRESA---------" .magenta);
            console.log(`ID: ${productos[encontrado].id}` .cyan);
            console.log(`PRODUCTO: ${productos[encontrado].nombreProducto}` .cyan);
            console.log(`PRECIO: ${productos[encontrado].precio}` .cyan);
            console.log(`Stock actual: ${productos[encontrado].stock}` .cyan);
            console.log("----------EMPRESA---------" .magenta);
            console.log("----------TICKET----------" .magenta);
            resuelve();
        },4000)
    })
}

//Version promesa cumplida y stock suficiente
let productoAbuscar="Mascarilla de pelo";
//Version promesa cumplida y stock insuficiente
//let productoAbuscar="Esponja";
//Version producto no encontrado
//let productoAbuscar="Toalla";
let encontrado = Number;
validarStock(productoAbuscar,productos, encontrado)
    .then((encontrado)=>{
        return realizarVenta(productos, encontrado)
        .then((encontrado)=>{
            return generarTicket(productos,encontrado)
        });
    }).catch((error)=>{
        console.error(error);
    }).finally((end)=>{
        console.log("Fin de la compra" .cyan)
})
