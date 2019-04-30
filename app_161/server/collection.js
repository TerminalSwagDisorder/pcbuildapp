/*
cases = new Mongo.Collection("cases");

if (cases.find().count() === 0) {
  console.log("Importing cases.json to db")

  var data = JSON.parse(Assets.getText("json/cases.json"));

  data.forEach(function (item, index, array) {
    item.id = index;
    cases.insert(item);
  })
}
//console.log("collection " + cases.findOne( {name: "NZXT Manta"} ));
console.log("collection " + cases.find().count());
*/
