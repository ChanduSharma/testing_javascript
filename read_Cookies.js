document.cookie = "name=chandra";
document.cookie = "age=24";
document.cookie = "job=freelancer";
function readCookies(){
	var decodedCookie = decodeURIComponent(document.cookie)
	var allPairs = decodedCookie.split(";");
	
	for ( var i = 0; i < allPairs.length; i++) {
		var pair = allPairs[i].split("=");
		document.write(pair[0] + " " + pair[1]);
	}
}