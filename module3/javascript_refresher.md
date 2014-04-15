# JavaScript Refresher

The following pages provide a quick recap of the concepts covered regarding
basic JavaScript syntax. Use this as a cheat sheet regarding the imporant
key aspects of the language

## Basic Types

What are the basic types in JavaScript?

### Primitive Types

* String - (use `'single quotes'` or `"double quoteb"`)
* Number - `123.45`
* Boolean - `true` or `false`
* `null`
* `undefined`

### Undefined and Null

`undefined` refers to a value that has not been initialized or a property that
does not exist:

```javascript.interactive
var value;
return value;
```

`null` is used as a placeholder for a variable that currently has an empty
value.

```javascript.interactive
var value = null;
return value;
```

The difference is subtle, but the typical usage is to distinguish between
non-existent and empty values.

## Collection Types

What are the two basic collection types used by programming languages?

### Arrays and Objects

* `Array` is an ordered list of values, also known as a list or vector
* `Object` is a collection of key/value pairs, also known as a hashtable
  or dictionary

```javascript.interactive
var list = []; // empty array
var obj = {} // empty object
var numbers = [ 1, 2, 3 ];
var book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  published: 1960
};
```

You can nest objects and arrays as needed to create more complex data types.

## Syntax

How can the following be used in JavaScript:

* Square brackets - `[]`
* Curly brackets - `[]`
* Parentheses - `()`
* Equals - `=`

### Square Brackets

Square brackets are used to define new arrays:

```javascript.interactive
var list = [
  'Red',
  'Green',
  'Blue'
];
```

> It is best practice to leave off the trailing comma, this will cause problems
> in some environments

### Square Brackets

Square brackets are also used to refer to indexed values within arrays and
objects.

For arrays, the key is the zero-based numeric index of item:

```javascript.interactive
var list = [ 1, 2, 3 ];
var first = list[0]; // 1
var index = 1;
var second = list[index]; // 2
return list;
```

For objects, the key is the text value of the object property:

```javascript.interactive
var item = {
  status: 'New',
  priority: 10
};
var status = item['status']; // 'New'
var key = 'priority';
var priority = item[priority]; // 10
return item;
```

### Curly Brackets

As we've seen above, curly brackets are used to define new objects.

```javascript.interactive
var test = { first: 1, second: 2};
```

The keys do not need to to be quoted if they do not contain spaces, and similar
to arrays it is best practice to leave off the trailing comma.

```javascript.interactive
return {
  'key with spaces': 'this works too'
}
```

### Curly Brackets

Curly brackets are also used to define *blocks*, which are sections of code
that are executed together (associated with a function or control statement).

```javascript.interactive
function doSomething(list) {
  // this is a block associated with a list
  for(var index = 0; index < list.length; index++) {
    // this is another block for the for loop
  }
}
```

The content of each block should always be nested one indent level (typically 
2 spaces). The opening bracket should either trail the statement that defines
the block like above, or be on it's own line:

```javascript.interactive
function differentStyle()
{
  // this is ok too, just be consistent
}
```

### Parentheses

Parentheses are used to group statements together to control the order of
execution:

```javascript.interactive
var result = (1 + 3) * 5;

// the also are helpful to group logical statements to make them easier to read
if((status === 'new') && (priority > 10)) {
}
```

### Parentheses

Parentheses are also used to invoke functions by supplying zero or more
arguments:

```javascript.interactive
var statement = 'a message from me';
return statement.toUpperCase();
```

### Equals

A single equals sign is used to assign values to variables or properties:

```javascript.interactive
var value = 123; // first it's a number
value = 'text'; // now it's a string

// this works to assign to list items and object properties as well
var list = [];
list[0] = value;
var obj = {};
obj.status = 'new';
obj['priority'] = 1;
return obj
```

### Equals

`===` and `!==` comparison operators to determine if variables have the same
value.

```javascript.interactive
var test = 1 + 5;
if(test === 6) {
  console.log('Math works!');
}
else {
  console.error('Math is broken :(');
}
```

It is important to remember these perform *reference* comparisons, so they
will not perform a deep comparison of array and object values.

> The `==` and `!=` operators have strange behavior associated with type
> conversion and it's usually recommended to not use them

## Control Statements

Name the basic control statements used to define logic in a program...

## if

`if` is used to test for conditions and optionally execute blocks of code
when needed. It can be combined with any number of `else if` statements, and
optionally a single trailing `else` block as a catch-all.

```javascript.interactive
var value = 10;
var result;
if(value > 100) {
  result = 'big';
}
else if(value > 50) {
  result = 'medium';
}
else {
  result = 'small';
}
return result;
```

> Once one statement in the collection returns true, the associated block is
> executed and the other statements are ignored, even if their conditions
> hold true as well

## for

`for` is used to iterate a block of code over a collection. The most common
use is to iterate through an array:

```javascript.interactive
var list = [ 9, 10, 11 ];
var sum = 0;
for(var index = 0; index < list.length; index++) {
  sum += list[index];
}
return sum;
```

## for

`for` has an alternative syntax that can be used to iterate through the keys
in an object:

```javascript.interactive
var toy = {
  name: 'truck',
  color: 'red',
  price: 3.50
};
for(var key in toy) {
  console.log('key ' + key + ' is ' + toy[key]);
}
```

## while

`while` provides a different looping construct that continues as long as
the condition returns true. For instance, the previous for loop example can
be written as:

```javascript.interactive
var list = [ 9, 10, 11 ];
var sum = 0;
var index = 0;
while(index < list.length) {
  sum += list[index];
  index++;
}
return sum;
```

## switch

`switch` is very similar to a set of `if`, `else if`, `else` statements that
compare a single value:

```javascript.interactive
var grade = 'A';
switch(grade) {
  case 'A':
    console.log('great!');
    break;
  case 'B':
    console.log('pretty good');
    break;
  case 'C':
    console.warn('normal');
    break;
  case 'D':
    console.error('doh');
    break;
}
```

## Functions

What is the syntax for defining a function?

### The function statement

Functions are defined using the `function` statement, a list of parameters,
and the body of code associated with the function.

```javascript.interactive
function doSomething(firstParam, secondParam) {
  return firstParam + ' - ' + secondParam;
}
return doSomething('this', 'that');
```

The example above is a *named* function declaration, functions can also be
defined *anonymously* and assigned like any other value:

```javascript.interactive
var anonymous = function(value) {
  return value * Math.rand();
}
return anonymous(3);
```

The choice of which to use is largely a question of style, though the latter
syntax usually works better for callbacks and methods defined on objects.

### Function scope

JavaScript has function-level scope, meaning any variables defined within
a function only visible within that block (and any nested blocks/functions).
Values defined in this scope do not *leak* up to the containing scope.

```javascript.interactive
var list = [];
function compare(a, b) {
  // list is visible in this scope
  var last = [ a, b ]
  return a - b;
}
list.sort(compare);
// 'last' is not visible in this scope
```

> Unlike many other languages, only function blocks define a new scope in
> JavaScript - blocks associated with for loops, etc *hoist* any variable
> declarations to the top of the containing function

