Meteor.call('geoJsonForIp', '192.168.42.100', function(err,res){ 
    console.log(err);
    console.log(res);

});




/*
Template.homesida.helpers({
//open datasette with this [ 13:14:30 | benjaminlinux | ~/github/pcbuildapp/pcbuildapp $ datasette --cors pcbuildapp.db ]

fetch('http://localhost:8001/pcbuildapp-1170c5b/memory.json')  
.then(
function(response){
return response.json()
})
.then(function(data){
obj.table.push(data);
//console.log(data) //change to something that shows on site
}
)
var fs = require('fs');
fs.writeFile('myjsonfile.json', json, 'utf8', callback);
});
*/
