   
var selection=d3.select("#selBear");

function init() {
    d3.json("static/bears.json").then(data => {
        data.bears.forEach(name => {
        selection.append("option").text(name).property("value");
        });
    });
};

init()



d3.json("static/bears.json").then(function(data){
      
    console.log(data);
    var selection=d3.select("#selBear");
    var inputValue=selection.property('value');
    console.log(inputValue);

    function fillTravel() {
        data.metadata.forEach(entry=> {
            var selection=d3.select("#selBear");
            var inputValue=selection.property('value');
            if (entry.id == inputValue) {
                var name=entry.id;
                var distance=entry.distance;
                var panel=d3.select('.panel-body');
                panel.append("p").text(name).property('value');
                //panel.append('p').text(distance).property('value');
                console.log(name);
            };
        })    
        // var name=data.metadata.filter(name=>name.id==inputValue)[0];
        // var panel=d3.select('.panel-body');
        // panel.append("p").text('inputValue').property('value');
        // console.log(name);
    };

    // function demoFill(inputValue) {
    //     var dems= data.metadata.filter(name=> name.id==inputValue)[0];
    //     var demInfo= d3.select('.panel-body');
    //     demInfo.html('')
    //     for (const [key, value] of Object.entries(dems)) {
    //         demInfo.append('p').text(`${key}: ${value}`);
    //     }
    // };

    selection.on('change', fillTravel());

});
console.log('work');

