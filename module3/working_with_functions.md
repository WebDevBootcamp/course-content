# Working with Functions

Writing functions is one of the key aspects of writing computer programs - this
is how we break down what the program needs to do into managable chunks.

Additionally, because functions are so easy to create and manipulate in
JavaScript, writing applications in a more *functional* style is a good way
to take advantage of the things JavaScript does well. It's also an essential
techinique for writing applications that run in a single-threaded, event
driven environment.

**Learning Objectives**:

* Learn how to decompose problems into functions
* Practice separating function definitions from the implementation
* Explore the difference between functional and imperative design

**Section Reading**:

* <http://docs.webplatform.org/wiki/concepts/programming/javascript/functions>

## Decomposing Problems into Functions

In mathematics, a *function* is a relation between a set of *inputs* and a set
of potential *outputs* with the property that each input is related to exactly
one output.

![Black Box Diagram](http://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Blackbox.svg/500px-Blackbox.svg.png)

Functions will produce the same output given the same input, but the reverse
is not necessarily true.

JavaScript functions can take any number of input parameters, but can only
return a single value. However, by returning arrays and objects they can
return arbitrarily complex data.

### Basic Example

The process of writing a function involves the following:

* **Requirements** - A clear definition of what the function does
* **Interface** - Next, determine what the input and output need to look like
  * Try to concentrate on the requirements rather than how the function will
    work
  * The input should be the minimum amount of information needed to accomplish
    the task. This keeps the code simpler, and makes it easier to test.
* **Implementation** - Now write the code that performs the function logic
* **Testing** - Finally, verify that the function works as it is supposed to
  * Depending on the requirements, various cases might need to be covered to
    ensure that everything works
  * Later, we'll cover unit testing which formalizes this process a bit

Note that this is a just a basic guideline, in practice you'll often need to
interate through these steps to finish writing your code.

### Basic Example

> Write a function that returns the number of words in fragment of text.

* What should the input and output look like?
* What name should the function have?

```javascript.interactive
// code will go here
```

### Basic Example - Requirements

> Write a function that returns the number of words in fragment of text.

Basic requirements might look like:

* **Input** - At a minimum, this will take a parameter that is the text fragment
  * Consider additional possibilities (in this case, maybe options for what is 
    considered to be a word, etc). For this example we'll consider text
    separated by whitespace or punctuation to be a word
* **Output** - The number of words in the text
  * Think about what the result should be in error cases (the input is not
    provided, is not the right data type, etc). In this case we'll keep it
    simple and just return 0

### Basic Example - Interface

We begin by defining the function skeleton and document the interface:

```javascript.interactive
// Counts the number of words in a text fragment
// * {string} text - the text to process
// * Returns the number of words in the fragment
var wordCount = function(text) {
}
```

Keep in mind the naming conventions we mentioned earlier, it is important to
give things simple and clear names.

Also, notice that we haven't been thinking about *how* we're going to implement
the code, just the basic definition of the function.

### Basic Example - Implementation

Now it is time to think of how to implement the code. There will usually be
many ways to accomplish the task, each with pros and cons. In general, prefer
the most straightforward choice, as this will be the easist for others to
understand.

For instance, one simple method to implement the function might be to use the
`String.split` method to break the text into a list of tokens based on a
regular expression, and return the length of the list.

```javascript.interactive
var wordCount = function(text) {
  // split the text on spaces
  var tokens = text.split(' ');

  // count the non-empty words
  var count = 0;
  for(var index = 0; index < tokens.length; index++) {
    if(tokens[index]) {
      count++;
    }
  }
  return count;
}
```

### Basic Example - Refactoring

Another reason to separate interface from implemenation, is that if you do it
well it will often be possible to replace the internal implementation if needed.
As long as the interface doesn't change, code that uses the function will
continue to work.

For instance the previous example might not be optimal if the function needs to
handle large blocks of text. Using the `split` function will create a new array
of each word, which will use more memory in the input text is potentially very
large.

An alternate implemenation might iterate over the characters and update a count
based on word boundaries:

```javascript.interactive
var wordCount = function(text) {
  var count = 0;
  var previous = ' '

  for(var index = 0; index < text.length; index++) {
    // count spaces that are preceded by non-whitespace
    if((text[index] === ' ') && (previous !== ' ')) {
      count++;
    }
  }

  // handle trailing word
  if(previous !== ' ') {
    count++;
  }

  return count;
}
```

### Basic Example - Testing

Finally we can test that the function works as expected, and handles potential
edge cases.

```javascript.interactive
var wordCount = function(text) {
  var count = 0;
  var previous = ' '
  for(var index = 0; index < text.length; index++) {
    if((text[index] === ' ') && (previous !== ' ')) {
      count++;
    }
  }
  if(previous !== ' ') {
    count++;
  }
  return count;
}

// first test that it works on normal input
console.log(wordCount('one two three four'));
console.log(wordCount('He said, "Watch out!"'));

// verify some edge cases
console.log(wordCount(' What about leading and trailing characters?'));
console.log(wordCount()); // input not specified
console.log(wordCount(123)); // non-text input
```

A quick note about edge cases - code does not need to handle each and every
possible set of inputs that can be thrown at it. Otherwise your code becomes a
complicated jumble where a large portion of the code is never used.

It is ok for the documentation to specify restrictions on the input, and fail
if those restrictions aren't met. In general, it is a good idea to provide more
error checking and handling for code that is accessed by external components,
and simplify internal interfaces where you control where it is used.

### Variable Scope

Scope is a potentially confusing, but extremely important concept in any
programming language. All code executes within a particular *scope*, which
means the context of variables and data that it has access to.

Each function in JavaScript is executed within it's own scope, so variables
defined within the function are only available when the function is executing.
Blocks can access variables from the parent scope they are defined in, but
not child or sibling code.

```javascript.interactive
var outer = 'outer'
var first = function() {
  var inner = 'first';
  console.log('First - Outer: ' + outer + '  Inner: ' + inner);
}
var second = function() {
  var inner = 'second';
  console.log('Second - Outer: ' + outer + '  Inner: ' + inner);
}
first();
second();
// this is an error - 'inner' is not defined in this scope
console.log('After - Outer: ' + outer + '  Inner: ' + inner);
```

### Nested Scopes

As we saw, unctions at the same cannot see each others' internal scope.
However, if a function is defined within another scope block, it has access
to the parent scope:

```javascript.interactive
var parent = function() {
  var parentValue = 1234;
  var level = 'parent';

  // define and execute a child function
  var child = function() {
    var childValue = 5678;
    // parentValue is accessible because scope is nested
    console.log('in child: ' + parentValue + ' - ' + childValue)

    // shadowed variable
    var level = 'child';
    console.log('child level: ' + level);
  }
  child();

  // note that shadowed value does not modify the value in this scope
  console.log('parent level: ' + level);
}
parent();
```

Note the *shadowed* variable in the child function. The use of the `var`
keyword defines a new variable, even though it has the same name as the
value in the parent scope.

This practice is usually discouraged, it results in code that is harder to
understand.

### Side Effects

*Side effects* in this context refer to changes that happen outside the scope
of the function.

```javascript.interactive
var count = 0;
var addToCount = function(value) {
  count += value;
  return count;
}
// notice that we get a different answer calling the function with
// the same argument - this is because 'count' is outside the scope
// of the function
console.log('First: ' + addToCount(5));
console.log('Second: ' + addToCount(5));
```

In general, it is considered good practice to minimize side effects to the
extent possible, because they can introduce behavior that is difficult to
test under complex situations. In practice, there are good reasons to modify
things outside the scope of a function. Documenting and testing these
dependencies is important, and you can think of them as additional input and
output parameters.

## Callback Functions

Callbacks can handle cases where simple return values won't suffice for several
reasons:

* Asynchronous code - the initial function returns before the operation is
  complete, so a callback is needed to return the results
* Error handling - supports returning both success and error information
  through separate callbacks

```javascript.interactive
// asynchronous example
var asyncFunction = function(callback) {
  // do something that is not available immediately
  setTimeout(callback, 1000);
}
console.log('before invoke');

// setup a callback function and invoke the method
asyncFunction(function(message) {
  console.log('in callback');
});


console.log('after invoke');
```

This uses the [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/window.setTimeout)
function, which takes a callback parameter and executes the function after
the specified number of milliseconds has elapsed.
