# Using jQuery

jQuery open source JavaScript library that simplifies the interaction between
HTML and JavaScript. It attempts to simplify the existing DOM APIs and abstract
away cross-browser issues.

It was created by John Resig in 2005, released in January of 2006.

> Note that [jQuery UI](http://jqueryui.com/), a library you will probably see
> in various places, is an additional library built on top of code jQuery.

Learning objectives:

* Understand the benefit of using jQuery on a website
* Use jQuery objects to select and manipulate content on a page

Activity reading:

* <http://learn.jquery.com/using-jquery-core/>

## What is jQuery

jQuery is by far the most popular library for work with the DOM in JavaScript,
so understanding how it works is essential for developing web applications.

jQuery is written in JavaScript, so of course you can do everything it does
using native methods. However, there are a great number of browser limitations,
inconsistancies, bugs, etc. that are handled automatically by jQuery and
without it you would be forced to handle these issues yourself.

Some of the main features are:

* Powerful DOM selection, traversal, and manipulation capabilities.
* Simplified usage of built-in browser events, along with the ability to 
  define your own
* Common animations and transitions for elements
* Improved AJAX support over raw JavaScript capabilities
* Wide list of jQuery plug-ins to provide additional capabilities
* Several useful utilities, along with helpful capabilities for dealing with
  multiple browsers

## Including jQuery

The current version of jQuery is available on their website 
<http://jquery.com/download/>, and can be downloaded and referenced like any
other script:

```html
<script src="lib/jquery-2.0.1.min.js"></script>
```

There are two things of note here:

* Notice the explicit version of the library. As new versions are released,
  you need to explicitly update the reference and test that the changes don’t
  break any existing functionality.
* Many popular libraries come in two versions - an uncompressed version and a
  minified version. The latter is much smaller so it downloads faster, and can
  have optimizations to make it run faster in the browser. However, the
  compression makes it essentially impossible to use the browser debugging
  tools to diagnose any problems in the script.

*(Minification will be discussed in more detail in a later section)*

In addition, many popular JavaScript libraries can be referenced from a
*Content Delivery Network* (CDN), for instance:

```html
<script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
```

This can improve performance from your users if the script is already cached by
the browser from another site that uses the same reference.

## Using jQuery

jQuery registers itself in the `window.jQuery` object, but is more commonly
accessed using the a dollar sign (`$`). Many common libraries export a one
character shortcut that reduces the code needed throughout an application.

jQuery is accessed in two ways:

* As helper methods that are properties of the jQuery object (`$.ajax`, etc)
* As a function to operate on the DOM (`$(selector)`)

In some cases you might be using other applications that use `$` for other
functionality, and there are various ways to use the libraries to avoid
conflicts. This is pretty rare in practice however.

## Document Ready Event

We saw the `window.ready` callback earlier, which is fired by the browser
after all content is loaded and an application can begin. This is simply a
property of the window object, so only one callback can be registered, which
causes problems for applications that include many different scripts.

jQuery provides an event mechanism that allows multiple callbacks to be
executed when an event occurs. There are two variants in this case:

```html
<script>
  // use the generic 'on' method to register a callback
  $(document).on( 'ready', function() {
    // start the application here
  });

  // or use the helper method that exposes the ready event directly
  $(document).ready(function() {
    // this will also get called, after the first handler
  });
</script>
```

## Selectors

One nice feature of jQuery is that it builds on CSS selectors, so you are
already familiar with a lot of the syntax from working with stylesheets.

```html.interactive.onload
<ul class="list">
  <li>First</li>
  <li class="active">Second</li>
  <li>Third</li>
</ul>
```

```javascript.interactive
var active = $('li.active');
console.log(active);
return active.length;
```

### The jQuery Object

The `$()` function returns a jQuery object, which then supports various
operations on the elements that matched the selector.

As we saw with the previous example, the jQuery object acts as an array,
where the items are the DOM elements that matched the selector.

One key feature is that any manipulation methods are applied to all of the
matching elements, which makes bulk changes much simpler.

```html.interactive.onload
<ul class="list">
  <li>First</li>
  <li class="active">Second</li>
  <li>Third</li>
</ul>
```

```javascript.interactive
var items = $('ul.list li');
items.css('border', '1px solid red');
```

### Chaining

There are several ways to create a jQuery object:

* `$('selector')` - Executes a CSS query against the current document and
  returns the elements that match.
* `$(element)` - Converts an existing DOM element into a jQuery object, ie:
  `$(document)`
* `$('html fragment')` - Used to create new DOM elements by providing a
  markup fragment

jQuery implements what is known as a *chainable* API, which means that all
methods return the jQuery object being manipulated so you can perform
multiple operations easily:

```javascript.interactive
$('<button>')
  .text('Dynamic Button')
  .addClass('btn')
  .appendTo(document.body);
```

## Manipulation

Basically any aspect of an element [can be changed](http://api.jquery.com/category/manipulation/)
using jQuery.

The `css` method is used to set CSS properties on an element, either with a
key/value pair of a single property to change, or an object specifying
multiple styles:

```html.interactive.onload
<div class="example">
  Dynamic CSS - plain at first, but can be styled in code
</div>
```

```javascript.interactive
$('div.example').css({
  border: '1px solid black',
  'background-color': '#eee',
  padding: '10px'
});
```

> It's generally recommended to use `addClass` and `removeClass` instead of
> directly modifying CSS in code. This allows you to keep style definitions
> separate

### Attributes and Position

The `attr` method is very similar to `css`, except it sets HTML attributes
on elements.

```html.interactive.onload
<form>
  <div>
    <label for="name">Name</label>
    <input id="name" type="text" />
  </div>
  <div>
    <label for="active">Active?</label>
    <input id="active" type="checkbox" />
  </div>
</form>
```

```javascript.interactive
$('#active').attr('checked', true);
return $('#name').val();
```

### Element Content

There are also several ways to change the content of existing elements on
a page. The basic choice is to use the `text` method to get and set the
content of an element:

```html.interactive.onload
<div class="example">Original Content</div>
```

```javascript.interactive
var div = $('.example');
console.log('Content before: ' + div.text());
div.text('Changed to something else');
console.log('Content after: ' + div.text());
```

Notice that calling `text()` with no arguments returns the current value for
the element, and passing in an argument will change it. This is a common
convention for jQuery methods that get and set values.

### Complex Content

The `text` method only operates on simple text values, in fact it will escape
HTML control characters (*>* is changed to *&gt;*, etc.). The `html` function
works similarly to `text`, but allows you to pass formatted HTML content that
will not get escaped.

```html.interactive.onload
<div class="example">Original Content</div>
```

```javascript.interactive
var div = $('.example');
div.html('<strong>It is now:</strong> ' + new Date());
```

## Traversal

jQuery provides a [large number of methods](http://api.jquery.com/category/traversing/)
to find elements in a document. This is often used in event handlers to
handle things like *find the parent list item that contains the clicked
button*, etc.

```html.interactive.onload
<ul class="example">
  <li class="odd">Orange</li>
  <li class="even">Green</li>
  <li class="odd">Blue</li>
</ul>
```

```javascript.interactive
var list = $('ul.example');
var oddItems = list.find('.odd');
var evenItems = list.find('.even');
console.log(oddItems);
console.log(evenItems);
```

## Changing the DOM

In addition to manipulating existing content, jQuery is frequently used to
add and remove elements from the document. This is the beginning step for
truly dynamic web applications.

Many HTML5-only applications are rendered entirely using this or similar
mechanisms - there is no content in the HTML page initially, and everything
is generated in JavaScript after the page loads.

### Removing Content

Elements can be removed by calling the `remove` method, which takes them
out of the page entirely. In some cases, the `show` and `hide` methods might
be more appropriate to hide an element, but leave it in the document.

```html.interactive.onload
<span class="loud"><strong>Loud</strong></span>
<span class="soft"><em>Soft</em></span>
<span class="nerdy"><code>Nerdy</code></span>
```

```javascript.interactive
$('.loud').remove();
$('.soft').hide();
```

### Generating New Content

Creating new content is done by passing HTML fragments to the jQuery function
and then inserting the element into the DOM.

```html.interactive.onload
<div class="example">
</div>
```

```javascript.interactive
var div = $('.example');
div.append($('<button>Yes</button>'));

// often you will use chaining to build more complicated content
var message = $('<div class="alert alert-success">')
  .text('Hopefully this works!')
  .appendTo(div);
```

> This is one area that can have performance considerations depending on
> how you write your code. It is important to cause browser reflow events
> as infrequently as possible.

```javascript.interactive
var div = $('.example');

// this example renders the page twice
var first = $('<ul>');
first.appendTo(div).append('<li>First</li>');

// this only updates the page once when the entire list is added
var second = $('<ol>');
second.append('<li>Second</li>').appendTo(div);
```

### Moving Elements

Using insertion methods on existing elements will move them to a new location
in the document. This can often be faster than deleting the content and
rebuilding it in the new location.

```html.interactive.onload
<ul class="example">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

```javascript.interactive
var first = $('ul.example li').first();
first.appendTo($('ul.example'));
```

You can also `clone` elements and copy the data elsewhere on the page:

```javascript.interactive
var first = $('ul.example li').first();
first.clone().appendTo($('ul.example'));
```
