# Introduction to CSS

## CSS is used to define the appearance of a web site
![Book image 1](http://wendyvancamp.files.wordpress.com/2012/04/alice-in-wonderland-book-cover.jpg)
![Book image 2](http://api.ning.com/files/ROZDPMdslR4R9dUcbNbc3PZPdmyune4W1xlZ3X9vRrmRMxyWwqyddP*3k7RtKrVqZZeOdJIvIZkzJiGOXrGaNEOwEGlp29H2/CamilleRoseGarciasAlicesAdventuresInWonderland.jpg)
![Book image 3](http://flavorwire.files.wordpress.com/2011/01/alicedandrade.jpg)
![Book image 4](http://fc04.deviantart.net/fs15/f/2006/363/2/5/Alice_in_Wonderland_Book_Cover_by_pensivejakal.jpg)

## If the HTML markup is done well, CSS will have complete control over the appearance of the site
[Example wordpress site](http://www.spencersvoice.com)

## CSS Overview

The content is marked-up in HTML to specify the semantic intent of each of the elements of the document

Elements can be grouped into classes, or marked with a unique id

CSS rules define the layout and appearance

A rule is a list of style declarations that is assigned to an element or elements within the HTML

Style declarations consist of property-value pairs. Properties are items such as fonts, colors, margins, 
positions, etc. The declarations define how the style will appear in the browser

Rules are mapped to elements in the HTML using selectors.

Syntax of a CSS rule:
```
selector { property : value; property: value; }
```

## CSS Tutorial
[W3Schools CSS Tutorial](http://www.w3schools.com/css/default.asp)

## CSS Selector Basics

### Tags as selectors
Change the font size of all paragraphs:
```
p { font-size: 1.2em }
```
Change the color of all heading ones:
```
h1 { color: red }
```

### Classes as selectors
Use a leading "." to indicate that the selection applies to a group.
Italisize all elements in the 'ingredients' class:
```
.ingredients { font-style: italics; }
```

### IDs as selectors
Use a leading "#" to indicate that the selection applies to the element 
with the specified ID.
Make the pull down menu invisible:
```
#pullDownMenu { display: none; }
```

### Rules applied to multiple elements
A selector can contain a comma separated list of selectors to make the
rule apply to multiple elements within the html.
Make all headings green:
```
h1,h2,h3,h4,h5,h6 { color: green; }
```

### Elements can be selected based on where they are in the hierarchy
It can sometimes be useful to select elements based upon their parent
element. For instance you might want to select all top-level divs for
layout, so you would select all divs that are direct children of the 
body element:
```
body>div { display: block; float: left; }
```

You may want to select all paragraphs that occur within a particular
layout element of your document, regardless of who the paragraph's
direct parent is. Example: select all inputs that are contained within
the navigation panel:
```
#nav_panel input { background-color: blue; }
```

Sometimes special formatting is required for the first element that
follows a particular element in a document. For example, you may want
a horizontal line to separate a list from the paragraph that follows
it:
```
ul+p { border-top: 1px solid black; }
```

### Special handling for anchor tags
Extra styles are available for links to help the user recognize them as
interactive elements within the document.
Make all unvisited links blue with an underline:
```
a:link { color: blue; text-decoration: underline; }
```

Make all visited links purple:
```
a:visited { color: purple; }
```

Change the color of a link when it is moused-over:
```
a:hover { color: red; }
```

### More selectors
[More selectors](http://www.w3schools.com/cssref/css_selectors.asp)

## CSS Properties
[Full list of CSS properties](http://www.w3schools.com/cssref/default.asp)

Property declarations can roughly be divided into two categories:
text styling and layout

Text styling refers to the appearance of the text and includes specifying
the font, size, color, boldness (weight), alignment, bullet types, etc.

Layout refers to positioning items within the display and how the items
interact with other items.

A rule can contain both styling and layout declarations or just one or
the other.

## Why Cascading?

Style sheets can be applied in three ways:

### External Stylesheets

Style rules are stored in a file separate from the HTML files to which it
applies. The HTML document links to the style sheet file using a link element
in the document head.
```
<html>
  <head>
    <title></title>
    <link rel='stylesheet' src='http://www.mysite.com/css/mystyles.css'>
  </head>
  ...
```

### Internal Stylesheets

Within an HTML document, styles can be added using the style element in the
document head.
```
<html>
  <head>
    <title></title>
    <style>
      .section {
        background-color: #e0e0e0;
      }
    </style>
  </head>
  ...
```

### Inline Styles

Layout elements (those that can be visible in the browser) can have a style
attribute assigned which contains just the property declarations. Note that 
there is no need for a selector since the rule is already attached to a
particular element.
```
<p id='descPar11' class='descriptiveParagraph' 
   style='position: absolute; top: 10%; left: 50%;
          width: 50%; height: 80%;'>
  Here is a descriptive paragraph.
</p>
```

### How rules are applied

What style will be used when there is more than one style specified for an 
HTML element?

Generally speaking we can say that all the styles will "cascade" into a new
"virtual" style sheet by the following rules, where number four has the 
highest priority:

1. Browser default
2. External style sheet
3. Internal style sheet (in the head section)
4. Inline style (inside an HTML element)

So, an inline style (inside an HTML element) has the highest priority, which
means that it will override a style defined inside the <head> tag, or in an
external style sheet, or in a browser (a default value).

Note: If the link to the external style sheet is placed after the internal
style sheet in HTML <head>, the external style sheet will override the
internal style sheet!

Rules are inherited from parents to children. If you apply a font family to the
body element, all elements within the body will display using that font family
unless there is a rule that supercedes the setting in a descendent element.

# Best Practices
Be sure to check out the [Best Practices](best_practices.md)
