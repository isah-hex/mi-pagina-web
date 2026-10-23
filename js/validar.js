const formulario = document.getElementById("formulario");

function mostrarError(id, mensaje) {
  document.getElementById("error-" + id).textContent = mensaje;
  const campo = document.getElementById(id);
  if (campo) {
    campo.classList.toggle("invalido", mensaje !== "");
  }
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();          
  let valido = true;

  const nombre = document.getElementById("nombre").value.trim();
  if (nombre.length < 3) {
    mostrarError("nombre", "Escribe tu nombre completo (mínimo 3 letras).");
    valido = false;
  } else { mostrarError("nombre", ""); }

  const correo = document.getElementById("correo").value.trim();
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!patronCorreo.test(correo)) {
    mostrarError("correo", "Escribe un correo válido, por ejemplo: nombre@correo.com");
    valido = false;
  } else { mostrarError("correo", ""); }

  const edad = Number(document.getElementById("edad").value);
  if (!edad || edad < 10 || edad > 99) {
    mostrarError("edad", "La edad debe estar entre 10 y 99.");
    valido = false;
  } else { mostrarError("edad", ""); }

  const tema = document.getElementById("tema").value;
  if (tema === "") {
    mostrarError("tema", "Selecciona un tema.");
    valido = false;
  } else { mostrarError("tema", ""); }

  const medio = document.querySelector('input[name="medio"]:checked');
  if (!medio) {
    document.getElementById("error-medio").textContent = "Elige una opción.";
    valido = false;
  } else { document.getElementById("error-medio").textContent = ""; }

  const mensaje = document.getElementById("mensaje").value.trim();
  if (mensaje.length < 10) {
    mostrarError("mensaje", "El mensaje debe tener al menos 10 caracteres.");
    valido = false;
  } else { mostrarError("mensaje", ""); }

  if (!document.getElementById("acepto").checked) {
    document.getElementById("error-acepto").textContent = "Debes aceptar para continuar.";
    valido = false;
  } else { document.getElementById("error-acepto").textContent = ""; }

  const resultado = document.getElementById("resultado");
  if (valido) {
    resultado.textContent = "¡Formulario enviado correctamente!";
    formulario.reset();
  } else {
    resultado.textContent = "";
  }
});
