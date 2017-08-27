// Navigate away from the default Facebook home feed to the users profile.
chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
	if (details.url == 'https://www.facebook.com/') {
		chrome.tabs.update(details.tabId, { url: "https://www.facebook.com/profile" });	
	}
});