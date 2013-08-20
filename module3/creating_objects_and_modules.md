# Creating Objects

Object inheritance doesn't work the same way in JavaScript as many other
languages. In general, the object-oriented capabilities of the language are
lacking in comparison to Java, C#, and even other dynamic languages like
Python and Ruby.

Typically it is easier to write applications that don't depend on a complex
type hierarchy. That being said, organizing code into objects is a very
useful pattern to solve many common problems.

Activity reading:

* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain>

## Defining Objects

Classes are defined in JavaScript using a named function, which functions as
the class constructor. This creates a class that has a `prototype` property
which provides the ability to define methods that will be available to all
instances of the class

```javascript.interactive
function MyClass(options) {
  // this is the constructor
  this.value = (options ? options.value : null ) || 42;
}

// set up methods that are available for class instances
MyClass.prototype = {
  getValue: function() {
    return this.value;
  }
}

// instances are created with the 'new' operator
var my = new MyClass();
return my.getValue();
```

## The this Reference

In most object-oriented languages the `this` reference is used within object
functions to refer to the current instance of the class. This enables each
instance to maintain it's own state.

```javascript.interactive
function Test(key) {
  this.key = key;
}
var first = new Test('First');
var second = new Test('Second');
return 'First: ' + first.key + ' - Second: ' + second.key;
```

However, `this` is often a source of confusion for people used to other
languages because it is bound to the object a function was invoked with
(using the `.` syntax), and is not defined within functions that are
invoked without an object reference.

```javascript.interactive
function Test(key) {
  this.key = key;
}
Test.prototype.doInvoke = function() {
  var logValue = function(value) {
    // 'this' is null in this context because logValue was invoked
    // directly
    console.log('anonymous this: ' + this + ' - ' + value);
  }
  // 'this' refers to the class instance in this scope
  console.log('instance this: ' + this + ' - ' + this.key);
  logValue(this.key);
}
;(new Test('this?')).doInvoke();
```

### Caching this

Because callbacks are so prevalent in JavaScript, the behavior of the `this`
reference can be tricky to manage in practice. One common practice is to
cache the current value of `this` within an class method, so callbacks
within the function can access the value through the closure.

```javascript.interactive
function Test(key) {
  this.key = key;
}
Test.prototype.callbackTest = function() {
  var that = this;
  var callback = function() {
    // 'this' is null here, but 'that' is the correct reference
    console.warn('inside callback: ' + that.key)
  }
  // invoke the callback
  callback()
}
;(new Test('callback')).callback();

```

`_this`, `that`, and `ref` are common conventions for caching the current
object reference.

### Function call/apply

Functions can also be invoked to provide an explcit value for the `this`
reference. This is particularly useful when binding event callbacks as
we'll see later.

Two variants are available, the difference being how arguments are passed to
the function:

* `method.apply(thisReference, arrayOfArguments)`
* `method.call(thisReference, argument1, argument2, ...)`

These methods are typically used within anonymous functions to bind a
callback to the current object:

```javascript.interactive
function Test(key) {
  this.key = key;
}
var format = function(value) {
  return 'Test - ' + this.key + ' - ' + value;
}
var t = new Test('magic');
return format.call(t, 'example')
```

## Prototype Inheritance

Object inheritance in JavaScript is typically a fairly tricky thing to
accomplish. In general, it's easier to use aggregation and to combine
functionality from different objects than inheritance.

Objects can be *subclassed* by extending the protoype:

```javascript.interactive
// 'parent' class
function A() {}
A.prototype.doSomething = function() {
  console.log('A::something');
}

// 'child' class
function B() {}
B.prototype = new A(); // copy class from A
B.prototype.anotherFunction = function() {
  console.log('B::another');
}

var b = new B();
b.doSomething();
b.anotherFunction();
```

However, overridding base class functions is awkward at best:

```javascript.interactive
function A() {}
A.prototype.format = function() { return 'A'; }

function B() {}
B.prototype = new A();
B.prototype.format = function() {
  // need explicit reference to base class to invoke
  var base = A.prototype.format.call(this);
  return base + '+B';
}
return (new B).format();
```

## Internal/Protected State

One of the drawbacks of the default prototype-based mechanism used to define
classes in JavaScript is that all properties and methods on the object are
externally availble to external code. This means that traditional object-oriented
concepts of data encapsulation can be difficult to map to JavaScript.

One common convention is to prefix internal values with an underscore - even
though they can be accessed by external code, this signifies that the values
are not part of the public interface and should not be directly accessed:

```javascript.interactive
function InternalState() {
  this._dontTouch = 123;
}
InternalState.prototype.incrementValue = function(amount) {
  this._dontTouch += amount;
}
```

## Built-in Objects

The JavaScript runtime environment provides several global object references
that provide access to various aspects of the browser environment your code is
running within.

### The window Object

### The document Object

### The navigator Object

