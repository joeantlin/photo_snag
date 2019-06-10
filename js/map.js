// JavaScript Document



// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
	//map options
	var options = {
		zoom: 16,
		center: {
			lat: -33.8688,
			lng: 151.2195
		}
	};

	//the map
	var map = new google.maps.Map(document.getElementById('map'), options);

	//markers
	addMarker({
		coords:{lat: -33.8688, lng: 151.2195}
	});
	
	
	function addMarker(props){
		var marker = new google.maps.Marker({
			position: props.coords,
			map: map,
			//icon: "" //put icon here
		});
	}

	// Create the search box and link it to the UI element.
	var input = document.getElementById('pac-input');
	var searchBox = new google.maps.places.SearchBox(input);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	// Bias the SearchBox results towards current map's viewport.
	map.addListener('bounds_changed', function () {
		searchBox.setBounds(map.getBounds());
	});

	var markers = [];
	// Listen for the event fired when the user selects a prediction and retrieve
	// more details for that place.
	searchBox.addListener('places_changed', function () {
		var places = searchBox.getPlaces();

		if (places.length == 0) {
			return;
		}

		// Clear out the old markers.
		markers.forEach(function (marker) {
			marker.setMap(null);
		});
		markers = [];

		// For each place, get the icon, name and location.
		var bounds = new google.maps.LatLngBounds();
		places.forEach(function (place) {
			if (!place.geometry) {
				console.log("Returned place contains no geometry");
				return;
			}
			var icon = {
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25, 25)
			};

			// Create a marker for each place.
			markers.push(new google.maps.Marker({
				map: map,
				icon: icon,
				title: place.name,
				position: place.geometry.location
			}));

			if (place.geometry.viewport) {
				// Only geocodes have viewport.
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
		});
		map.fitBounds(bounds);
	});
}


//geolocate

var geolocate = document.getElementById("geolocate");
var input = document.getElementById("pac-input");
var searchBox = new google.maps.places.SearchBox(input);
var ops = "hello";

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		geolocate.innerHTML = "Geolocation is not supported by this browser.";
	}
}

//latlon together
//function showPosition(position) {
//	var latlon = position.coords.latitude + "," + position.coords.longitude;
//	input.setAttribute("value", latlon);
//}

function showPosition(position) {
	var lat = position.coords.latitude; 
	var lon = position.coords.longitude;
	//input.setAttribute("value", lat + "," + lon);
	//window.open("gallery.html");
}

//function submitLocation() {
	//input.submit();
//}

//To use this code on your website, get a free API key from Google.
//Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

function showError(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			geolocate.innerHTML = "User denied the request for Geolocation."
			break;
		case error.POSITION_UNAVAILABLE:
			geolocate.innerHTML = "Location information is unavailable."
			break;
		case error.TIMEOUT:
			geolocate.innerHTML = "The request to get user location timed out."
			break;
		case error.UNKNOWN_ERROR:
			geolocate.innerHTML = "An unknown error occurred."
			break;
	}
}