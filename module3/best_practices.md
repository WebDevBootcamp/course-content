# Best Practices

Best practices are often a subjective concept, and a source of great debate
(and less charitable conversation). However, there are many concepts that are
broadly accepted in the community as examples of better code. Many of these
apply broadly to any language or environment you might use.

**Learning Objectives**:

* Discuss practices that contribute to better code
* Explore areas of JavaScript that are commonly accepted to avoid
* Set expectations for common issues that all developers face

**Section Reading:**

* <http://addyosmani.com/blog/javascript-style-guides-and-beautifiers/>
* <http://docs.webplatform.org/wiki/tutorials/javascript_best_practices>

## Writing Good Code

There is no right answer for best practices, but thinking about these ideas
is an important part of continuing to improve as a developer.

Why we care about writing *good* code:

* Play nicely with other libraries
* Creating maintainable codebases
* Enabling people to collaborate effectively
* Avoid common pitfalls

> Break any of these rules sooner than say anything outright barbarous
>
> -- George Orwell

## Style Guidelines

The best developers tend to see their output as a craft - it's not good
enough to simply solve a problem, the code itself needs to be something
pleasant to look at.

The primary reason for this is that development is not simply writing code
the first time, but *maintaining* a codebase over a period of time. Well-
written code is easier to understand, modify, extend, and maintain.

*Easy to understand*:

```javascript.interactive
function fibonacci(size) {
  var first = 0, second = 1, next, count = 2, result = [first, second];

  if(size === 0)
    return [];
  else if(size === 1)
    return [0];

  // collect results up to the requested size
  while(count++ < size) {
    next = first + second;
    first = second;
    second = next;
    result.push(next);
  }
  return result;
}
return fibonacci(10);
```

*Um, not so much*:

```javascript.interactive
function fib(l) {
  for (var i=2,r=[0,1].slice(0,l);i<l;r.push(r[i-1]+r[i-2]),i++);
  return r;
}
return fib(10);
```

Note that this conflicts to some extent with the *prefer simpler solutions*
concept. Everything is a balance various goals.

### Popular Style Guideliness

The general consensus is not that any one particular style guideline is
necessarily better than any other, but that projects must have a *some*
consistent style. The stated goal is usually that the entire codebase should
look like it was authored by a single person.

