var s = document.createElement("script");
s.src = chrome.extension.getURL("script.js");
(document.head||document.document.Element).appendChild(s);
s.onload = function(){
  s.parentNode.removeChild(s);
};

