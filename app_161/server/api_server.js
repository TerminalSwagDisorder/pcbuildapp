Meteor.methods({
  
  'whole_database': function () {
      console.log('Got the whole database');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});


/*
Meteor.methods({
  
  'cpu': function () {
      console.log('cpu ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b.json?sql=select+*+from+cpu+where+name+like+%22%25AMD%25%22%3B%0D%0A';
    // query the API
    // use HTTP.get(apiUrl).content for pure data;
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});

Meteor.methods({
  
  'cpu': function () {
      console.log('Cpu ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/cpu.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});
*/
/*
Meteor.methods({
  
  'cpu-cooler': function () {
      console.log('Cpu-cooler ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/cpu-cooler.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});
*/
/*

Meteor.methods({
  
  'fan': function () {
      console.log('Fan ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/fan.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});

Meteor.methods({
  
  'gpu': function () {
      console.log('Gpu ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/gpu.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});

Meteor.methods({
  
  'memory': function () {
      console.log('Memory ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/memory.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});

Meteor.methods({
  
  'motherboard': function () {
      console.log('Motherboard ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/motherboard.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});

Meteor.methods({
  
  'psu': function () {
      console.log('Psu ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/psu.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});

Meteor.methods({
  
  'storage': function () {
      console.log('Storage ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/storage.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});

Meteor.methods({
  
  'wired': function () {
      console.log('Wired ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/wired.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});

Meteor.methods({
  
  'wireless': function () {
      console.log('Wireless ran');
    // Construct the URL

//get this to get every separate url
    var apiUrl = 'http://localhost:8001/pcbuildapp-1170c5b/wireless.json?_size=max';
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});
*/
