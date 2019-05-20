/*
//open datasette with this [ 13:14:30 | benjaminlinux | ~/github/pcbuildapp/pcbuildapp $ datasette --cors pcbuildapp.db ]
var obj = {
   table: []
};
var json = JSON.stringify(obj);

fetch("http://localhost:8001/pcbuildapp-1170c5b/memory.json")
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
*/
