// analisis.js

document.addEventListener("DOMContentLoaded", () => {
    const empresaSelect = document.getElementById("empresa");
    const sedeSelect = document.getElementById("sede");
    const cargoSelect = document.getElementById("cargo");
  
    const ctxContratos = document.getElementById("contratacionesPorMes").getContext("2d");
    const ctxDesvinculaciones = document.getElementById("desvinculacionesPorMes").getContext("2d");
  
    // Simulación de datos mensuales (enero a diciembre)
    const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  
    // Datos de ejemplo por defecto (puedes conectar a tu base real luego)
    const datosSimulados = {
      contratos: [5, 8, 6, 9, 12, 10, 7, 6, 8, 5, 4, 3],
      desvinculaciones: [2, 4, 3, 5, 3, 4, 2, 3, 1, 2, 1, 2]
    };
  
    const contratosChart = new Chart(ctxContratos, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Contrataciones",
            backgroundColor: "#2563eb",
            borderColor: "#1e40af",
            data: datosSimulados.contratos
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: "Contrataciones por Mes" }
        }
      }
    });
  
    const desvinculacionesChart = new Chart(ctxDesvinculaciones, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Desvinculaciones",
            borderColor: "#ef4444",
            backgroundColor: "#fca5a5",
            data: datosSimulados.desvinculaciones,
            fill: false,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: "Desvinculaciones por Mes" }
        }
      }
    });
  
    // Aquí más adelante puedes usar filtros para cambiar los datos si conectas una base
  });
  