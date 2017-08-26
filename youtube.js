// Scans an removes images every from Youtube every 4 seconds.
// This scanning functionality allows the user to hover over an 
// image and see the GIF summary.
function removeImages() {
	var images = document.getElementsByTagName('img');
	for (var i = 0, l = images.length; i < l; i++) {
  	images[i].src = '';
  }

  setTimeout(removeImages, 4000);
}

removeImages();
