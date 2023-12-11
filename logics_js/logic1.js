const map = L.map('map').setView([37.8, -96], 4);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// control that shows state info on hover
const info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    const contents = props ? `<b>${props.name}</b><br />${props.density} people / mi<sup>2</sup>` : 'Hover over a state';
    this._div.innerHTML = `<h4>US Population Density</h4>${contents}`;
};

info.addTo(map);


// get color depending on population density value
function getColor(d) {
    return d > 1000 ? '#800026' :
        d > 500  ? '#BD0026' :
        d > 200  ? '#E31A1C' :
        d > 100  ? '#FC4E2A' :
        d > 50   ? '#FD8D3C' :
        d > 20   ? '#FEB24C' :
        d > 10   ? '#FED976' : '#FFEDA0';
}

function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.density)
    };
}

function highlightFeature(e) {
    const layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();

    info.update(layer.feature.properties);
}

/* global statesData */
const geojson = L.geoJson(statesData, {
    style,
    onEachFeature
}).addTo(map);

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');

// Create Legend
const legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    const div = L.DomUtil.create('div', 'info legend');
    const grades = [0, 10, 20, 50, 100, 200, 500, 1000];
    const labels = [];
    let from, to;

    for (let i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(`<i style="background:${getColor(from + 1)}"></i> ${from}${to ? `&ndash;${to}` : '+'}`);
    }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(map);

// ---------------------<test marker start>---------------------------------
let museum_data_url = "http://127.0.0.1:5000/api/v1.0/museum_data";

let markers =[]

d3.json(museum_data_url).then(function(response){
    console.log(response);
    for (i=0; i<response.length; i++){
        markers.push([response[i].latitude,response[i].longitude]) 
    };
    let marker = L.layerGroup(markers)

});

const marker = L.geoJson(statesData, {
    style,
    onEachFeature
}).addTo(map);



// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method.
// let marker = L.marker([45.52, -122.67], {
//     draggable: true,
//     title: "My First Marker"
//   }).addTo(map);
  
//   // Binding a popup to our marker
//   marker.bindPopup("Hello There! I am a museum.");


// ---------------------<test marker end>---------------------------------

// ----------------------------<layer control>-------------------------------------------------

function CreateLayer(marker){
    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create a baseMaps object.
let baseMaps = {
    // "Street Map": tiles,
    // "Topographic Map": topo
};
  
// Create an overlay object.
let overlayMaps = {
    "States": geojson,
    "Test Marker": marker
};

L.control.layers(baseMaps,overlayMaps, {
    collapsed: false
  }).addTo(map);
}



// ---------------------<layer control end>---------------------------------
