// Scans an removes images  from Youtube every 5 seconds.
// This scanning functionality allows the user to hover over an 
// image and see the GIF summary.
function removeImages() {
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++) {
  	 	images[i].src = '';
    }

  	setTimeout(removeImages, 5000);
}

removeImages();
