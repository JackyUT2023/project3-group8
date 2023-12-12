function CreateMap(locationLayer1, locationLayer2, locationLayer3) {
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    let baseMaps = {
        Street: street,
    };

    let map_logic2 = L.map("map2", {
        center: [37.8, -96],
        zoom: 4,
        layers: [street]
    });

    // Create separate heat layers for each rating category with a solid color
    let heatLayer1 = L.heatLayer([], { radius: 30, gradient: { 1.0: 'blue' }, maxZoom: 10, blur: 0, max: 4.0 }).addTo(map_logic2);
    let heatLayer2 = L.heatLayer([], { radius: 30, gradient: { 0.5: 'purple' }, maxZoom: 10, blur: 0, max: 4.0 }).addTo(map_logic2);
    let heatLayer3 = L.heatLayer([], { radius: 30, gradient: { 0.0: 'red' }, maxZoom: 10, blur: 0, max: 4.0 }).addTo(map_logic2);

    let overlayMaps = {
        '5 Star Rating': heatLayer1,
        '4.5 Star Rating': heatLayer2,
        '4 Star Rating': heatLayer3,
    };

    // Create an array to store city markers
    let cityMarkers = [];
    let cityLayer = L.layerGroup(cityMarkers).addTo(map_logic2);
    overlayMaps['Major Cities'] = cityLayer;

    let tiles_logic2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map_logic2);

    let major_cities_url = "http://127.0.0.1:5000/api/v1.0/major_cities";

    d3.json(major_cities_url).then(function (cities) {
        cities.forEach(function (city) {
            let cityMarker = L.marker([city.latitude, city.longitude]).addTo(cityLayer);
            cityMarkers.push(cityMarker);
        });

        // Create the layer control including the Major Cities layer
        L.control.layers(baseMaps, overlayMaps, {
            collapsed: false
        }).addTo(map_logic2);
    });

    let tripadvisor_data_url = "http://127.0.0.1:5000/api/v1.0/tripadvisor_data";

    d3.json(tripadvisor_data_url).then(function (response) {
        console.log(response);
        let heatmapData1 = [];
        let heatmapData2 = [];
        let heatmapData3 = [];

        for (let i = 0; i < response.length; i++) {
            let latitude = response[i].latitude;
            let longitude = response[i].longitude;
            let rating = response[i].rating;

            let latlng = L.latLng(latitude, longitude);

            if (rating === 5) {
                heatmapData1.push(latlng);
            } else if (rating === 4.5) {
                heatmapData2.push(latlng);
            } else if (rating === 4) {
                heatmapData3.push(latlng);
            }
        }

        // Set the data for each heat layer
        heatLayer1.setLatLngs(heatmapData1);
        heatLayer2.setLatLngs(heatmapData2);
        heatLayer3.setLatLngs(heatmapData3);
    });
}

let locationLayer1 = L.layerGroup();
let locationLayer2 = L.layerGroup();
let locationLayer3 = L.layerGroup();
CreateMap(locationLayer1, locationLayer2, locationLayer3);