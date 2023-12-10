// Initializes the page with a default plot
function init() {
    data = [{
      x: ['CA',
        'NY',
        'TX',
        'PA',
        'OH',
        'IL',
        'FL',
        'MI',
        'MA',
        'VA',
        ],
      y: [2670,
        2239,
        1886,
        1653,
        1363,
        1310,
        1149,
        1039,
        1028,
        958,
        ],
      type: "bar",
    }];

    layout = {
      title:{text:'Top 10'},
      yaxis: {title: {text: 'Number of Museums'}}
    };
    Plotly.newPlot("plot1", data, layout);
  }
  
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
      // x = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma, Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
      // y = [162,463,317,449,2670,649,544,190,132,1149,668,176,661,214,1310,685,537,466,395,1028,618,521,1039,681,742,247,270,779,269,347,363,756,320,174,2239,1363,547,550,1653,181,391,234,559,1886,170,958,292,721,887,258,192
      // ];

      x=['CA',
      'NY',
      'TX',
      'PA',
      'OH',
      'IL',
      'FL',
      'MI',
      'MA',
      'VA',
      ];
      y= [2670,
        2239,
        1886,
        1653,
        1363,
        1310,
        1149,
        1039,
        1028,
        958,
        ]
    }
  
    else if (dataset === 'MajorCity') {
      x = ['NEW YORK',
        'WASHINGTON',
        'CHICAGO',
        'PHILADELPHIA',
        'LOS ANGELES',
        'PORTLAND',
        'HOUSTON',
        'BALTIMORE',
        'SAN FRANCISCO',
        'SPRINGFIELD',
        ];
      y = [297,
        228,
        194,
        182,
        162,
        141,
        137,
        122,
        119,
        118,
        ];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot1", "x", [x]);
    Plotly.restyle("plot1", "y", [y]);
  }
  
  init();