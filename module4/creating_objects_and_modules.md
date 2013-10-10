# Creating Objects

Object inheritance doesn't work the same way in JavaScript as many other
languages. In general, the object-oriented capabilities of the language are
lacking in comparison to Java, C#, and even other dynamic languages like
Python and Ruby.

Typically it is easier to write applications that don't depend on a complex
type hierarchy. That being said, organizing code into objects is a very
useful pattern to solve many common problems.

**Learning Objectives**:

* Define custom objects to represent internal data
* Understand JavaScript's prototype-based inheritance mechanism
* Understand the `this` reference within functions

**Section Reading:**

* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain>

## Why Object Oriented?

OO code offers a nice way to map the concepts and problems we are trying to
solve onto the code within an application. Most programs deal with various
*objects*, so creating similar code structures can be helpful.

Ideally we want to have code that looks like:

```javascript
var book = library.findBook('Eloquent JavaScript');
if(book.isCheckedIn()) {
  book.reserve({ user: currentUser, location: 'Main' });
}
```

Notice that the method names `findBook`, `isCheckedIn`, etc. provide an
intuitive way to work with the objects in question.

## Defining Objects

Classes in JavaScript are simply objects with properties that are references
to the class values and methods that are available.

Classes are defined in JavaScript using a named function, which functions as
the class constructor. This creates a class that has a `prototype` property
which provides the ability to define methods that will be available to all
instances of the class

```javascript.interactive
function MyClass(value) {
  // this is the constructor
  this.value = value || 42;
}

// set up methods that are available for class instances
MyClass.prototype.getValue = function() {
  return this.value;
};

// instances are created with the 'new' operator
var my = new MyClass();
return my.getValue();
```

### Prototype Inheritance

Prototypes can be chained together to extend functionality for child or
dependent classes. This similar, but not identical to the object inheritance
supported by many other languages.

Objects are *subclassed* by extending the protoype:

```javascript.interactive
function Vehicle() {
  this.name = 'vehicle';
}
Vehicle.prototype.drive = function(){
  console.log('Driving ' + this.name);
}
function Car() {
  this.name = 'car';
}
// copy functions from Vehicle
Car.prototype = new Vehicle();
Car.prototype.start = function() {
  console.log('Start ' + this.name);
}

var car = new Car();
car.start();
car.drive();
```

### Prototype Inheritance

This is an extremely flexible system, but one common complaint is that it
requires a lot of boilerplate code. Most production code will use libraries
to standardize these conventions, and simplify the syntax.

However, overridding base class functions is awkward at best:

```javascript.interactive
function Car() {}
Car.prototype.start = function() { console.log('Starting the car'); }

function SportsCar() {}
// extend the Car prototype
SportsCar.prototype = new Car();
SportsCar.prototype.start = function() {
  console.log('Starting the sportscar');

  // need explicit reference to base class to invoke
  Car.prototype.start.call(this);
};
return (new SportsCar).start();
```

### Object Prototype

When an object property is referenced, JavaScript searches up an object's
prototype chain to find a suitable value:

`obj.value` ->

* First checks if `obj` has the specified property
* Then checks if the object prototype has that property
* Continues up the prototype chain to `Object`
* Finally returns `undefined` if not found

Because of the akward syntax and performance issues of complicated
hierarchies, most JavaScript code will have fairly shallow class hierarchies
and use composition and functional constructs rather than traditional
object-oriented architecture.

### Dynamic Objects

The object prototype is available to all instances of a class, and can
even be modified after objects have been created.

```javascript.interactive
function MyClass(options) {
  // this is the constructor
  this.value = (options ? options.value : null ) || 42;
}
MyClass.prototype.getValue = function() { return this.value; };

// create an object instance
var instance = new MyClass({ value: 4 });

// note that we can modify the protoype later
MyClass.prototype.double = function() { return 2 * this.value; };

return instance.double();
```

This is because the instance has a *reference* to the object prototype, but
properties are not resolved until they referenced.

