// JavaScript Document

//Autocomplete
//function initAutocomplete() {
//	// Create the search box and link it to the UI element.
//	var input = document.getElementById('pac-input');
//	var searchBox = new google.maps.places.SearchBox(input);
//	var autocomplete = new google.maps.places.Autocomplete(input);
//	var place = autocomplete.getPlace();
//    document.getElementById("lat1").value = place.geometry.location.lat();
//    document.getElementById("lon1").value = place.geometry.location.lng();	
//}

function initAutocomplete() {
	////map options
//	var options = {
//		zoom: 16,
//		center: {
//			lat: -33.8688,
//			lng: 151.2195
//		}
//	}
//
//	//the map
//	var map = new google.maps.Map(document.getElementById('map'), options);
//
//	//markers
//	addMarker({
//		coords:{lat: -33.8688, lng: 151.2195}
//	});
//	
//	
//	function addMarker(props){
//		var marker = new google.maps.Marker({
//			position: props.coords,
//			map: map,
//			//icon: "" //put icon here
//		});
//	}
	
	var input = document.getElementById('pac-input');
	var autocomplete = new
	google.maps.places.Autocomplete(input);
	google.maps.event.addListener(autocomplete, 'place_changed', function () {
		var place = autocomplete.getPlace();
		document.getElementById('lat1').value = place.geometry.location.lat();
		document.getElementById('lon1').value = place.geometry.location.lng();
		//alert("This function is working!");
		//alert(place.name);
		// alert(place.address_components[0].long_name);

	// Bias the SearchBox results towards current map's viewport.
	map.addListener('bounds_changed', function () {
		searchBox.setBounds(map.getBounds());
	});

	var markers = [];
	});
}

function initMap() {
	var location = {
		lat: -25.363,
		lng: 131.044
	};
	var map = new google.maps.MAP(document.getElementById("map"), {
		zoom: 4,
		center: location
	});

}


//Geolocate
var geolocate = document.getElementById("geolocate");
var input = document.getElementById("pac-input");
var lat1 = document.getElementById("lat1");
var lon1 = document.getElementById("lon1");
var searchBox = new google.maps.places.SearchBox(input);



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
	//input.setAttribute("value", "My Location");
	lat1.setAttribute("value", lat);
	lon1.setAttribute("value", lon);
	document.getElementById("submitbtn").click();
	//document.createTextNode();
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