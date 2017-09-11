            if ($('#custom-chart').length ){



              var ctx = document.getElementById("custom-chart");
              var mybarChart = new Chart(ctx, {
                type: 'horizontalBar',
                data: {
                  labels: chart_data.label,
                  datasets: [{
                    label: '# of Votes',
                    backgroundColor: "#26B99A",
                    data: chart_data.value
                  }]
                },

                options: {
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }
              });

            }
