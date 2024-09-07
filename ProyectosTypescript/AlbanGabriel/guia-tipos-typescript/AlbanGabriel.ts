interface testArray {
    modelos: number[],
    caracteristicasArray: Array<string[]>
};

interface caracteristicasEspeciales {
    velocidad: number,
    suspension: boolean,
    agregarSuspension: () => void
};

interface tipoVehiculo {
    tipo: string,
    marca: string,
    modelo: string,
    cilindraje: number,
    numPuertas: number,
    arrancarVehiculo: () => void,
    cEspeciales: caracteristicasEspeciales[]
};

const miVehiculo: tipoVehiculo = {
    tipo: "Turismo C",
    marca: "Volkswagen",
    modelo: "Golf GTI",
    cilindraje: 2000,
    numPuertas: 4,
    arrancarVehiculo: () => {
        console.log(`El vehículo arrancó con un motor de ${miVehiculo.cilindraje} cc`);
    },
    cEspeciales: [{
        velocidad: 90,
        suspension: true,
        agregarSuspension: () => {}
    }]
}; 

const miSegundoVehiculo: caracteristicasEspeciales = {
    velocidad: 400,
    suspension: false,
    agregarSuspension: () => {
        if (!miSegundoVehiculo.suspension){
            console.log("Tu vehículo no tiene suspensión");    
        }

        else{
            console.log("Tu vehículo tiene suspensión");
        }
    }
};

const miTercerVehiculo: testArray = {
    modelos: [1975, 2010, 2011, 2025, 2036],
    caracteristicasArray: [
        ["Azul", "Verde"],
        ["Rin 15", "Rin 17"],
        ["2 puertas", "4 puertas"]
    ]
};

console.log(miVehiculo);
miVehiculo.arrancarVehiculo();
miSegundoVehiculo.agregarSuspension();
console.log(miSegundoVehiculo);
console.log(miTercerVehiculo);
console.log(miTercerVehiculo.caracteristicasArray[0][0]);
console.log(miTercerVehiculo.caracteristicasArray[2][1]);

miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[1]);
})

//////////////////////////////////////////

let index: number;

// Azul, Rin 15, 2 puertas

index = 0;

miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]);
})


// Verde, Rin 17, 4 puertas

index = 1;

miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]);
})
