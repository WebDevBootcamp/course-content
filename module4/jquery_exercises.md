# jQuery Exercises

The following excercises demonstrate common patterns for using jQuery to create
dynamic functionality on a webpage.

<style>
.sample-box {
  padding: 5px;
  margin: 5px;
  width: 350px;
  border: 1px solid #666;
}
.highlight {
  background-color: #ccf;
}
.light-box {
  border: 1px solid #999;
}
</style>

## Selector Practice

<div class="test1 sample-box highlight">
div.test1
<ul>
  <li>li</li>
  <li>li</li>
  <li>li</li>
</ul>
</div>

<div class="test2 sample-box highlight">
div.test2
<ol>
  <li>li</li>
  <li>li</li>
</ol>
</div>

Set the text color of the list items in `test1` to red, and `test2` to yellow.

```javascript.interactive
```

## Iterating Items

<div class="test1 sample-box highlight">
div.test1
<ul>
  <li>li</li>
  <li>li</li>
  <li>li</li>
  <li>li</li>
  <li>li</li>
</ul>
</div>

Set the background color of the even list items white, and the odd items gray.

```javascript.interactive
```

## Update Content
<div class="test1 sample-box highlight">
  div.test1
  <div>
  The time is:
  <span class="current-time light-box">span.current-time</span>
  </div>
</div>

Update the content of `span.current-time` to display the current time. The
time should be displayed in italics.

```javascript.interactive
```

</div>

## Adding and Removing Content

<div class="test1 sample-box highlight">
div.test1
<h3 class="first">h3.first</h3>
<h3 class="second">h3.second - Leave this one</h3>
<h3 class="third">h3.third</h3>
<h3 class="fourth">h3.fourth</h3>
</div>

Remove all items except `h3.second` and add a new header item with the class
name `fifth`

```javascript.interactive
```

## Set Background Color

<div class="test-buttons btn-toolbar sample-box">
  <div>
    div.test-buttons
  </div>
  <button class="btn btn-default">Red</button>
  <button class="btn btn-default">Blue</button>
  <button class="btn btn-default">Green</button>
</div>
<div class="target sample-box">
div.target
</div>

Set the background color of the target div to the matching color when each
button is pressed.

```javascript.interactive
```

## Disable Buttons

<div>
  input.button-toggle: <input class="button-toggle" type="checkbox" checked>
</div>
<div class="test-buttons btn-toolbar sample-box">
  <div>
    div.test-buttons
    <div>
      <button class="btn btn-default always">button.always</button>
      <button class="btn btn-default toggle">button.toggle</button>
      <button class="btn btn-default toggle">button.toggle</button>
    </div>
  </div>
</div>

Use the checkbox to enable and disable the buttons with the `toggle` class
only.

```javascript.interactive
```

## Form Validation

<form class="test-form sample-box">
  <div>form.test-form</div>
  <div class="form-group">
    <label>Name</label>
    <input type="text" class="test-name form-control" placeholder="input.test-name">
  </div>
  <div class="form-group">
    <label>Email address</label>
    <input type="email" class="test-email form-control" placeholder="input.test-email">
  </div>
  <button class="form-prompt btn btn-default disabled">button.form-prompt</button>
</form>

Validate the user name to ensure it looks like *<first name> <last name>*, and
enable the prompt when valid. Pressing the button should display a prompt of the
user name and email.

```javascript.interactive
```

## List Counting

<form class="form-inline">
  <div class="form-group">
    <input class="new-item form-control" placeholder="input.new-item">
  </div>
  <button class="add-item btn btn-default">button.add-item</button>
</form>
<div class="sample-box highlight">
  ul.sample-list
  <ul class="sample-list">
    <li>Sample item</li>
  </ul>
</div>
<div class="list-count sample-box">
Item count: 1
</div>

Add items to the list when the `add-item` button is checked. Adding a new item
should reset the new item input.  Update `div.list-count` to display the
current number of items after each addition.

```javascript.interactive
```

