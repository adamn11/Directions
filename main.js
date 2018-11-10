chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";

    var point = chrome.contextMenus.create({
        "title": "Search...", 
        "contexts": [context],
        "id": "point"
    });  

    var direction = chrome.contextMenus.create({
        "title": "Search Directions",
        "contexts": [context],
        "id": "direction"
    })
});
  
chrome.contextMenus.onClicked.addListener(onClickHandler);
  
function onClickHandler(info, tab) {
    var sText = info.selectionText;

    if (info.menuItemId == "direction") {
        console.log("direction");
    } else if (info.menuItemId == "point") {
        var url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(sText);  
    }

    window.open(url, '_blank');
};
