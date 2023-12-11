// let museum_data_url = "http://127.0.0.1:5000/api/v1.0/museum_data";
// let tripadvisor_data_url = "http://127.0.0.1:5000/api/v1.0/tripadvisor_data";
// let major_cities_url = "http://127.0.0.1:5000/api/v1.0/major_cities";

// d3.json(museum_data_url).then(function(data1){
//     console.log(data1)
// });

const map3 = L.map('map3').setView([37.8, -96], 4);

const tiles_logic3 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map3);