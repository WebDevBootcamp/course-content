# Useful HTML Tags

## Headings - defines sections and sub-sections of a document. Guides SEO in determining what the document is about.
```
Six levels of headings: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
```

## Paragraphs - holds the written content of a page
```
<p>Paragraph text goes here.</p>
```

## Title - page title must be within the head element
Page title is displayed in the browser tab but not within the rendered document
```
<title>Page Title</title>
```

## Strongly emphasized text - call attention to important text within a block of text.
```
<em>Emphasized Text (defaults to italics)</em>
<strong>Strong Text (defaults to boldface)</strong>
```

## Forced break - add a newline within a paragraph.
```
<p>This line of text will appear on one line<br/>And this will appear on the next</p>
```

## Anchors - create links to other pages or within a page
```
<a href='http://www.google.com'>Link to another page</a>
<a name='section1'></a>Adds a bookmark within a page
<a href='#section1'>Jump to section1</a>
```

## Lists - create bulleted and numbered lists
```
Unordered (bulleted) list:
<ul>
  <li>List Item</li>
  <li>List Item</li>
</ul>

Ordered (numbered) list:
<ol>
  <li>List Item</li>
  <li>List Item</li>
</ol>
```

## Images - insert photos or artwork into a document (jpg, png, gif)
```
<img id='fidoPic' alt='picture of my dog' src='mydog.jpg'>
```

## Preformated text - force text layout, including white space. Good for code snippets, poetry or other formatted text
```
<pre>This snippet
    will appear spread across
    four lines with forced
    spacing at the start of each line</pr>
```

## Figures - (HTML5) used to connect captions with images
```
Note that a figure element does not have to contain an <img> element. It might instead contain an SVG drawing or a <canvas> element.

<figure>
   <img id='sceneryPic' alt='Picture of my house' src='house.png'>
   <figcaption>My house in the sunshine</figcaption>
</figure>
```

## Dates and time - (HTML5) marks text with an unambiguous date and time to help search engines and other computer readers interpret the data.
```
<time datetime='2013-09-10T18:00:00-07:00'>Class starts at 6:00PM on Tuesday, Sept. 10th</time>
```

## Objects - (HTML5) a general-purpose method to embed any external content into your web page
```
<object
  data="myDog.jpg"
  type="image/jpg"
  width="250px" height="300px">
  Fallback content can go here
</oject>

## Neutral elements - usage can be defined by developer
```
<div id='elem11' class='descriptive-text'>Defines a block type element</div>
<span class='bookTitle'>Defines an inline type element</span>
```

## Inline frames - allows you to embed another entire webpage within your page. Useful for embedding advertising, videos or other applications.
```
<iframe src="http:///www.google.com" width="320" height="240"></iframe>
```

## Non-visible elements - usually placed within the head of the document. These carry information about the document or reference other resources the page needs to display.
```
<link rel='stylesheet' href='myStyles.css'>
<script type='text/javascript' href='js/jquery.js'></script>
<meta name='keywords' content='HTML,HTML tags, HTML syntax'>

# Block vs. Inline tags
Visible elements generally fall into one of two categories.

## Block tags

Occupy the entire width of the container. Layout is forced to display this element below the previous block element within the same container.

Block tags:
### h1, h2, h3, h4, h5, h6
### p
### div
### img
### object
### iframe
### ul, ol, li
### figure

## Inline tags

Occupy only the space required to fully contain their contents.

InLine tags:
### em, strong, i, b
### a
### time
### span

# Full list of available defined tags
[W3C HTML Language Reference](http://www.w3.org/TR/html-markup/elements.html)

# Next: Best Practices
[Best Practices](?md=course_content/module2/best_practices.md)
