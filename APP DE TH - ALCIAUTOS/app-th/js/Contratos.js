document.addEventListener("DOMContentLoaded", function () {
    const tipoContrato = document.getElementById('tipoContrato');
    const fechaIngreso = document.getElementById('fechaIngreso');
    const duracionMeses = document.getElementById('duracionMeses');
    const campoDuracion = document.getElementById('campoDuracion');
    const mensajeFechaFin = document.getElementById('mensajeFechaFin');
  
    function actualizarDuracionVisible() {
      const tipo = tipoContrato.value;
      if (tipo === 'fijo' || tipo === 'prestacion') {
        campoDuracion.classList.remove('hidden');
      } else {
        campoDuracion.classList.add('hidden');
        mensajeFechaFin.style.display = 'none';
      }
    }
  
    function calcularFechaFinalizacion() {
      const fecha = new Date(fechaIngreso.value);
      const meses = parseInt(duracionMeses.value);
  
      if (!isNaN(fecha) && !isNaN(meses)) {
        const fechaFinal = new Date(fecha);
        fechaFinal.setMonth(fechaFinal.getMonth() + meses);
        const fechaTexto = fechaFinal.toLocaleDateString('es-CO', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        mensajeFechaFin.innerText = `Este contrato finalizaría el ${fechaTexto}`;
        mensajeFechaFin.style.display = 'block';
      } else {
        mensajeFechaFin.style.display = 'none';
      }
    }
  
    if (tipoContrato && fechaIngreso && duracionMeses) {
      tipoContrato.addEventListener('change', () => {
        actualizarDuracionVisible();
        calcularFechaFinalizacion();
      });
  
      fechaIngreso.addEventListener('change', calcularFechaFinalizacion);
      duracionMeses.addEventListener('input', calcularFechaFinalizacion);
    }
  
    actualizarDuracionVisible();
  });
  