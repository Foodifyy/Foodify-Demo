"use strict";

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
function end() {
  var url_ref = database.ref().child('name');
  url_ref.on('value', function (snapshot) {
    var endpoint = snapshot.val();
    // console.log("Endpoint recieved:", endpoint)
  });
}

end();