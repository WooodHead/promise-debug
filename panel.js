(function() {
    window.addEventListener('load', function() {
        chrome.devtools.inspectedWindow.eval("alert('test')");
    });
})();
