chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	// if (changeInfo.status === "complete" && tab.url && tab.url.includes("zhihu.com")) {
	// 	console.log("==", changeInfo, tab);
	// 	chrome.tabs.sendMessage(tabId, {
	// 		type: "NEW",
	// 		tab,
	// 		name: "dd",
	// 	});
	// }
});

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
// 	console.log(tabId, changeInfo, tab);
// 	chrome.tabs.sendMessage(tabId, {
// 		type: "NEW",
// 		tab,
// 		name: "你是个sb",
// 	});
// });
