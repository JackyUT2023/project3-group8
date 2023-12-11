// function CreateMap(locationLayer1,locationLayer2){
//     let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     })
//     // Only one base layer can be shown at a time.
//     let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//         attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//     });
    
//     // Overlays that can be toggled on or off
//     let baseMaps={
//       Street:street,
//       Topgraphy:topo
//     };
    
//     let overlayMaps={
//       'Rating5':locationLayer1,
//       'Rating4':locationLayer2
//     };
    
//     // Create a map object, and set the default layers.
//     let map_logic2 = L.map("map2", {
//       center: [37.8, -96],
//       zoom: 4,
//       layers: [street, locationLayer1]
//     });
    
//     // Pass our map layers into our layer control.
//     // Add the layer control to the map.
//     L.control.layers(baseMaps, overlayMaps,{
//         collapsed:false
//     }).addTo(map_logic2)
// };


// CreateMap(locationLayer1,locationLayer2);

// // -----------------------------------------------------------------------
// // let map_logic2 = L.map('map2').setView([37.8, -96], 4);

// // let tiles_logic2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //     maxZoom: 19,
// //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// // }).addTo(map_logic2);


// // Store our API endpoint as tripadvisor_data_url.
// let tripadvisor_data_url = "http://127.0.0.1:5000/api/v1.0/tripadvisor_data";

// d3.json(tripadvisor_data_url).then(function(response){
//     console.log(response);
//     let locations1=[];
//     let locations2=[];

//     for (i=0; i<response.length; i++){
//         if (response[i].rating ===5){
//             locations1.push([response[i].latitude,response[i].longitude])
//             // .bindPopup("<h3>" + response[i]['museum name'] + "</h3> <hr> <h4>" +"Rating:"+response[i].rating + "</h4>")

//             // L.marker([response[i].latitude,response[i].longitude])
//             // .bindPopup("<h3>" + response[i]['museum name'] + "</h3> <hr> <h4>" +"Rating:"+response[i].rating + "</h4>")
//             // .addTo(map_logic2)    
//         };

//         if (response[i].rating ===4){
//             locations2.push([response[i].latitude,response[i].longitude])
//             // .bindPopup("<h3>" + response[i]['museum name'] + "</h3> <hr> <h4>" +"Rating:"+response[i].rating + "</h4>")
//         };

//     };

//     let locationLayer1 = L.layerGroup(locations1)
//     let locationLayer2 = L.layerGroup(locations2)

//     CreateMap(locationLayer1,locationLayer2)
// });