## The this Reference

Object-oriented languages typically define a `this` or `self` reference that
refers to the current object within the methods defined by the class. This
is essential for each instance to maintain it's own state.

```javascript.interactive
function Test(value) {
  this.value = value;
}
Test.prototype.double = function() {
  return this.value * 2;
}
var first = new Test(123);
var second = new Test(456);
return 'First: ' + first.double() + ' - Second: ' + second.double();
```

### Obtaining this

However, `this` is often a source of confusion for people used to other
languages because it is bound to the object a function was invoked with
(using the `.` syntax).

The value of this depends on how a function is invoked:

<table class="table table-striped">
  <tr>
    <th>Syntax of function call</th>
    <th>Value of <code>this</code></th>
  </tr>
  <tr>
    <td><em>Method Call:</em> <code>obj.method()</code></td>
    <td><code>obj</code></td>
  </tr>
  <tr>
    <td><em>Baseless Function Call:</em> <code>method()</code></td>
    <td>Global object (<code>window</code>) or <code>undefined</code> in strict mode</td>
  </tr>
  <tr>
    <td><em>Using call or apply:</em> <code>method.call(context, arg1, arg2)</code></td>
    <td><code>context</code></td>
  </tr>
</table>

This tends to trip people up because nested functions defined within an
object method do not inherit the parent function's `this` reference:

```javascript.interactive
function Test(key) {
  this.key = key;
}
Test.prototype.toString = function() { return '[Test: ' + this.key + ']'; }
Test.prototype.doCallback = function() {
  var callback = function(value) {
    // 'this' is undefined in this context because the callback was invoked
    // directly
    console.log('in callback: ' + this + ' - ' + value);
  }
  // 'this' refers to the class instance in this scope
  callback(this.key);
};
(new Test('abc')).doCallback();
```

### Caching this

The previous section might appear to be fairly esoteric, but because callback
functions are so prevalent in JavaScript it is actually a fairly common
issue.

One common practice to address this is to cache the current value of `this`
within an class method, so callbacks within the function can access the
value through the closure.

```javascript.interactive
function Test(key) {
  this.key = key;
}
Test.prototype.callbackTest = function() {
  var that = this;
  var callback = function() {
    // 'this' is null here, but 'that' is the correct reference
    console.log('inside callback: ' + that.key)
  }
  // invoke the callback
  callback()
};
(new Test('callback')).callbackTest();
```

`_this`, `that`, and `ref` are common conventions for caching the current
object reference.

### Function call/apply

Functions can also be invoked to provide an explicit value for the `this`
reference. This is particularly useful when binding event callbacks as
we'll see later.

Two variants are available, the difference being how arguments are passed to
the function:

* `method.call(thisReference, argument1, argument2, ...)`
* `method.apply(thisReference, arrayOfArguments)`

These methods are typically used within anonymous functions to bind a
callback to the current object:

```javascript.interactive
function Test(key) {
  this.key = key;
}
var format = function(value) {
  // note that format is not a class method, but 'this' still works
  return 'Test - ' + this.key + ' - ' + value;
}
var t = new Test('magic');
return format.call(t, 'example')
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
  return this._dontTouch += amount;
}
var state = new InternalState();
return state.incrementValue(12);
```

### Module Pattern

There is an alternate mechanism for defining objects in JavaScript that
supports internal state using a closure, making it inaccessible outside the
class.

The basic pattern looks like:

```javascript.interactive
function Car(make, model) {
  // variables in this scope are inaccessible
  var name = make + ' - ' + model;

  var startCar = function() {
    console.log('Starting: ' + name);
  }
  var driveCar = function() {
    console.log('Driving: ' + name);
  }

  // return the public interface
  return {
    start: startCar,
    drive: driveCar
  };
}
var test = new Car('AMC', 'Gremlin');
test.start();
test.drive();
```

The drawbacks to this pattern are that it requires a lot of boilerplate and
duplication to accomplish, and it's even more awkward than the prototype
pattern to extend classes.

