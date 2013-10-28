chrome.processes.onUpdated.addListener(function(processes) {
  //console.log(processes);
  for(var key in processes) {

    if (processes[key].tabs.length === 0) {

    } else if (processes[key].cpu < 10) {
      chrome.tabs.executeScript(processes[key].tabs[0], {code: "if (document.title.substr(0,2) == '☹ ') {document.title = document.title.substr(2);}"}, function() {console.log("done");});
    } else {
      console.log("Tab: " + processes[key].tabs[0] + ", CPU: " +  processes[key].cpu);
      chrome.tabs.executeScript(processes[key].tabs[0], {code: "if (document.title.substr(0,2) != '☹ ') {document.title = '☹ ' + document.title;}"}, function() {console.log("done");});
    }

  }
});