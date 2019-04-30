Meteor.methods({
  
  'geoJsonForIp': function (ip) {
      console.log('API code ran');
    // Construct the URL


//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/case.json';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }

});


/* var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/case.json, http://localhost:8001/pcbuildapp-1170c5b/cpu.json, http://localhost:8001/pcbuildapp-1170c5b/cpu-cooler.json, http://localhost:8001/pcbuildapp-1170c5b/fan.json, http://localhost:8001/pcbuildapp-1170c5b/gpu.json, http://localhost:8001/pcbuildapp-1170c5b/memory.json, http://localhost:8001/pcbuildapp-1170c5b/motherboard.json, http://localhost:8001/pcbuildapp-1170c5b/psu.json, http://localhost:8001/pcbuildapp-1170c5b/storage.json, http://localhost:8001/pcbuildapp-1170c5b/wired.json, http://localhost:8001/pcbuildapp-1170c5b/wireless.json'; */

/*
HTTP.call( 'GET', 'http://127.0.0.1:8001/pcbuildapp-1170c5b/case.json?_shape=array', {
  params: {
   // "name": "BitFenix Aurora White"
  }
}, function( error, response) {
  if ( error ) {
    console.log( error );
  } else {
    console.log( response );
  }
});
*/
