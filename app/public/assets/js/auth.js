document.addEventListener("DOMContentLoaded", () => {
  const entradaUsername = document.getElementById("entradaUsername");
  const entradaPassword = document.getElementById("entradaPassword");
  const botonIniciarSesion = document.querySelector('button[type="submit"]');

  // Función para mostrar mensajes de error (puedes personalizar esto)
  const mostrarError = (elemento, mensaje) => {
    let errorDiv = elemento.nextElementSibling;
    if (!errorDiv || !errorDiv.classList.contains("error-message")) {
      errorDiv = document.createElement("div");
      errorDiv.classList.add(
        "error-message",
        "text-red-500",
        "text-sm",
        "pl-2",
        "pt-1"
      );
      elemento.parentNode.insertBefore(errorDiv, elemento.nextSibling);
    }
    errorDiv.textContent = mensaje;
    elemento.classList.add("border-red-500"); // Resaltar el borde del input en rojo
  };

  // Función para limpiar mensajes de error
  const limpiarError = (elemento) => {
    let errorDiv = elemento.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains("error-message")) {
      errorDiv.remove();
    }
    elemento.classList.remove("border-red-500"); // Quitar el borde rojo
  };

  // Función asíncrona para manejar el inicio de sesión
  const iniciarSesion = async (e) => {
    e.preventDefault(); // Prevenir el envío del formulario por defecto
    const username = entradaUsername.value.trim();
    const password = entradaPassword.value.trim();

    // Limpiar errores previos
    limpiarError(entradaUsername);
    limpiarError(entradaPassword);

    // Validaciones básicas
    let isValid = true;
    if (username === "") {
      mostrarError(entradaUsername, "El nombre de usuario es obligatorio.");
      isValid = false;
    }
    if (password === "") {
      mostrarError(entradaPassword, "La contraseña es obligatoria.");
      isValid = false;
    }

    if (!isValid) {
      return; // Detener la ejecución si hay errores de validación
    }

    // Si las validaciones pasan, intentar el fetch
    try {
      const payload = {
        action: "login", // <-- ¡Añade esto!
        username: username,
        password: password,
      };

      // Cambia la URL a la ruta de tu controlador
      const response = await fetch("/controllers/authController.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // <-- ¡Importante!
        },
        body: JSON.stringify(payload), // <-- Convierte el objeto a JSON
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Inicio de sesión exitoso:", data);
        alert("¡Bienvenido al sistema!");
      } else {
        console.error("Error de autenticación:", data);
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error en la petición de inicio de sesión:", error);
      alert("Hubo un problema al conectar con el servidor.");
    }
  };

  const cerrarSesion = async () => {
    try {
      const payload = {
        action: "logout", // <-- ¡Añade esto!
      };

      const response = await fetch("/controllers/authController.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        // Redirigir al usuario a la página de inicio
        window.location.href = "/";
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert("Hubo un problema al intentar cerrar la sesión.");
    }
  };

  // Añadir el event listener al botón de iniciar sesión
  botonIniciarSesion.addEventListener("click", iniciarSesion);
});
