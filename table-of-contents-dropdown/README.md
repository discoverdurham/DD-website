# Table-of-Contents Dropdown Menu

Sometimes posts or pages can become so long an unwieldy that users need help navigating their contents. This markup and script combination creates a hyperlinked dropdown list that will auto-populate with all H2s on the page that contain IDs.

![screenshot of a the table-of-contents dropdown menu on a blogpost](img/table-of-contents-dropdown.jpg)

## How to add the dropdown list

1. Near the top of your page/post (it can be at the very top or after a block of intro content), add an **Embed Code** block. Leave the Heading empty, and paste the following code into the Embed Code field:  
```
<div class="blk from-wysiwyg">
  <form action="#" onsubmit="return false;">
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
<script type="text/javascript" src="https://jonathanelee.github.io/DD-website/table-of-contents-dropdown/script.js"></script>
```
4. Save/publish the page.

Now, when users visit the page, the script will scrape all of the H2s on the page and compile them into a list of links that it will add to the table-of-contents dropdown.

## References

1. [How To Populate DropDown List With Options From Array Using Javascript](https://www.youtube.com/watch?v=HMehtL39VUQ)  
Used for the `// Scrape all the h2s in the document and save them to an array` footer script

2. [Replacing anchor links with JavaScript](www.the-art-of-web.com/javascript/remove-anchor-links/)  
Used for the `// Allow jumping to anchor links with javascript` footer script -- original JavaScript code snippet by [Chirp Internet](www.chirp.com.au)
