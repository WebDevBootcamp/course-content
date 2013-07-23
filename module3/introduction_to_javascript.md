# Introduction to Programming Using JavaScript

This section provides an introduction to computer programming languages using
JavaScript.

Prerequisite reading material:

 <http://docs.webplatform.org/wiki/concepts/programming/programming_basics>

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
value = 'something else'; // now it is a string

return value;
```

## Basic Data Types

### Strings

### Numbers

### Boolean

### Null/Undefined

### Objects

Control statements
if/else
for
switch
Functions
Arrays
Objects
Exception handling

