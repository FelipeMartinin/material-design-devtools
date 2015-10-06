var x = new XMLHttpRequest();
x.open('GET', 'material-design-theme.css');
x.onload = function() {
    chrome.devtools.panels.applyStyleSheet(x.responseText);
};
x.send();