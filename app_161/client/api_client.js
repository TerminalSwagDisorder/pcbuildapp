Meteor.call('cpu', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log(res);
}
});
/*
Meteor.call('cpu', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log("loaded cpu data")
    let datadiv = document.getElementById("mydata")
    
    datadiv.innerHTML = JSON.stringify(res)    
    console.log(res);
}

});
*/
Meteor.call('cpu-cooler', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log(res);
}

});
/*
Meteor.call('fan', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log(res);
}

});
Meteor.call('gpu', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log(res);
}

});
Meteor.call('memory', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log(res);
}

});
Meteor.call('motherboard', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log(res);
}
});
Meteor.call('psu', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log(res);
}

});
Meteor.call('storage', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log(res);
}
});
Meteor.call('wired', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log(res);
}
});
Meteor.call('wireless', function(err,res){ 
    if (err) {  
  console.log(err); 
} else {
    console.log(res);
}

});

*/
