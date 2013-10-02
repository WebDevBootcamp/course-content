# Event Handling

Events provide the fundamental capability to respond to user actions and
create interactive applications.

Learning objectives:

* Understand the jQuery event model
* Learn how to attach event handlers to HTML elements on a page
* Discuss behavior-driven-design to separate markup and application logic

Activity reading:

* <http://learn.jquery.com/events/>

## Using DOM Events

The browser fires various events to enable your application to respond when
various actions occur. These include:

* Mouse events like clicking, moving, and dragging
* Keyboard events
* Window events like ready, resize

As we saw with the `window.ready` property, you can directly attach callbacks
to various events on DOM elements:

```html.interactive.onload
<button class="example-button">Test</button>
```

```javascript.interactive.onload
var button = document.querySelector('.example-button');
button.onclick = function() {
  alert('The button was clicked');
}
```

One major drawback with with is that only one handler can be registered. This
also forces you to register callbacks on every element on the page one at a
time.

### Registering Event Handlers

The basic mechanism for registering events in jQuery is to use the `on`
method to attach a callback to be fired when an event occurs. You can either
use `$(selector).on( 'event', callback)`, or the `$(selector).event()`
convenience methods.

```html.interactive.onload
<div><input class="user-name"></input></div>
<button class="show-user">Prompt</button>
```

```javascript.interactive.onload
$('.user-name').on('keyup', function(ev) {
  console.log('keyup: ' + ev.which);
})
$('.show-user').click(function() {
  alert('User name: ' + $('.user-name').val());
})
```

### jQuery Event object

Each event callback receives an event object that provides details about the
event. The browser provides native event objects, but jQuery wraps these to
provide additional information and be consistent across browsers.

Some of the important properties:

* **type** - The type of the event (*click*, *keyup*, etc)
* **pageX, pageY** - The page coordinates of mouse events
* **which** - The key or button pressed
* **target** - The DOM element associated with the event

```html.interactive.onload
<ul class="list">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

```javascript.interactive.onload
$('ul.list li').click(function(ev) {
  var target = $(ev.target);
  console.log('Clicked: ' + target.text() + ' at ' + ev.pageX + ', ' + ev.pageY);
});
```

## Event Bubbling

Another nice feature of jQuery events is that they *bubble* up to parent
elements, which can make it easier to bind events to a large number of
child elements.

```html.interactive.onload
<ul class="list">
  <li>First</li>
  <li class="consume-event">Second</li>
  <li>Third</li>
</ul>
```

```javascript.interactive.onload
$('ul.list .consume-event').click(function(ev) {
  console.log('Consuming click event...');
  ev.stopPropagation();
});
$('ul.list').click(function(ev) {
  var target = $(ev.target);
  console.log('Clicked: ' + target.text() + ' at ' + ev.pageX + ', ' + ev.pageY);
});
```

## Behavior-Driven Development

One recommendation for managing dynamic events on a page is to leverage CSS
to define not just the *style* for an element, but its *behavior*. This
can yield more legible code where elements describe what functionality is
associated with the content (*add-task*, *mark-completed*, etc).

Then the JavaScript code is organized around adding handlers based on these
behavior-based class names. Instead of directly modifying element styles,
you use `addClass` and `removeClass` to change how elements work.

```html.interactive.onload
<div class="btn-toolbar">
  <button class="btn toggle-active">First</button>
  <button class="btn toggle-active">Second</button>
  <button class="btn toggle-active">Third</button>
</div>
```

```javascript.interactive.onload
var buttons = $('.btn-toolbar .toggle-active');
buttons.click(function(ev) {
  // first remove style from all buttons, then add it to the clicked button
  buttons.removeClass('btn-success');
  $(ev.target).addClass('btn-success');
});
```

### Event Handler Organization

## Garbage collection

Similar to the `on` method, there is an `off` method to remove callbacks
registered for an event. This can be important when rebuilding parts of the
page to ensure that handlers aren't called more than once.

In addition, as you write more complicated applications (especially single
page applications), this can be important to keep memory utilization under
control. Event bindings can prevent objects from being garbage collected
in some cases, which will cause the memory usage of an application to
continue to grow over time.

<http://addyosmani.com/blog/taming-the-unicorn-easing-javascript-memory-profiling-in-devtools/>

