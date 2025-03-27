function inicioSimulador() {
    let ingresoMensual = parseFloat(prompt("Ingresa tu ingreso mensual:"));

    if (isNaN(ingresoMensual) || ingresoMensual <= 0) {
        alert("Por favor, ingresa un valor válido.");
        return;
    }

    let gastos = [];
    let continuar = true;

    function agregarGasto() {
        while (continuar) {
            let nombreGasto = prompt("Ingresa el nombre del gasto (o escribe 'salir' para finalizar):");
            
            if (nombreGasto.toLowerCase() === "salir") {
                continuar = false;
                break;
            }

            let montoGasto = parseFloat(prompt(`Ingresa el monto de ${nombreGasto}:`));

            if (!isNaN(montoGasto) && montoGasto > 0) {
                gastos.push({ nombre: nombreGasto, monto: montoGasto });
            } else {
                alert("Monto inválido. Inténtalo de nuevo.");
            }
        }
    }

    function calcularSaldo() {
        let totalGastos = gastos.reduce((total, gasto) => total + gasto.monto, 0);
        let saldoFinal = ingresoMensual - totalGastos;

        console.log("Resumen del presupuesto:");
        console.log(`Ingreso mensual: $${ingresoMensual}`);
        console.log("Gastos:");
        gastos.forEach(gasto => console.log(`${gasto.nombre}: $${gasto.monto}`));
        console.log(`Total de gastos: $${totalGastos}`);
        console.log(`Saldo restante: $${saldoFinal}`);

        alert(`Tu saldo final es: $${saldoFinal} si quieres ver tu lista teclea f12 y opcion consola`);
    }

    agregarGasto();
    calcularSaldo();
}