* [Idiomatic.js](https://github.com/rwaldron/idiomatic.js/)
* [jQuery Style Guide](http://contribute.jquery.org/style-guide/js/)

### Code Linters

`lint` was originallt a C code checking tool that reported on potential
errors and potential defects, but now *linting* is the generic term for
tools that report on various aspects of code quality.

There are several tools for JavaScript such as [JSLint](http://www.jslint.com/)
and [JSHint](http://jshint.com/) that provide reports on questionale code.
These can either be run online, or more commonly installed as command line
tools and integrated as part of a build process.

The linters usually have options reporting on inconsistent style usage as
well as other common errors and pitfalls.

## Hoisted Variables and Globals

By default, variables declared without a `var` keyword are *hoisted* into
the global scope and declared as properties on the `window` object.

Global variables are usually considered a bad idea in programming because
they make code harder to read, can cause errors that are extremely difficult
to track down, and can cause collision issues when combining scripts from
various sources.

Most JavaScript runtimes support declaring `'use strict'` at the beginning
of a script, which causes undeclared variable references to throw an error.

```javascript.interactive
'use strict';
var good = 1234;
bad = 'error'; // 'bad' is not defined

// use the window object to explcitly define global variables if needed
window.myValue = 'global';
```

## Equality Operators

JavaScript has two sets of operators to test whether values are equal:

* `==` and `!=` perform basic type coercion (`'3' == 3 // true`)
* `===` and `!==` strict equality, tests whether values are identical

As described by Douglas Crockford in *JavaScript: The Good Parts*, this
has strange behavior in many cases:

<table class="table table-striped">
  <tr>
    <td>'' == '0'</td><td width="80%">false</td>
  </tr>
  <tr>
    <td>0 == ''</td><td>true</td>
  </tr>
  <tr>
    <td>0 == '0'</td><td>true</td>
  </tr>
  <tr>
    <td>false == 'false'</td><td>false</td>
  </tr>
  <tr>
    <td>false == '0'</td><td>true</td>
  </tr>
  <tr>
    <td>false == undefined</td><td>false</td>
  </tr>
  <tr>
    <td>false == null</td><td>false</td>
  </tr>
  <tr>
    <td>null == undefined</td><td>true</td>
  </tr>
  <tr>
    <td>' \t\r\n ' == 0</td><td>true</td>
  </tr>
</table>

Given the complicated and inconsistent behavior here, it is recommended
to not use `==` or `!=` and instead perform explicit type conversion in
cases where it is needed (`parseInt('3') === 3`)

One unfortunate feature that is lacking is JavaScript is easily testing
whether an object is defined or not. Implicit boolean conversion returns
`false` for both zero and empty strings, which is not always useful
behavior.

```javascript.interactive
if(value) {
  // won't get here if value is 0 or ''
}
if((value !== null) || (value !==kundefined)) {
  // need to check for null and undefined
}
```

## Tips for Code Organization

There is no *one true way* to organize or write code - every individual and
group ends up developing their own standards and practices.

File organization within a project tends to vary depending on project size
and complexity. For smaller projects, this is not as important, but as the
codebase gets larger and larger good organization can greatly simplify
working on the code.

Often files end up organized base on the content type within a project:

```
./project
  ./js      - scripts
  ./styles  - stylesheets
  ./img     - images
  ./tests   - unit tests
```

Many web-centric projects are moving to a more module-centric layout given
that most applications are a collection of many external projects.

```
./project
  ./components  - external projects
  ./services    - services and factories
  ./views       - user interface modules
    ./login
    ./actions
```

### Favor simplicity

Better code tends to be simpler. Avoid complex, confusing, or inconsistent
statements where something clearer would suffice.

For instance, when writing functions and modules:

* Use short, meaningful names
* Each function should do *one* thing
* Keep code short - if the function is more than 10 or 15 lines, think of
  ways to break it apart into separate tasks

```javascript.interactive
var addTask = function(task) {} // good
var addTaskToCurrentListOfItems = function() {} // bad

// good
var updateStatus = function() {}
var syncTasks = function() {}

// bad
var updateAndSync = function() P{}
```

### Be prepared to refactor and rewrite

Finally, don't be afraid to throw things away and start over. Even among
experienced developers there is a process of iteration to solve any complex
problem.

Many times we are faced with *hacks* and *workarounds* to fix an annoying
issue - these are acceptable to keep a project moving forward, but the
non-elegant solution should not sit well, and you should be looking for a
better solution down the road.

> The best writing is rewriting  -- E.B.White
>
> First do it, then do it right, then do it better -- Addy Osmani

### Be Pragmatic

[The Pragmatic Programmer](http://pragprog.com/the-pragmatic-programmer/extracts/tips)
is a great reference for common practices that yield better code. This list
is fairly long, but they are definitely good ideas to reflect on.

Some of my favorites:

**Care About Your Craft**

Thinking about quality is an interative process like any other development
task.

**Don't Repeat Yourself (DRY)**

> Every piece of knowledge must have a single, unambiguous, authoritative
> representation within a system

In practice this means writing code that separates concern throughout the
application and avoiding copying and pasting blocks of code for minor
variations.

The tongue-and-cheek alternate to this is WET, which means *Write Everything
Twice*.

**Eliminate Effects Between Unrelated Things**

This minimizes complexity and makes code easier to test and debug.

Functional techniques are a great way to accomplish this.

**Use the Power of Command Shells**

Development is largely a task of processing text, and command line oriented
tools can simplify many common tasks.

**Always Use Source Control**

Commit early and commit often.

And remember, commit messages are notes to yourself (and others)in the future.
Of course you know why you are doing something right now, but you will not
remember the details as well when you are fixing a related problem in six
months.


