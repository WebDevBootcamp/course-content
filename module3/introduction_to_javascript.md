# Introduction to Programming Using JavaScript

This section provides an introduction to computer programming languages using
JavaScript.

**Learning Objectives:**

* Understand the basic syntax of JavaScript
* Understand data types and what they are used for
* Explore the basic building blocks for constucting computer programs

**Section Reading:**

* <http://docs.webplatform.org/wiki/concepts/programming/programming_basics>
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>

## Using JavaScript on a Webpage

JavaScript is rarely used in isolation from HTML web pages, including
JavaScript within a page is the first step towards creating dynamic content.

The `script` tag is the HTML element that supports including code in a
webpage. It can either specify explicit code within the element body:

```html
<script>
alert( ‘Hello from JavaScript’ );
</script>
```

Or a `src` attribute can be provided to reference an external script, which
the browser will download and execute (similar to an image tag.

```html
<script src=”js/application.js”></script>
<script src=”js/chat_module.js”></script>
```

Any number of scripts can be included on a page this way.

Similar to CSS, which can either be included within the page, or referenced
in external files, it's generally better practice to separate markup and
scripts to make a project easier to maintain.

### Language Type

Script tags can specify an optional `type` attribute to define the language 
of the script content:

```html
<script type="text/javascript">
// code goes here
</script>
```

The type is optional in HTML5, and if it is omitted the browser will assume
the code is JavaScript.

```html
<script>
// this works too
</script>
```

## Basic Structure

JavaScript is reminiscent of many other computer languages, notably C, Java,
and C#.

```javascript
// lines beginning with two forward slashes are comments, or
/*
Larger comment blocks can be created this way. This is useful in cases where
more information needs to be written - everything between the markers is
commented out
*/

// basic statements use mathmatical inpired syntax.
// parentheses are used to group related items, and lines should end with a
// semi-colon to mark the end of the statement (more on this later)
var value = (1 + 2) * 3;


// curly braces are used to create blocks of code
function doStuff() {
  var first = 'value';
  console.warn('then do this');
  return 'result';
}
```

## Variables

Variables are used to store references to values, which is one of the
fundamental building blocks to writing code:

```javascript
var value = 1234;
var state = 'Colorado';
```

The `var` keyword defines a new variable and the `=` operator *assigns* values
to the variable. Unlike many other languages, variables don't have any
particular type - once it is defined, it can refer to anything.

Once a variable has been defined, you can change it later by assigning it a
new value:

```javascript.interactive
var value = 1234;         // the value reference is a number
value = 'something else'; // now it's a text value

return value;
```

## Basic Data Types

JavaScript has several primitive data types that support working with various
values:

* **String** - Represents text data
* **Number** - Numbers, including integers and floating point values
* **Boolean** - True or false values
* **Null and Undefined** - Special objects that represent *nothing*

### Strings

Strings represent text data, which are stored as sequences (*strings*) of
characters. If you're curious, strings are stored internally as two-byte,
UTF16-encoded text.

They are defined by enclosing the text value in single or double-quotes - it 
doesn't matter which you use, but the end quote must be the same as the
initial one:

```javascript.interactive
var sentence = 'The quick brown fox jumps over the lazy dog';
var language = "English";
```

Quotes can be embedded within strings either by using the opposite quote to
contain the value, or *escaping* the quote with a backslash:

```javascript.interactive
var message = "You can't do that";
var details = "She said to tell you \"hello\".";
```

### String Operators

Multiple strings can be combined together using the addition (`+`) operator.
Some languages have separate operators for text concatenation and numeric
addition - JavaScript uses the same operator.

```javascript.interactive
var first = "Stuart";
var last = "O'Malley";
return (first + ' ' + last);
```

Note that literal string references (`' '`) can be combined with variables
that refer to strings.

### String Properties and Methods

JavaScript objects typically have a number *properties*, which are referenced
using a period and the property name.

Strings have a `length` property that returns the number of characters in the
text:

```javascript.interactive
var value = 'abcd';
return value.length;
```

Strings objects also have quite a few
[methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype#Methods),
which support a wide range of common actions that can be performed on the
values. We'll cover these more in a bit in the functions section.

For instance, there are `toUpperCase` and `toLowerCase` methods that change
the value of the current variable:

```javascript.interactive
var value = 'shouting';
return value.toUpperCase();
```

### Numbers

JavaScript has one number type that can refer to whole numbers (integers) and
floating point numbers (decimals):

```javascript.interactive
var count = 42;
var factor = 2.34;
var negative = -0.5;
```

Basic math operators allow you to perform addition (`+`), subtraction (`-`),
multiplication (`*`), and division (`/`). Use parentheses to force the order
of operations:

```javascript.interactive
return (5 + 7) / 9;
```

### Boolean

Boolean values consist of two keywords: `true` and `false`

The *not* operator (`!`) inverts the value of a boolean expression:

```javascript.interactive
var enabled = true;
return !enabled;
```

### Null/Undefined

The final primitive types are `null` and `undefined`, which are used to
refer to uninitialized and non-existent values. The difference might seem a
little esoteric at the moment, but will be covered in more detail later.

Now might be a good time to mention the `typeof` function, which returns the
basic type of a value or variable.

```javascript.interactive
console.log(typeof 'abc');  // 'string'
console.log(typeof 123);    // 'number'
console.log(typeof false);  // 'boolean'
var ref;
console.log(typeof ref);    // 'undefined'
ref = null;
console.log(typeof ref);    // 'object' - yes, not a typo unfortunately...
```

## Collection Data Types

Lists and hashtables represent the two most fundamental generic data types
in programming languages. These provide the ability for you to store the
data you are using in your program among other things.

* *Lists* - define an ordered list of values, also called *arrays* or
  *vectors*
* *Hashtables* - define a collection of **key/value** pairs, also called
  *dictionaries* or *maps*

### Arrays

The `Array` object provides the ability to create lists in JavaScript. The
syntax uses square brackets and a comma separated list of values:

```javascript.interactive
var empty = []; // an empty array
var list = [ 1, 2, 3, 4 ]; // an array with values
return list.length;
```

Items within the list can be accessed using brackets and the index of the
item to access. Note that the index is *zero-based*:

```javascript.interactive
var colors = [ 'Red', 'Blue', 'Orange' ];
return colors[1]; // returns 'Blue'
```

This can also be used to update values in an array:

```javascript.interactive
var values = [ 0, 1, 2];
values[0] = 12;
return values[0];
```

### Array Values

Arrays can contain references to any JavaScript object, including primitive
values, other objects and arrays, function references, etc.

```javascript.interactive
var complex = [
  12,
  'text too',
  [ 'sub', 'array'],
  function() {
    // anonymous function reference
  }
];
// dereference multiple arrays
return complex[2][0];
```

In real world applications a particular array will usually contain the same
type of values.

### Array Manipulation

Array objects also have several
[methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods)
that allow you to manipulate lists in various ways. For instance you can add
items to an array using `push`:

```javascript.interactive
var list = [ 'first' ];
list.push('second');
return list;
```

and even join multiple arrays together:

```javascript.interactive
var numbers = [ 0, 1, 2, 3 ];
var values = [ 'this', 'that', 'other' ];
return numbers.concat(values);
```

### Objects

Objects are the other common basic data type, they store a list of key/value
pairs.  They are defined using curly braces and a collection of properties:

```javascript.interactive
var empty = {}; // an empty object
var options = {
  key: 'something',
  value: 100
}
return options;
```

As we'll see later, objects can also contain methods to perform actions and
manipulate it's properties.

Technically everything in JavaScript is an object, even the primitive
types we've been working with so far:

```javascript.interactive
// the parentheses are needed to keep the dot from being interpreted
// as a decimal
return (2).toString();
```

## Control Statements

Up to this point we've only seen static values and very simple calculations,
which aren't particularly useful. Programming languages provide an assortment
of statements that allow you to control what the computer does when it is
running your program.

### Conditional Statements

The most fundamental control statement is the *if*, *then*, *else* block that
lets you execute different code depending on the context.

At a minimum, the statement must start with `if(expression)`, and can be
followed by any number of additional statements as needed.

```javascript.interactive
var enabled = true;
if(enabled) {
  return 1234;
}
else {
  return 0;
}
```

### Looping Constructs

'for' loops provide the ability to execute a block of code a number of times.
The basic syntax is

`for(<loop initialization>; <truth test>; <increment statement>) { <block> }`

The *loop initialization* code is executed to start the loop, and the program
keeps executing the *block* statement as long as the *truth test* evaluates
to `true`. Each time the block runs, the *increment statement* is executed to
move to the next iteration in the loop.

A simple example looks like:

```javascript.interactive
var message = '';
for(var index = 0; index < 10; index++) {
  if(index > 0) {
    message += ', ';
  }
  message += index;
}
return message;
```

There are a couple of new concepts here:

* `++` is the increment operator, which adds one to the value
* `+=` is the add and assign shortcut - this statement is equivalent to
`message = message + index`
* Note that the addition operator performs text concatenation here - because
`message` is a string, the second argument is converted to a string as well

### Iterating Arrays

An extremely common pattern you will see an use is iterating over the items
in an array:

```javascript.interactive
var list = [ 0, 1, 2, 3, 4];
for(var index = 0; index < list.length; index++) {
  var item = list[index];
  console.log("value at " + index + " is " + item);
}
```

This uses a `for` loop to execute a block of code on each item in an array.

### Comprehensive Example

Here's an example that shows a more realistic chunk of code to perform a task.
Given a list of book objects, the code separates the titles into two lists
for fiction and nonfiction books.

```javascript.interactive
var books = [
  { title: 'A House in the Sky', type: 'Nonfiction', author: 'Amanda Lindhout and Sara Corbett' },
  { title: 'Empty Mansions', type: 'Nonfiction', author: 'Bill Dedman and Paul Clark Newell Jr.' },
  { title: 'Never Go Back', type: 'Fiction', author: 'Lee Child' },
  { title: 'Second Watch', type: 'Fiction', author: 'J.A. Jance' },
  { title: 'Si-ology 1', type: 'Nonfiction', author: 'Si Robertson with MArk Schlabach' },
  { title: "Still Foolin' 'em", type: 'Nonfiction', author: 'Billy Crystal' },
  { title: "The Husband's Secret", type: 'Fiction', author: 'Liane Moriarty' },
  { title: 'W is for Wasted', type: 'Fiction', author: 'Sue Grafton' },
];

var fiction = [];
var nonfiction = [];
for(var index = 0; index < books.length; index++) {
  var book = books[index];
  if(book.type === 'Fiction') {
    fiction.push(book.title);
  }
  else if(book.type === 'Nonfiction') {
    nonfiction.push(book.title);
  }
}
console.log('Fiction: ' + fiction);
console.log('Nonfiction: ' + nonfiction);
```

### Object Iteration

Loops can also iterate the keys in an object using the `for` ... `in` syntax:

```javascript.interactive
var addresses = {
  home: '744 Evergreen Terrace',
  work: '123 Something Ct',
  other: 'The moon'
};
for(var key in addresses) {
  console.log(key);
}
```

### The Switch Statement

The final common control statement simplifies the common pattern of running
a different block of code depending on the value of a variable:

```javascript.interactive
var level = 'error';
var message = 'Something happened';
switch(level) {
  case 'success':
    console.log(message);
    break;
  case 'warning':
    console.warn(message);
    break;
  case 'error':
    console.error(message);
    break;
}
```

This is equivalent to the following:

```javascript.interactive
var level = 'error';
var message = 'Something happened';
if(level === 'success') {
  console.log(message);
}
else if(level === 'warning') {
  console.warn(message);
}
else if(level === 'error') {
  console.error(message);
}
```


## Logical Statements

At the heart of controlling program logic is defining logical statements
that match the conditions that should trigger different behavior in a 
program.

### Equality Operators

JavaScript has two sets of comparison operators to test whether variables
match a certain value:

* `==` and `!=`: loose comparison, attempts to convert values to the same
time before comparing
* `===` and `!==`: strict comparison, only returns true if the arguments 
have the same type and value

For [various reasons](http://oreilly.com/javascript/excerpts/javascript-good-parts/bad-parts.html),
the first set can produce inconsistent and strange behavior, and it is 
typically recommended to only use the latter.

```javascript.interactive
var color = 'black';
if(color === 'black') {
  return 'dark';
}
else if(color === 'white') {
  return 'light';
}
else {
  return 'neither';
}
```

Note that when dealing with object references, this performs a *shallow*
check that two variables refer to the same object, not that the values are
the same

```javascript.interactive
var first = [1, 2, 3];
var second = [1, 2, 3];
console.log(first === second); // false even though arrays are identical
var third = first;
console.log(first === third); // true because variables refer to same array
```

### Numeric Comparisons

In addition to the equality operators, numeric comparisons are extremely
useful to test whether values fall into particular ranges:

```javascript.interactive
var score = 6;
if(score >= 7) {
  return 'great';
}
else if(score >= 5) {
  return 'ok';
}
else if(score > 0) {
  return 'poor';
}
```

Note that even though the second and third statements evaluate to `true`,
the code *short-circuits* and stops executing after the first statement that
matches.

### Boolean Logic Operators

We've already seen the `!` operator, which inverts the value of a boolean
statement. Two additional operators are essential for defining conditions:

* And (`&&`): returns `true` when both arguments are `true`
* Or (`||`): returns `true` if either argument is `true`

```javascript.interactive
var enabled = false;
var priority = 15;
if(enabled && (priority > 10)) {
  return 'first';
}
else if(!enabled || (priority === 5)) {
  return 'second';
}
```

Note that similar to the *if* statements described above, these operators
*short-circuit* once the outcome of the operator is known. For instance, if
the first argument in an *and* statement returns `false`, the interpreter
does not even evaluate the second statement (because the result is `false`
regardless of the second value).

### Boolean Coercion

A final note about boolean expressions is that JavaScript will coerce any
value in a statement to a `true` or `false` value in order to evaluate the
conditional block.

Several values are *falsey*, and thus evalute to `false` in a boolean
context:

* `false` - of course
* `0` - numeric zero
* `''` - empty string
* `null` and `undefined`

Everything else evaluates to `true`

```javascript.interactive
var value = '';
if(value) {
  return 'something';
}
else {
  return 'nothing';
}
```

This *usually* does what you want, but it often is often better to be as
explicit as possible when defining conditions to avoid 

## Functions

Functions allow you to create reusable chunks of code in order to simplify
writing program. In most realistic programs, certain functionality is used
over and over, therefore encapsulating that logic in a function organizes
the code better.

Functions take some input and produce an output (note that the input and 
output might be `null` or `undefined` depending on the circumstances).

Because functions are an essential aspect of working with JavaScript, there
is an upcoming section devoted specifically to how they work. For now,
we'll just cover the basics.

### Function Syntax

The basic syntax for defining a function is:

```javascript
var functionName = function(parameter1, parameter2) {
  // code goes here
  return result;
}
```

This actually defines an *anonymous* function, and assigns it to the
`functionName` variable. The parameter list can be zero or more variables
that will be passed to the function. The return statement is needed to
produce output - otherwise the function will return `undefined`.

Note that defining a function simply defines the logic contained within the
method, it *does not* actually execute the code. For instance:

```javascript.interactive
var safeLength = function(text) {
  if(!text) {
    return 0;
  }
  // convert parameter to a string if needed
  else if(typeof(text) !== 'string') {
    text = String(text);
  }
  return text.length;
}
// nothing happens until the following is uncommented
// return safeLength('some text');
```

Functions are executed, or *invoked*, using parentheses to supply arguments 
to the method: `var length = safeLength( theValue );`

