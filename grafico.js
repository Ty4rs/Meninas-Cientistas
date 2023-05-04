const canvas = document.querySelector('#graphic1');
const ctx = canvas.getContext('2d');

// Defina os dados do gráfico
const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [{
    label: '',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#E7E9ED"],
    tension: 0.1,
    borderColor: 'green',
    pointStyle: null
  }]
};

// Crie o gráfico de linha
var chart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
          label: '',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'transparent',

          borderWidth: 2,
          pointBackgroundColor: 'blue',
          pointRadius: 3,
          pointHoverRadius: 5,
          pointStyle: null
      },
      {
        label: '',
        data: [20, 0, 13, 15, 20,9],
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBackgroundColor: 'red',
        pointRadius: 3,
        pointHoverRadius: 5,
        pointStyle: null
    }]
      
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        labels: {
            display: null
        }
    }
}
});

const canvas2 = document.querySelector('#graphic2');
const ctx2 = canvas2.getContext('2d');
const data2 = {
  
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Vendas',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#E7E9ED"],
      tension: 0.1
    }]
  };
  
  // Crie o gráfico de linha
  const myChart2 = new Chart(ctx2, {

    type: 'line',
    data: data2,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const canvas3 = document.querySelector('#graphic3');
const ctx3 = canvas3.getContext('2d');
const data3 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Vendas',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }]
  };
  
  // Crie o gráfico de linha
  const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: data3,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const canvas4 = document.querySelector('#graphic4');
const ctx4 = canvas4.getContext('2d');
const data4 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Vendas',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }]
  };
  
  // Crie o gráfico de linha
  const myChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: data4,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });