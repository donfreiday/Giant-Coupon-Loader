function onWebNav(details) {
    if (details.frameId === 0) {
        // Top-level frame
        chrome.pageAction.show(details.tabId);
        var buttons = document.getElementsByClassName('button-alternate load-to-card'); ​
        for(var i = 0; i <= buttons.length; i++)
            buttons[i].click();
}
var filter = {
    url: [{
        hostEquals: 'giantfoodstores.com'
    }]
};
chrome.webNavigation.onCompleted.addListener(onWebNav, filter);
chrome.webNavigation.onHistoryStateUpdated.addListener(onWebNav, filter);
