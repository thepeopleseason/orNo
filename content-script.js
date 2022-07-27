const callback = function(mutationsList, observer) {
  for (const mutation of mutationsList) {
    run();
  }
};

function run() {
  var elements = document.getElementsByTagName('a');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(/ or YES/gi, '');

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}

const observer = new MutationObserver(callback);
observer.observe(document.body, {childList: true, subtree: true });
