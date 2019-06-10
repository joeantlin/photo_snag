<?php
	
$tags = "photolocapp";
$min_upload_date = "2018-01-01";
$accuracy = "11";
$radius = "10";
$radiusu = "mi";


$url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1d4552a4b66aced0aa82dbe71382edc9&tags='.$tags.'&min_upload_date=".$min_upload_date."+00%3A00%3A01&accuracy=".$accuracy."&radius=".$radius."&radius_units=".$radiusu."&format=json&nojsoncallback=1";

$data = json_decode(file_get_contents($url));


$photos = $data->photos->photo; 
foreach ($photos as $photo) {
	echo "<h1>".$photos->title."</h1>";
}




