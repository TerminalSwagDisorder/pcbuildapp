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
