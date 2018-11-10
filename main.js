chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var title = "Search for Directions...";
    var id = chrome.contextMenus.create({
        "title": title, 
        "contexts": [context],
        "id": "context" + context
    });  
  });
  
chrome.contextMenus.onClicked.addListener(onClickHandler);
  
function onClickHandler(info, tab) {
    var sText = info.selectionText;
    var url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(sText);  
    window.open(url, '_blank');
};