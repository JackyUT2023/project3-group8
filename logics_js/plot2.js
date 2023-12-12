url3 = 'http://127.0.0.1:5000//api/v1.0/tripadvisor_data'

d3.json(url3).then(function(response){
  console.log(response)
  let plot2_js = [];
  for (i=0;i<response.length;i++){
    plot2_js.push ({MuseumName:response[i]['museum name'],ReviewCount:parseInt(response[i]['review count'])})
  }
  console.log(plot2_js)

  let sortedByReviewCount = plot2_js.sort((a, b) => b.ReviewCount - a.ReviewCount);
    let slicedData_ReviewCount = sortedByReviewCount.slice(0, 10);
    // slicedData_ReviewCount.reverse();

    function init() {
    let trace1 = {
      x: slicedData_ReviewCount.map(object => object.MuseumName),
      y: slicedData_ReviewCount.map(object => object.ReviewCount),
      name: "ReviewCount",
      type: "bar",
    };

    let data = [trace1];

    let layout = {
      title: "Review Count (Top 10)",
      width: 800,
      xaxis:{title:"Number of ReviewCount"},
    };
    Plotly.newPlot("plot2", data, layout);
  }
// --------------------------------------------------------------------------------------------
  let plot2_js_RatingName = [0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]
  let plot2_js_Rating = [];
  for (i=0;i<response.length;i++){
    plot2_js_Rating.push (response[i]['rating'])
  }
  let ratingGroup1 = 0, ratingGroup2 = 0, ratingGroup3 = 0, ratingGroup4 = 0,ratingGroup5 = 0, ratingGroup6 = 0,ratingGroup7 = 0, ratingGroup8 = 0,ratingGroup9 = 0, ratingGroup10 = 0;
  for (i=0;i<plot2_js_Rating.length;i++){
    if (plot2_js_Rating[i]===plot2_js_RatingName[0]){ratingGroup1++;}
    else if(plot2_js_Rating[i]===plot2_js_RatingName[1]){ratingGroup2++;}
    else if(plot2_js_Rating[i]===plot2_js_RatingName[2]){ratingGroup3++;}
    else if(plot2_js_Rating[i]===plot2_js_RatingName[3]){ratingGroup4++;}
    else if(plot2_js_Rating[i]===plot2_js_RatingName[4]){ratingGroup5++;}
    else if(plot2_js_Rating[i]===plot2_js_RatingName[5]){ratingGroup6++;}
    else if(plot2_js_Rating[i]===plot2_js_RatingName[6]){ratingGroup7++;}
    else if(plot2_js_Rating[i]===plot2_js_RatingName[7]){ratingGroup8++;}
    else if(plot2_js_Rating[i]===plot2_js_RatingName[8]){ratingGroup9++;}
    else if(plot2_js_Rating[i]===plot2_js_RatingName[9]){ratingGroup10++;}
  }
  let ratingGroup=[ratingGroup1, ratingGroup2, ratingGroup3, ratingGroup4,ratingGroup5, ratingGroup6,ratingGroup7, ratingGroup8,ratingGroup9, ratingGroup10]
  let plot2_js_2 = []
  for (i=0;i<plot2_js_RatingName.length;i++){
    plot2_js_2.push ({Rating:plot2_js_RatingName[i],MuseumCount:ratingGroup[i]})
  }

  // console.log(plot2_js_2)
// --------------------------------------------------------------------------------------------
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
})