// CLASE PADRE: Vehiculo
// Define las propiedades y métodos base para todos los vehículos
 
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;   
        this.modelo = modelo; 
        this.año = año;       
        this.encendido = false;  
    }
    encender() {
        if (!this.encendido) {
            this.encendido = true;
            return `${this.marca} ${this.modelo} ha sido encendido.`;
        } else {
            return `${this.marca} ${this.modelo} ya está encendido.`;
        }
    }
    apagar() {
        if (this.encendido) {
            this.encendido = false;
            return `${this.marca} ${this.modelo} ha sido apagado.`;
        } else {
            return `${this.marca} ${this.modelo} ya está apagado.`;
        }
    }
    obtenerInfo() {
        return `Vehículo: ${this.marca} ${this.modelo} (${this.año})`;
    }
}

// CLASE HIJA: Auto
// Hereda de Vehiculo y agrega sus propios atributos y métodos
class Auto extends Vehiculo {
    constructor(marca, modelo, año, numeroPuertas, tipoCombustible) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
        this.tipoCombustible = tipoCombustible;
        this.velocidad = 0; 
    }

    acelerar(aumento) {
        if (this.encendido) {
            this.velocidad += aumento;
            return `${this.marca} ${this.modelo} acelera a ${this.velocidad} km/h.`;
        } else {
            return `Primero debes encender el ${this.marca} ${this.modelo}.`;
        }
    }
    frenar(reduccion) {
        if (this.velocidad > 0) {
            this.velocidad = Math.max(0, this.velocidad - reduccion);
            return `${this.marca} ${this.modelo} reduce la velocidad a ${this.velocidad} km/h.`;
        } else {
            return `${this.marca} ${this.modelo} ya está detenido.`;
        }
    }
    obtenerInfo() {
        const infoBase = super.obtenerInfo();
        return `${infoBase} - Auto ${this.numeroPuertas} puertas (${this.tipoCombustible})`;
    }
}

 
console.log("=== DEMOSTRACIÓN DE LA CLASE AUTO ===\n");
const miAuto = new Auto("Nissan", "Sentra", 2024, 4, "Gasolina");
console.log(miAuto.obtenerInfo());
console.log(miAuto.encender());
console.log(miAuto.acelerar(60));
console.log(miAuto.frenar(20));
console.log(miAuto.apagar());
console.log(`Marca: ${miAuto.marca}`);
console.log(`Año: ${miAuto.año}`);
console.log(`Puertas: ${miAuto.numeroPuertas}`);
console.log(`Tipo de combustible: ${miAuto.tipoCombustible}`);
