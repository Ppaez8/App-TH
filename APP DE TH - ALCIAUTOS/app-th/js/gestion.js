function buscarDocumentos() {
    const cedula = document.getElementById("cedula").value.trim();
    const lista = document.getElementById("listaDocumentos");
    lista.innerHTML = "";
  
    if (!cedula) {
      alert("Por favor ingresa un número de cédula.");
      return;
    }
  
    const archivos = JSON.parse(localStorage.getItem(cedula)) || [];
  
    if (archivos.length === 0) {
      lista.innerHTML = "<li>No se encontraron documentos.</li>";
    } else {
      archivos.forEach((archivo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${archivo.nombre}</span>
          <a href="${archivo.url}" target="_blank">Ver</a>
        `;
        lista.appendChild(li);
      });
    }
  }
  
  function guardarDocumento() {
    const cedula = document.getElementById("cedula").value.trim();
    const archivoInput = document.getElementById("archivoInput");
    const archivo = archivoInput.files[0];
  
    if (!cedula || !archivo) {
      alert("Debes ingresar la cédula y seleccionar un archivo.");
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function () {
      const base64 = reader.result;
      const documento = {
        nombre: archivo.name,
        url: base64,
      };
  
      const existentes = JSON.parse(localStorage.getItem(cedula)) || [];
      existentes.push(documento);
      localStorage.setItem(cedula, JSON.stringify(existentes));
      alert("Documento guardado correctamente.");
      buscarDocumentos(); // Refresca la lista
      archivoInput.value = "";
    };
  
    reader.readAsDataURL(archivo);
  }
  