const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Supplier A', 'Supplier B', 'Supplier C'],
    datasets: [{
      label: 'Quality Score',
      data: [92, 85, 78],
      backgroundColor: ['green', 'orange', 'blue']
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
