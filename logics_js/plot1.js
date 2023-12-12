url='http://127.0.0.1:5000/api/v1.0/museum_data'
url2='http://127.0.0.1:5000/api/v1.0/major_cities'

//----------------<get the Top 10 Cities Name based on Population>----------------
let Top10Cities = []
d3.json(url2).then(function(data){
// console.log(data)
let populationSortedByCities = data.sort((a, b) => b.population - a.population);
let slicedData_MajorCities = populationSortedByCities.slice(0, 10);
for (i=0; i<slicedData_MajorCities.length; i++){
  Top10Cities.push(slicedData_MajorCities[i].city)
};

    d3.json(url).then(function(response){
      // console.log(response)
      let NumOfMuseums = []
      for (i=0; i<response.length; i++){
          NumOfMuseums.push(response[i]['state'])
      }

      let AKLen=0,ALLen=0,ARLen=0,AZLen=0,CALen=0,COLen=0,CTLen=0,DCLen=0,DELen=0,FLLen=0,GALen=0,HILen=0,IALen=0,IDLen=0,ILLen=0,INLen=0,KSLen=0,KYLen=0,LALen=0,MALen=0,MDLen=0,
      MELen=0,MILen=0,MNLen=0,MOLen=0,MSLen=0,MTLen=0,NCLen=0,NDLen=0,NELen=0,NHLen=0,NJLen=0,NMLen=0,NVLen=0,NYLen=0,OHLen=0,OKLen=0,ORLen=0,PALen=0,RILen=0,SCLen=0,SDLen=0,TNLen=0,
      TXLen=0,UTLen=0,VALen=0,VTLen=0,WALen=0,WILen=0,WVLen=0,WYLen=0;

      for (let i = 0; i < NumOfMuseums.length; i++) {
          if (NumOfMuseums[i]==="AK") {AKLen++;} 
          else if (NumOfMuseums[i]==="AL"){ALLen++;}
          else if (NumOfMuseums[i]==="AR"){ARLen++;} 
          else if (NumOfMuseums[i]==="AZ"){AZLen++;} 
          else if (NumOfMuseums[i]==="CA"){CALen++;} 
          else if (NumOfMuseums[i]==="CO"){COLen++;} 
          else if (NumOfMuseums[i]==="CT"){CTLen++;} 
          else if (NumOfMuseums[i]==="DC"){DCLen++;} 
          else if (NumOfMuseums[i]==="DE"){DELen++;} 
          else if (NumOfMuseums[i]==="FL"){FLLen++;} 
          else if (NumOfMuseums[i]==="GA"){GALen++;} 
          else if (NumOfMuseums[i]==="HI"){HILen++;} 
          else if (NumOfMuseums[i]==="IA"){IALen++;}
          else if (NumOfMuseums[i]==="ID"){IDLen++;} 
          else if (NumOfMuseums[i]==="IL"){ILLen++;} 
          else if (NumOfMuseums[i]==="IN"){INLen++;} 
          else if (NumOfMuseums[i]==="KS"){KSLen++;} 
          else if (NumOfMuseums[i]==="KY"){KYLen++;} 
          else if (NumOfMuseums[i]==="LA"){LALen++;} 
          else if (NumOfMuseums[i]==="MA"){MALen++;} 
          else if (NumOfMuseums[i]==="MD"){MDLen++;} 
          else if (NumOfMuseums[i]==="ME"){MELen++;} 
          else if (NumOfMuseums[i]==="MI"){MILen++;} 
          else if (NumOfMuseums[i]==="MN"){MNLen++;} 
          else if (NumOfMuseums[i]==="MO"){MOLen++;} 
          else if (NumOfMuseums[i]==="MS"){MSLen++;} 
          else if (NumOfMuseums[i]==="MT"){MTLen++;} 
          else if (NumOfMuseums[i]==="NC"){NCLen++;} 
          else if (NumOfMuseums[i]==="ND"){NDLen++;} 
          else if (NumOfMuseums[i]==="NE"){NELen++;} 
          else if (NumOfMuseums[i]==="NH"){NHLen++;} 
          else if (NumOfMuseums[i]==="NJ"){NJLen++;} 
          else if (NumOfMuseums[i]==="NM"){NMLen++;} 
          else if (NumOfMuseums[i]==="NV"){NVLen++;} 
          else if (NumOfMuseums[i]==="NY"){NYLen++;} 
          else if (NumOfMuseums[i]==="OH"){OHLen++;} 
          else if (NumOfMuseums[i]==="OK"){OKLen++;}
          else if (NumOfMuseums[i]==="OR"){ORLen++;} 
          else if (NumOfMuseums[i]==="PA"){PALen++;} 
          else if (NumOfMuseums[i]==="RI"){RILen++;} 
          else if (NumOfMuseums[i]==="SC"){SCLen++;} 
          else if (NumOfMuseums[i]==="SD"){SDLen++;} 
          else if (NumOfMuseums[i]==="TN"){TNLen++;}
          else if (NumOfMuseums[i]==="TX"){TXLen++;} 
          else if (NumOfMuseums[i]==="UT"){UTLen++;} 
          else if (NumOfMuseums[i]==="VA"){VALen++;} 
          else if (NumOfMuseums[i]==="VT"){VTLen++;} 
          else if (NumOfMuseums[i]==="WA"){WALen++;}
          else if (NumOfMuseums[i]==="WI"){WILen++;} 
          else if (NumOfMuseums[i]==="WV"){WVLen++;}
          else if (NumOfMuseums[i]==="WY"){WYLen++;}
      }
    //----------------------------------------------------<building states data json start>----------------------------------------------------
      let Museum_js = [
        {state:"AK",NumOfMuseums:AKLen},
        {state:"AL",NumOfMuseums:ALLen},
        {state:"AR",NumOfMuseums:ARLen},
        {state:"AZ",NumOfMuseums:AZLen}, 
        {state:"CA",NumOfMuseums:CALen}, 
        {state:"CO",NumOfMuseums:COLen}, 
        {state:"CT",NumOfMuseums:CTLen}, 
        {state:"DC",NumOfMuseums:DCLen}, 
        {state:"DE",NumOfMuseums:DELen}, 
        {state:"FL",NumOfMuseums:FLLen}, 
        {state:"GA",NumOfMuseums:GALen}, 
        {state:"HI",NumOfMuseums:HILen}, 
        {state:"IA",NumOfMuseums:IALen},
        {state:"ID",NumOfMuseums:IDLen}, 
        {state:"IL",NumOfMuseums:ILLen}, 
        {state:"IN",NumOfMuseums:INLen}, 
        {state:"KS",NumOfMuseums:KSLen}, 
        {state:"KY",NumOfMuseums:KYLen}, 
        {state:"LA",NumOfMuseums:LALen}, 
        {state:"MA",NumOfMuseums:MALen}, 
        {state:"MD",NumOfMuseums:MDLen}, 
        {state:"ME",NumOfMuseums:MELen}, 
        {state:"MI",NumOfMuseums:MILen}, 
        {state:"MN",NumOfMuseums:MNLen}, 
        {state:"MO",NumOfMuseums:MOLen}, 
        {state:"MS",NumOfMuseums:MSLen}, 
        {state:"MT",NumOfMuseums:MTLen}, 
        {state:"NC",NumOfMuseums:NCLen}, 
        {state:"ND",NumOfMuseums:NDLen}, 
        {state:"NE",NumOfMuseums:NELen}, 
        {state:"NH",NumOfMuseums:NHLen}, 
        {state:"NJ",NumOfMuseums:NJLen}, 
        {state:"NM",NumOfMuseums:NMLen}, 
        {state:"NV",NumOfMuseums:NVLen}, 
        {state:"NY",NumOfMuseums:NYLen}, 
        {state:"OH",NumOfMuseums:OHLen},
        {state:"OK",NumOfMuseums:OKLen},
        {state:"OR",NumOfMuseums:ORLen}, 
        {state:"PA",NumOfMuseums:PALen}, 
        {state:"RI",NumOfMuseums:RILen}, 
        {state:"SC",NumOfMuseums:SCLen}, 
        {state:"SD",NumOfMuseums:SDLen}, 
        {state:"TN",NumOfMuseums:TNLen},
        {state:"TX",NumOfMuseums:TXLen}, 
        {state:"UT",NumOfMuseums:UTLen}, 
        {state:"VA",NumOfMuseums:VALen}, 
        {state:"VT",NumOfMuseums:VTLen}, 
        {state:"WA",NumOfMuseums:WALen},
        {state:"WI",NumOfMuseums:WILen}, 
        {state:"WV",NumOfMuseums:WVLen},
        {state:"WY",NumOfMuseums:WYLen}
      ];
    //----------------------------------------------------<building states data json end>----------------------------------------------------
    // console.log(Museum_js)
    //----------------------------------------------------<Sorting and Slicing start>----------------------------------------------------
    let sortedByStates = Museum_js.sort((a, b) => b.NumOfMuseums - a.NumOfMuseums);
    let slicedData_States = sortedByStates.slice(0, 10);
    slicedData_States.reverse();

    function init() {
    let trace1 = {
      x: slicedData_States.map(object => object.NumOfMuseums),
      y: slicedData_States.map(object => object.state),
      name: "States",
      type: "bar",
      orientation: "h"
    };

    let data = [trace1];

    let layout = {
      title: "Number of Museums (Top 10)",
      width: 800,
      xaxis:{title:"Number of Museums"},
    };
    Plotly.newPlot("plot1", data, layout);
  }
    //----------------------------------------------------<Sorting and Slicing end>----------------------------------------------------



    //----------------<get the museum counts in Top 10 Cities>----------------
    let NumOfMuseums_City=[]
    for (i=0; i<response.length; i++){
    NumOfMuseums_City.push(response[i]['city'])
    }

    let MuseumCounts1=0,MuseumCounts2=0,MuseumCounts3=0,MuseumCounts4=0,MuseumCounts5=0,MuseumCounts6=0,MuseumCounts7=0,MuseumCounts8=0,MuseumCounts9=0,MuseumCounts10=0
    for (let i = 0; i < NumOfMuseums_City.length; i++) {
    let city = NumOfMuseums_City[i].toLowerCase();
    if (city === Top10Cities[0].toLowerCase()) { MuseumCounts1++; }
    else if (city === Top10Cities[1].toLowerCase()) { MuseumCounts2++; }
    else if (city === Top10Cities[2].toLowerCase()) { MuseumCounts3++; }
    else if (city === Top10Cities[3].toLowerCase()) { MuseumCounts4++; }
    else if (city === Top10Cities[4].toLowerCase()) { MuseumCounts5++; }
    else if (city === Top10Cities[5].toLowerCase()) { MuseumCounts6++; }
    else if (city === Top10Cities[6].toLowerCase()) { MuseumCounts7++; }
    else if (city === Top10Cities[7].toLowerCase()) { MuseumCounts8++; }
    else if (city === Top10Cities[8].toLowerCase()) { MuseumCounts9++; }
    else if (city === Top10Cities[9].toLowerCase()) { MuseumCounts10++; }
    }
  //----------------<Combine and make a json>----------------
  let Top10Cities_js =[
  {CityName:Top10Cities[0],MuseumCount:MuseumCounts1},
  {CityName:Top10Cities[1],MuseumCount:MuseumCounts2},
  {CityName:Top10Cities[2],MuseumCount:MuseumCounts3},
  {CityName:Top10Cities[3],MuseumCount:MuseumCounts4},
  {CityName:Top10Cities[4],MuseumCount:MuseumCounts5},
  {CityName:Top10Cities[5],MuseumCount:MuseumCounts6},
  {CityName:Top10Cities[6],MuseumCount:MuseumCounts7},
  {CityName:Top10Cities[7],MuseumCount:MuseumCounts8},
  {CityName:Top10Cities[8],MuseumCount:MuseumCounts9},
  {CityName:Top10Cities[9],MuseumCount:MuseumCounts10},  
  ];

  let sortedByCities = Top10Cities_js.sort((a, b) => b.MuseumCount - a.MuseumCount);
  sortedByCities.reverse();

  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#MuseumData").on("change", updatePlotly);
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#MuseumData");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    let x = [];
    let y = [];

    if (dataset === 'States') {
      x = slicedData_States.map(entry => entry.state);
      y = slicedData_States.map(entry => entry.NumOfMuseums);
      layout = {
        title: "Number of Museums (Top 10)",
        width: 800,
        yaxis: {title: 'Number of Museums'},
      };
    }
  
    else if (dataset === 'MajorCity') {
      x = sortedByCities.map(entry => entry.CityName);
      y = sortedByCities.map(entry => entry.MuseumCount);
      layout = {
        title: "Number of Museums (Top 10)",
        width: 800,
        yaxis: {title: 'Number of Museums'},
      };
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot1", "y", [x]);
    Plotly.restyle("plot1", "x", [y]);
    Plotly.restyle("plot1", "layout", [layout]);
  }
  init();
  });
});