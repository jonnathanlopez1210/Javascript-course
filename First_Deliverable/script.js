
document.getElementById("calcular").addEventListener("click", function() {
    const ingreso = parseFloat(document.getElementById("ingreso").value);
    const gastos = parseFloat(document.getElementById("gastos").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(ingreso) || isNaN(gastos)) {
        resultado.textContent = "Por favor, completa ambos campos.";
        resultado.style.color = "red";
    } else { 
        const balance = ingreso - gastos;
        if (balance > 0) {
            resultado.textContent = `¡Buen trabajo! Te sobran $${balance} este mes.`;
            resultado.style.color = "green";
        } else if (balance < 0) {
            resultado.textContent = `Te falta dinero $${Math.abs(balance)}.`;
            resultado.style.color = "#fe5f55";
        } else {
            resultado.textContent = "Has equilibrado tus ingresos y gastos exactamente.";
            resultado.style.color = "#FFC845";
        }
    }
});
