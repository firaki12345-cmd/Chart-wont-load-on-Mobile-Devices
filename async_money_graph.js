var surfing_user = document.getElementById("user_surfing").getAttribute("value")
let username;
let spinner;

if (surfing_user !== "AnonymousUser") {

    username = document.getElementsByClassName("profile_username")[0].textContent
    spinner = document.getElementsByClassName("spinner")[0]

if (document.getElementById('earnings-button') !== null){

const money_graphSocket = new WebSocket(
    'ws://' + '0.0.0.0:8000' +
    '/ws/money_earned/'
  );

money_graphSocket.onopen = function(e) {
    console.log("money_graph WebSocket connection established!");

const earningsButton = document.getElementById('earnings-button');


const chartWrapper = document.getElementById('chart-wrapper');

let ctx = document.getElementById("myChart").getContext("2d");

let chartData = {
  labels: [],
  datasets: [
    {
      label: `${username}'s Earnings`,
      backgroundColor: "#79AEC8",
      borderColor: "#417690",
      data: []
    }
  ]
};

let chartOptions = {
  responsive: true,
  title: {
    text: "Gross Volume in 2020",
    display: true
  }
};

let chart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: chartOptions
});


earningsButton.addEventListener('click', function() {

    spinner.style.display = "block"

    if (earningsButton.textContent !== "Hide Earnings") {

    money_graphSocket.send(JSON.stringify({
        "message": "get_earnings_report",
        }));
    
    money_graphSocket.onmessage = function(e) {
        var data = JSON.parse(e.data)

        spinner.style.display = "None"
        // Update the chart data and options with the fetched data.
        chartData.labels = data.message.labels;
        chartData.datasets[0].data = data.message.data;
        chart.update();

        chartWrapper.style.display = 'flex';
        earningsButton.textContent = "Hide Earnings"
    
    }
  
  } else {
    chartWrapper.style.display = '';
    earningsButton.textContent = "Your Earnings"
    spinner.style.display = "None"
  
  }
  
  });


}

}
}