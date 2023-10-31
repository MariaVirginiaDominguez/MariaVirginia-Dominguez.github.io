const valorTicket = 200;

// Definir descuentos según la categoría
const descuentoEstudiante = 0.8;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.15;

// Captura de elementos en variables
const nombre = document.getElementById("name"); // Cambiado a "name"
const apellido = document.getElementById("apellido");
const mail = document.getElementById("mail");
const cantidadTickets = document.getElementById("cantidad");
const categoria = document.getElementById("categoria");
const totalPago = document.getElementById("totalPago"); // Agregado

// Función para calcular el total a pagar
function totalAPagar() {
    if (nombre.value === "") {
        alert("Ingrese su nombre");
        nombre.focus();
        return;
    }

    if (apellido.value === "") {
        alert("Ingrese su apellido");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Ingrese su correo");
        mail.focus();
        return;
    }

    if (cantidadTickets.value === "") {
        alert("Ingrese la cantidad de tickets");
        cantidadTickets.focus();
        return;
    }

    if (categoria.value === "0" || categoria.value === "1" || categoria.value === "2") {
        const cantidad = parseInt(cantidadTickets.value);
        const categoriaSeleccionada = parseInt(categoria.value);

        let totalValorTickets = cantidad * valorTicket;
        let descuento = 0;

        if (categoriaSeleccionada === 0) {
            descuento = descuentoEstudiante;
        } else if (categoriaSeleccionada === 1) {
            descuento = descuentoTrainee;
        } else if (categoriaSeleccionada === 2) {
            descuento = descuentoJunior;
        }

        totalValorTickets = totalValorTickets * (1 - descuento);

        totalPago.textContent = `$${totalValorTickets.toFixed(2)}`; // Muestra el precio con 2 decimales
    } else {
        alert("Seleccione una categoría válida");
    }
}

// Botón "Resumen" para calcular el total a pagar
const btnResumen = document.getElementById("btnResumen");
btnResumen.addEventListener("click", totalAPagar);

// Botón "Borrar" para restablecer el total a pagar
const btnBorrar = document.getElementById("btnBorrar");
btnBorrar.addEventListener("click", () => {
    totalPago.textContent = ""; // Borra el contenido del total a pagar
});

