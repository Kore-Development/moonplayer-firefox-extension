browser.contextMenus.create({
	id: "open-with-moonplayer",
	title: "Open with MoonPlayer",
	contexts: ["page"]
});

browser.contextMenus.create({
	id: "open-link-with-moonplayer",
	title: "Open link with MoonPlayer",
	contexts: ["link"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
	switch (info.menuItemId) {
		case "open-with-moonplayer":
			browser.tabs.query({currentWindow: true, active: true})
				.then(tabs => {
					var url = info.pageUrl;
					url = url.replace(/^http/, 'moonplayer');
					browser.tabs.update(tabs[0].id, {url: url});
				});
			break;
		case "open-link-with-moonplayer":
			browser.tabs.query({currentWindow: true, active: true})
				.then(tabs => {
					var url = info.linkUrl;
					url = url.replace(/^http/, 'moonplayer');
					browser.tabs.update(tabs[0].id, {url: url});
				});
			break;
	}
});