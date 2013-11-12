# Unit Testing Frameworks in JavaScript

The flexibility of JavaScript and other dynamic languages comes at a price -
as applications get larger and larger they become increasingly difficult to
maintain. Unit testing is an essential practice to develop applications that
are robust and easier to maintain over the long term.

Learning objectives:

* Understand basic concepts of test driven development
* Refactor code to make it more testable
* Use the Mocha JS framework to implement tests for a basic application

## Testing Applications

Automated testing the the concept of writing *code* that validates whether
other *code* works as it is supposed to. This is in contrast to manually
operating an application to verify that it works correctly (*gorilla testing*).

The goal of a well-tested application is to have a suite of tests that prove
the application does what it is supposed to do.

Testing is usually broken down into a couple of different categories:

* Unit testing - tests that cover individual functions or *units* within the
  application
* Integration tests - validate the interaction between related units and modules
* Acceptance tests - ensure that user requirements are met

## Why Test?

* Find problems early - unit tests are great for validating code as it is
  written
* Prevent regressions - when tests cover the current working functions, changes
  that break existing code will generate failed tests
* Encourage modular code - developing code that is easily testable typically
  yields well organized and loosely coupled code
* Simplify collaboration - failing tests are a great way to communicate
  features that need to be fixed

*Test coverage* is the concept of how much of an application is adequately
covered by the unit test suite. While it is probably not possible to reach 100%
coverage, better coverage is usually a good indicator of the quality and
maintainability of an application.

## Test-Driven Development

Integrating testing early into the development process is an important practice
for any software development. Backfitting unit tests onto an existing
application is typically fairly difficult, and time constraints and other
pressures often causes testing to be relegated behind other tasks.

> Write tests
>
> Write code that passes the test
>
> Profit!

For purely test-driven methodologies, this means that tests are the first code
that is written - no production code can be written unless it causes a
related unit test to pass.

## Opportunities to Write Tests

Let's face it, we all write less test code than we *should*. Pure test driven
development is great in theory, but in practice most organizations don't have
the time or resources to fully implement it.

There are additional opportunities where writing tests can be particularly
beneficial:

* When a defect is found - once something is fixed, it should stay fixed
* When writing new features - helps prove new functionality works correctly
* When refactoring code - a great opportunity to rewrite as testable code

## Testing Frameworks

There are several popular frameworks for writing unit tests for JavaScript
applications. These can be broken down into a couple of categories:

* **Testing Framework** - the code and other dependencies needed to declare
  and run tests
  * [Mocha](http://visionmedia.github.io/mocha/) - great asynchronous support
  * [Jasmine](http://pivotal.github.io/jasmine/) - very simple to use
  * [QUnit](http://qunitjs.com/) - part of the jQuery suite of libraries
* **Assertion Library** - the assertion library provides the syntax for
  defining the conditions that are required for the test to succeed
  * [Chai](http://chaijs.com/)
  * [Expect](https://github.com/LearnBoost/expect.js)
  * QUnit and Jasmine provide their own assertion syntax for use in tests
* **Test Runner** - supports running the test in various environments to
  verify if the tests pass
  * Browsers - all of the frameworks above provide a mechanism for loading
    the tests directly in a browser
  * [PhantomJS](http://phantomjs.org/) - headless, webkit-based browser for
    running tests automatically and from the command-line
  * [Karma](http://karma-runner.github.io/0.10/index.html) - supports both
    headless tests, and automatically running on devices and browsers

## Quick Tour

Before going any further, let's take a brief look at what some simple tests
look like in practice.

```javascript
// set up a collection of tests
describe('Sample module', function() {

  // declare a test case
  it('should record a value correctly', function() {
    // set up the context
    var module = new Module(12);

    // assert that the code works as desired
    expect(module.value()).to.equal(12);
  })

  // define additional tests
  it('should provide a method to double the value', function() {
    var module = new Module(123);
    expect(module.double()).to.equal(246);
  });

  // continue testing...
});
```

Most of the test frameworks provide a *declarative* syntax that is
self-documenting and easy to write.

Tests typically follow the pattern of

* *Setup* - construct the environment needed by the test
* *Act* - execute the code in question
* *Assert* - verify the expected behavior

## Keys to Writing Good Tests

Writing good code and writing good tests are complementary.

* Test one thing at a time - this goes hand in hand with wriing modular code
* Write non-trivial tests - there is no reason to test things that will never
  occur
* Only test your code - when dealing with external libraries, test integration
  with the library but not necessarily that the library works correctly
* Watch the test change from failing to passing - this helps eliminate false
  positives

> Treat code that is difficult to test as a defect - this is as important as
> having the code function correctly

## Adding Mocha to a Project

As mentioned on the [Mocha](http://visionmedia.github.io/mocha/) page, you will
typically install in using Node and run from the command line.

You also can manually add it to a project if you don't have the command line
tools installed:

* Copy the Mocha and Chai files into the project manually or as git submodules
* Copy the `lib/template.html` file to use as a basic test runner
* Create a `test.js` file to contain application test suite
* Include the Mocha and Chai libraries in the template page, and initialize
  them with:

```html
<script src="./mocha/mocha.js"></script>
<script src="./chai/chai.js"></script>
<script>
  // initialize the framework
  mocha.setup('bdd');
  var expect = chai.expect;
</script>
<!-- include the local tests -->
<script src="tests.js"></script>
<script>
  // run the available tests
  mocha.run();
</script>
```

## Writing a Basic Test Suite

The `describe` function is used to define a test suite, which provides a way to
organize related tests. It takes a callback method that declares the individual
tests:

```javascript
describe('First Module', function() {
  // tests go here
});
describe('Second Module', function() {
  // suites can be nested to further organize things if desired
  describe('Second Module', function() {
  });
});
```

## Writing Tests

The `it` function is used to define individual tests within a test suite. This
takes two arguments: a description for the test (usually beginning with
*should*), and a callback that executes the test case.

```javascript
describe('First Module', function() {
  it('should do the thing that it does', function() {
    var thing = new Thing();
    expect(thing.doIt()).to.be.true;
  });
});
```

The `expect` function describes the expected behavior of the test - there can
be any number of expect calls, but remember that tests will ideally only test
for one behavior of an application. behavior of an application. behavior of an application. behavior of an application.

The [Chai BDD Assertions](http://chaijs.com/api/bdd/) library has many examples
of how to write assertions to verify that code executed correctly.

## Running Tests

Once your test has been defined, load the test HTML page in a browser to verify
that it passes. As mentioned before, there are a couple of options for running
your tests:

* **Manually in a Browser** - This is usually the easiest way to get started,
  plus you can use the browser debugging tools to step through code to track
  down and fix problems. This also makes it easy to verify functionality
  across multiple browser environments

* **Command Line Runners** - Useful for integrating with build scripts and
  other automated tools

