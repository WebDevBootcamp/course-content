# Host Objects

In addition to the *native objects* defined by the language specification
(Object, Array, Date, etc), JavaScript runtime environments provide a default
set of *host objects* that allow code to interact with the environment.

* <https://developer.mozilla.org/en-US/docs/Web/API/Window>

## Browser Objects

The JavaScript runtime environment provides several global object references
that provide access to various aspects of the browser environment your code is
running within.

Each runtime provides a different set of objects, but for the most part you'll
be running within a web browser and work with the global objects defined there.

## The window Object

The `window` object is the global object that actually exposes all of the
other built in functionality in the JavaScript environment.

Due to a process know as *hoisting*, any variable declarations without an
explict `var` keyword are actually assigned as properties of `window` because
it is the default object. Conversely, you can refer directly to its
properties as well (`window.location` and `location` are the same thing).

All of the other objects we'll look at (`document`, `navigator`, etc) are
properties of the window object.

### Page Load Handlers

Due to the asynchronous nature of JavaScript, multiple scripts are executed as
a page loads.

```html
<script src="application.js"></script>
<script>
  // there is no guarantee that the code from application.js is available
  // yet, so this will probably not work
  app.start();
</script>
```

Most applications need to wait for all of their code to be avilaable to work.
The `window` object executes a callback function after all referenced scripts
have been loaded:

```html
<script src="application.js"></script>
<script>
  // wait for the page to be ready before executing things
  window.ready = function() {
    app.start();
  }
</script>
```

### Current Location

The `window.location` property provides access to the current page that is
loaded. For instance, assigning it to a URL will navigate to a new page:

```javascript.interactive
window.location = 'http://www.google.com';
```

This commonly used to look at URL parameters to provide *deep* links within
an application. For instance, this application uses the *md* and *p*
parameters to specify which document and page to load in the display.

Often it's more desireable to open links in new pages or tabs however:

```javascript.interactive
window.open('http://www.google.com');
```

## The document Object

The `document` property represents the actual page that is loaded in the
browser. This is the main interaction from JavaScript to the markup (HTML)
and styles (CSS) you worked with in previous sections.

For instance, the `querySelector` method returns the first DOM node on the
page that matches a particular selector:

```javascript.interactive
return document.querySelector('p');
```

> `querySelectorAll` returns a list of elements that match the selector

We'll go through this in a lot more detail when we get to the section on
jQuery.

### The Document Object Model (DOM)

The DOM is the mirror of the HTML elements on a page in the JavaScript
environment. For instance, `document.body` returns the body element that
contains the page content.

This interaction is the foundation for the interactive capabilities for
writing dynamic applications in JavaScript.

DOM elements allow a wide range of capabilities:

* Add/remove content in the page
* Modify CSS classes and styles dynamically
* Register event handlers to repond to user input

For instance, elements have a `click` event that is fired when the user
clicks the content with their mouse. The HTML can specify an `onclick`
handler which is code that will be executed when the event occurs.

```html.interactive
<button onclick="alert('DOM event handler')">Click Me!</button>
```

We'll see a better way to do this with jQuery.

## The navigator Object

The `navigator` property provides access to specific details and features of
the particular web browser hosting the page. The actual details can vary
between Chrome, IE, Firefox, etc.

One common use is to access the `userAgent` property to detect the current
browser:

```javascript.interactive
if(navigator.userAgent.match(/i(Pod|Pad|Phone)/i)) {
  alert('Seems to be iOS');
}
return navigator.userAgent;
```

> Note that this is generally discouraged. It better to detect the
> availability of individual features and fall back gracefully. This is
> because the user agent can be *spoofed* by the browser, so it is not
> particularly reliable.

This object also exposes many features of the browser, such as access to
the camera, location services, and other new features.

```javascript.interactive
navigator.geolocation.getCurrentPosition(function(details) {
  console.log(JSON.stringify(details));
});
```

