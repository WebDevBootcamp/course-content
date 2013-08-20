# Using jQuery

jQuery open source JavaScript library that simplifies the interaction between
HTML and JavaScript. It attempts to simplify the existing DOM APIs and abstract
away cross-browser issues.

It was created by John Resig in 2005, released in January of 2006.

> Note that [jQuery UI](http://jqueryui.com/), a library you will probably see
> in various places, is an additional library built on top of code jQuery.

Activity reading:

* <http://learn.jquery.com/using-jquery-core/>

## What is jQuery

jQuery is by far the most popular library for work with the DOM in JavaScript,
so understanding how it works is essential for developing web applications.

jQuery is written in JavaScript, so of course you can do everything it does
using native methods. However, there are a great number of browser limitations,
inconsistancies, bugs, etc. that are handled automatically by jQuery and without
it you would be forced to handle these issues yourself.

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

## Document Ready Event

The browser performs many actions as a page loads, and the page is not
necessarily completely loaded when a script is first evaluated. jQuery provides
a ready function that will execute callbacks after all resources are available
and the document is loaded, which is a better place for your code to begin
executing:

```html
<script>
  // code here is executed right away, and some resources 
  // may not be available

  // add a callback to the ready function
  $(document).ready( function() {
    // code here is executed when the page is ready
  });
</script>
```

## Selectors

### The jQuery Object

## Manipulation

## Traversal

## Chaining

## Chaning the DOM

### Removing Content

### Moving Elements

### Generating New Content
