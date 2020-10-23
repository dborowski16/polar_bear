function panel(id) {
    d3.json("static/bears.json").then(sampleData => {
          
      var metaData = sampleData.metadata;
      console.log(metaData);
  
      // Filter the data by selected sample id
      var filtSamp = metaData.filter(sample => sample.id.toString() === id)[0];
      console.log(filtSamp);
  
      // Select the panel in the html
      var panelData = d3.select('#sample-metadata');
  
      // Clear the panel upon selection
      panelData.html("");
  
      // Add panel entries
      Object.entries(filtSamp).forEach(function([key, value]) {
          panelData.append("h4").text(`${key}: ${value}`);
      });
    });
  }
  
  function init() {
  
  var select = d3.select('#selBear');
  
      // populate the drop down selector with the sample id names
      d3.json("static/bears.json").then(data => {
          data.bears.forEach(name => {
              select.append("option").text(name).property("value");
          });
  
          // Call the panel functions with the data from the first sample id
          panel(data.bears[0]);
          // createMap(data.bears[0]);
  
          var id = data.bears[0]
          console.log(id)
  
    });
  };
    
  d3.select('#selBear').on('change', updatePlotly);
  
  // Create a function to update the panel
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selBear");
    // Assign the value of the dropdown menu option to a variable
    var id = dropdownMenu.property("value");
    console.log(id)
    // Call panel functions with selection
    panel(id);
  };
  
  init();
