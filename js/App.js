function initialize() {
  // Getting User's location to center the map at its own co-ords
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  function showPosition(position) {
    document.getElementById("Lat").value = position.coords.latitude;
    document.getElementById("Long").value = position.coords.longitude;
    showmap();
  }
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
    }
  }

  // Showmap Function shows a map according to lattitude and longitude according to the input fields of html
  //And Changes the Lat and long according to user drag
  function showmap() {
    var latitude = document.getElementById("Lat").value;
    var longitude = document.getElementById("Long").value;
    var latlng = new google.maps.LatLng(latitude, longitude);
    // Set map options
    var myOptions = {
      zoom: 16,
      center: latlng,
      panControl: true,
      zoomControl: true,
      scaleControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    // Create map object with options
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    // Create and set the marker
    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      position: latlng,
    });

    // Register Custom "dragend" Event
    google.maps.event.addListener(marker, "dragend", function () {
      // Get the Current position, where the pointer was dropped
      var point = marker.getPosition();
      // Center the map at given point
      map.panTo(point);
      // Update the textbox
      document.getElementById("Lat").value = point.lat();
      document.getElementById("Long").value = point.lng();
    });
  }
  showmap();
}

// Pin Me Button
function changeName() {
  let name = document.querySelector(".place-name").value;

  name = name.slice(0, 20);

  document.querySelector(".company-name").innerText = name;

  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}
