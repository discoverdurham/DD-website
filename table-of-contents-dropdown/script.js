// Get the rendered height of the sticky header so it can later be used to offset the scroll-into-view position

var topFloatingHeaderHeight = document.getElementById("floating-header").offsetHeight;



// Script for creating a dynamic table of contents dropdown list from h2s

var tableContents = document.getElementById("table-of-contents");

// Scrape all the h2s in the document and save them to an array

var h2List = document.getElementsByTagName("h2");

for(var i = 0; i < h2List.length; i++) {

  // for each h2 in the array, create a new option in the dropdown. Use the h2's inner text as the option text and the h2's id as the option value

  var option = document.createElement("option");

  var txt = document.createTextNode(h2List[i].innerText);

  option.appendChild(txt);

  option.setAttribute("value",h2List[i].id);

  tableContents.insertBefore(option,tableContents.lastChild);

}



// Allow jumping to anchor links with javascript

window.addEventListener("DOMContentLoaded", function(e) {

  var links = document.getElementsByTagName("A");

  for(var i=0; i < links.length; i++) {

    if(!links[i].hash) continue;

    if(links[i].origin + links[i].pathname != self.location.href) continue;

    (function(anchorPoint) {

      links[i].addEventListener("click", function(e) {

        anchorPoint.scrollIntoView(true);

        e.preventDefault();

      }, false);

    })(document.getElementById(links[i].hash.replace(/#/, "")));

  }

}, false);
