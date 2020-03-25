var boxContent = addTextBox();

$('body').dblclick(function(e){
  var element = e.target;
  var contentCode = getCode(element);
  if (contentCode != -1){
    boxContent.innerHTML = contentCode;
    textToClipBoard(boxContent);
    boxContent.innerHTML = "copied";
    setTimeout(function(){
      boxContent.innerHTML = "";
    }, 2000);
  }
});

function getCode(element) {
  var nameElement = element.tagName.toLowerCase();
  if(nameElement== 'pre'){
    var spanTags = element.firstChild.childNodes;
    var contentCode = "";
    for(var i = 0; i < spanTags.length; i++){
      contentCode += spanTags[i].textContent;
    }
    return contentCode;

  } else if (nameElement == 'span' && element.parentNode.tagName.toLowerCase() == 'code'){
      return getCode(element.parentNode.parentNode);
  } else if (nameElement == 'code') {
      return element.textContent;
  } else {
      return -1;
  }
}

function textToClipBoard(boxContent) {
  boxContent.disabled = false;
  boxContent.select();
  document.execCommand("copy");
  boxContent.disabled = true;
}

function addTextBox(){
  var inputTag = "<textarea disabled placeholder='status' id='text-box' " +
    "style='position: fixed; bottom: 0; left: 0; width: 80px; height: 30px; "+
    "border: 1px solid gray; color: green; font-weight: bold; overflow: hidden;'></textarea>";
  var div = document.createElement('div');
  div.innerHTML = inputTag.trim();
  var boxContent = div.firstChild;
  boxContent.style.opacity = 1;
  document.body.appendChild(boxContent);
  return boxContent;
}

