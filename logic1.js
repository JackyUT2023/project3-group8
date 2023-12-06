// Create the base layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
  
let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
  
// Create layer group.
let PublicMuseumsArray=[];
let PublicMuseums = L.layerGroup(PublicMuseumsArray);

let PrivateMuseumsArray=[];
let PrivateMuseums = L.layerGroup(PrivateMuseumsArray);

// Create a baseMaps object.
let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
};
  
// Create an overlay object.
let overlayMaps = {
    "Public Museums": PublicMuseums,
    "Private Museums": PrivateMuseums
};
  
// Define a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4,
    layers: [street, PublicMuseums]
});
  
// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

  