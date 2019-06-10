// JavaScript Document
//FLICKR API
//$(document).ready(function(){

function flickrPhoto() {
	//$(document).ready(function(){
	//Connects to the Flickr API and reads the results of the query into a JSON array. This query uses the 'flickr.people.getPublicPhotos' method to access all the photos in a particular person's user account. It passes the resultant JSON array of data to the 'displayImages1' function below.

	//var pid = "161416888%40N03";
	var pid = "";
	var ptag = "photography,streetphotography,landscape";//"photolocapp"
	var pminupload = "2016-01-01";
	var psort = "relevance";//interestingness-asc
	var paccuracy = 11;
	var plat = document.getElementById("lat1").value;
	var plon = document.getElementById("lon1").value;
	//var plat = lat;
	//var plon = lon;
	//var plat = 37.7694;
	//var plon = 122.4862;
	//var plat = 34.0522342;
	//var plon = -118.2436849;	

	var urlpage = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=007679df840b8956991cde966334badc&user_id=" + pid + "&tags=" + ptag + "&min_upload_date=" + pminupload + "&sort=" + psort + "&accuracy=" + paccuracy + "&has_geo=1&extras=geo&lat=" + plat + "&lon=" + plon + "&format=json&jsoncallback=?";

	$.getJSON(urlpage, displayImages1);



	//This function actually does something with the data after it has been read in from the Flickr API.	
	function displayImages1(data) {
		//Loop through the results in the JSON array of data. The 'data.photos.photo' bit is what you are trying to 'get at'. i.e. this loop looks at each photo in turn.
		$.each(data.photos.photo, function (i, item) {

			//Reads in each photo id.	
			var photoID = item.id;
			var imageLat = item.latitude;
			var imageLon = item.longitude;

			//Adds the photo id to the 'images1' div (created in the main body of this html page).		
			//$('#images1').append(photoID); 

			//Gets the url for the image.
			var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';

			//Uses this URL to creats a html 'img' tag.
			htmlString = '<div class="feed"><a href="https://www.google.com/maps/?q=' + imageLat + ',' + imageLon + '" target="_blank"><img src="' + photoURL + '"></a></div>';
			
			//<input type="text" value="' + imageLat + '"><input type="text" value="' + imageLon + '">

			//Adds this image to the 'images1' div.
			$('#images1').append(htmlString);

			//Adds some basic formatting to seperate out the images.
			//$('#images1').append("<br/><hr/><br/>");
			
			
		});
	}

}