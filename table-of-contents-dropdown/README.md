# Table-of-Contents Dropdown

Sometimes posts or pages can become so long an unwieldy that users need help navigating their contents. This markup and script combination creates a hyperlinked dropdown list that will auto-populate with all H2s on the page that contain IDs.

## How to add the dropdown list

1. Near the top of your page/post (it can be at the very top or after a block of intro content), add an **Embed Code** block. Leave the Heading empty, and paste the following code into the Embed Code field:  
```
<div class="blk from-wysiwyg">
  <form action="#" onsubmit="return false;">
    <script type="text/javascript">
      // Get the rendered height of the sticky header so it can later be used to offset the scroll-into-view position
      var topFloatingHeaderHeight = document.getElementById("floating-header").offsetHeight;
    </script>
    <label class="dir__legend" style="display:inline-block;">Table of Contents:</label><svg class="icon icon--bull" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/svg/sprite.svg#bull"></use></svg>
    <select id="table-of-contents" onchange="document.getElementById(options[selectedIndex].value).scrollIntoView(true); window.scrollBy(0, -topFloatingHeaderHeight);">
      <option value="default">Select a Business</option>
    </select>
  </form>
</div>
```
2. Add the rest of your page content. Give each H2 in your in content an ID so that the dropdown can link to it. You can add an ID to an H2 by clicking the `<>` button on the text editor to go into HTML view and then edit any H2 from `<h2>Intro</h2>` to `<h2 id="intro">Intro</h2>`.
3. After adding the rest of your page content, add another **Embed Code** block at the very bottom. Leave the Heading empty and paste the following code into the Embed Code field:  
```
<script type="text/javascript">
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
</script>
```
4. Save/publish the page.

Now, when users visit the page, the script will scrape all of the H2s on the page and compile them into a list of links that it will add to the table-of-contents dropdown.

## References

1. [How To Populate DropDown List With Options From Array Using Javascript](https://www.youtube.com/watch?v=HMehtL39VUQ)  
Used for the `// Scrape all the h2s in the document and save them to an array` footer script

2. [Replacing anchor links with JavaScript](www.the-art-of-web.com/javascript/remove-anchor-links/)  
Used for the `// Allow jumping to anchor links with javascript` footer script -- original JavaScript code snippet by [Chirp Internet](www.chirp.com.au)