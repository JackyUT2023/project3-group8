let url = "http://127.0.0.1:5000/api/v1.0/museum_data";

d3.json(url).then(function(data){
  let sortedByIncome = data.sort((a,b) =>b.income - a.income);
  // console.log(sortedByIncome)
  let slicedData = sortedByIncome.slice(0, 10);
  slicedData.reverse();

  console.log(slicedData)

  let trace1 = {
    x: slicedData.map(object => object.income),
    y: slicedData.map(object => object['Museum Name']),
    text: slicedData.map(object => object['Museum Name']),
    name: "Greek",
    type: "bar",
    orientation: "h"
  };

  let data = [trace1];

  let layout = {
    title: "Income",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot3", data, layout);
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

// // Trace1 for the Greek Data
// let trace31 = {
//   x: Museums3,
//   y: ReviewCounts3,
//   name: "ReviewCounts",
//   type: "bar"
// };

// // Trace 2 for the Roman Data
// let trace32 = {
//   x: Museums3,
//   y: RatingKK(Rating3),
//   name: "Rating",
//   type: "bar"
// };

// // Create data array
// let data3 = [trace31, trace32];

// // Apply a title to the layout
// let layout3 = {
//   title: "ReviewCounts and Rating results",
//   barmode: "group",
//   // Include margins in the layout so the x-tick labels display correctly
//   margin: {
//     l: 50,
//     r: 50,
//     b: 200,
//     t: 50,
//     pad: 4
//   }
// };

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot3", data3, layout3);