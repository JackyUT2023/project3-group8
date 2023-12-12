let url4 = "http://127.0.0.1:5000/api/v1.0/museum_data";

d3.json(url4).then(function(data){
  let ABGN_js = data.filter(entry => entry['museum type'] === "ARBORETUM, BOTANICAL GARDEN, OR NATURE CENTER");
  let AM_js = data.filter(entry => entry['museum type'] === "ART MUSEUM")
  let CM_js = data.filter(entry => entry['museum type'] === "CHILDREN'S MUSEUM")
  let GM_js = data.filter(entry => entry['museum type'] === "GENERAL MUSEUM")
  let HP_js = data.filter(entry => entry['museum type'] === "HISTORIC PRESERVATION")
  let HM_js = data.filter(entry => entry['museum type'] === "HISTORY MUSEUM")
  let NHM_js = data.filter(entry => entry['museum type'] === "NATURAL HISTORY MUSEUM")
  let STMP_js = data.filter(entry => entry['museum type'] === "SCIENCE & TECHNOLOGY MUSEUM OR PLANETARIUM")
  let ZAWC_js = data.filter(entry => entry['museum type'] === "ZOO, AQUARIUM, OR WILDLIFE CONSERVATION")
  let plot3_js = [ABGN_js,AM_js,CM_js,GM_js,HP_js,HM_js,NHM_js,STMP_js,ZAWC_js]
console.log(plot3_js)


function init() {
  // Trace1 for the Greek Data
let trace1 = {
  x: ABGN_js,
  y: ReviewCounts3,
  name: "ReviewCounts",
  type: "bar"
};

// Trace 2 for the Roman Data
let trace32 = {
  x: Museums3,
  y: RatingKK(Rating3),
  name: "Rating",
  type: "bar"
};

// Create data array
let data3 = [trace31, trace32];

// Apply a title to the layout
let layout3 = {
  title: "ReviewCounts and Rating results",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot3", data3, layout3);
}


    // Call updatePlotly() when a change takes place to the DOM
    d3.selectAll("#ReviewData").on("change", updatePlotly);
    // This function is called when a dropdown menu item is selected
    function updatePlotly() {
      // Use D3 to select the dropdown menu
      let dropdownMenu = d3.select("#ReviewData");
      // Assign the value of the dropdown menu option to a variable
      let dataset = dropdownMenu.property("value");
    
      // Initialize x and y arrays
      let x = [];
      let y = [];
  
      if (dataset === 'Review Count') {
        x = slicedData_ReviewCount.map(object => object.MuseumName);
        y = slicedData_ReviewCount.map(object => object.ReviewCount);
      }
    
      else if (dataset === 'Rating') {
        x = plot2_js_2.map(entry => entry.Rating);
        y = plot2_js_2.map(entry => entry.MuseumCount);
      }
    
      // Note the extra brackets around 'x' and 'y'
      Plotly.restyle("plot2", "x", [x]);
      Plotly.restyle("plot2", "y", [y]);
    }





init()

});






// // Initialized arrays
// let Museums3 = ['The National 9/11 Memorial & Museum',
// 'The Metropolitan Museum of Art',
// 'The National WWII Museum',
// 'Art Institute of Chicago',
// 'USS Midway Museum',
// 'Smithsonian National Air and Space Museum',
// 'Chihuly Garden and Glass',
// 'American Museum of Natural History',
// 'The Museum of Modern Art (MoMA)',
// 'The Getty Center',
// ];
// let ReviewCounts3 = [48437,
//     36627,
//     15611,
//     15532,
//     15105,
//     14492,
//     14080,
//     13992,
//     10591,
//     9418,
//     ];
// let Rating3= [4.5,
//     5,
//     5,
//     5,
//     4.5,
//     4.5,
//     5,
//     4.5,
//     4.5,
//     5,
//     ];

// function RatingKK(Rating3){
//     return Rating3 *1000;
// };

