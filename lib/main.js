var tabs = require("tabs");
console.log('ehllo');
console.log(tabs.activeTab.url);

tabs.on('activate', function () {
  console.log('active: ' + tabs.activeTab.url);
});

var panel = require("sdk/panel").Panel({
  width: 610,
  height: 450
});

// Create a button
require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

// Show the panel when the user clicks the button.
function handleClick(state) {
  panel.contentURL = "http://codemarks.com/codemarklet/chrome_extension?url=" + tabs.activeTab.url;
  panel.show();
}
