let url4 = "http://127.0.0.1:5000/api/v1.0/museum_data";

d3.json(url4).then(function(data){

    function createMarkers(museumData) {
        let markers = [];
        for (let i = 0; i < museumData.length; i++) {
          markers.push(
            L.marker([museumData[i].latitude, museumData[i].longitude])
              .bindPopup("<h1>" + museumData[i]['museum name'] + "</h1>")
          );
        }
        return L.layerGroup(markers);
      }

  let ABGN_js = data.filter(entry => entry['museum type'] === "ARBORETUM, BOTANICAL GARDEN, OR NATURE CENTER");
  let AM_js = data.filter(entry => entry['museum type'] === "ART MUSEUM");
  let CM_js = data.filter(entry => entry['museum type'] === "CHILDREN'S MUSEUM");
  let GM_js = data.filter(entry => entry['museum type'] === "GENERAL MUSEUM")
  let HP_js = data.filter(entry => entry['museum type'] === "HISTORIC PRESERVATION")
  let HM_js = data.filter(entry => entry['museum type'] === "HISTORY MUSEUM")
  let NHM_js = data.filter(entry => entry['museum type'] === "NATURAL HISTORY MUSEUM")
  let STMP_js = data.filter(entry => entry['museum type'] === "SCIENCE & TECHNOLOGY MUSEUM OR PLANETARIUM")
  let ZAWC_js = data.filter(entry => entry['museum type'] === "ZOO, AQUARIUM, OR WILDLIFE CONSERVATION")

  let plot3_js = {
    ABGN: createMarkers(ABGN_js),
    AM: createMarkers(AM_js),
    CM: createMarkers(CM_js),
    GM: createMarkers(GM_js),
    HP: createMarkers(HP_js),
    HM: createMarkers(HM_js),
    NHM: createMarkers(NHM_js),
    STMP: createMarkers(STMP_js),
    ZAWC: createMarkers(ZAWC_js),
  };

  // Define variables for our tile layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

  // Only one base layer can be shown at a time.
  let baseMaps = {
    Street: street,
    Topography: topo
  };

  // Overlays that can be toggled on or off
  let overlayMaps = {
    ABGN: plot3_js.ABGN,
    AM: plot3_js.AM,
    CM: plot3_js.CM,
    GM:plot3_js.GM,
    HP:plot3_js.HP,
    HM:plot3_js.HM,
    NHM:plot3_js.NHM,
    STMP:plot3_js.STMP,
    ZAWC:plot3_js.ZAWC
  };

  // Create a map object, and set the default layers.
  let map3 = L.map("map3", {
    center: [46.2276, 2.2137],
    zoom: 6,
    layers: [street, plot3_js.ABGN] // Set initial layers
  });

  // Pass our map layers into our layer control.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps).addTo(map3);

});