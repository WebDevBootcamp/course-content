# Debugging Resources

Tracking down issues in code (yours and other's) is an essential skill for any
developer. Efficiently diagnosing the underlying cause of a defect is the first
step in fixing the problem and moving on to the next task.

Resources:

* <http://discover-devtools.codeschool.com/>
* <http://addyosmani.com/blog/performance-optimisation-with-timeline-profiles/>

## Reporting Issues

Issues are almost impossible to fix if they cannot be reproduced. This is
needed to track down the underlying defect in the software, and is also an
essential part of verifying any fix.

The key goal in reporting an issue is *steps to reproduce*:

* Provide a succinct list of the exact steps needed to reprocude the issue
* Try variations in the data and other details to try to determine if there
  are data dependencies
* Platform and environment details can also be essential in many cases

## Online Resources for Reporting Issues

When working with collaborative projects, particularly open source software and
other code maintained by others, it is essential to be able to clearly
demonstrate an issue so that someone else can see the behavior in question.
These tools can be extremely helpful in that regard:

* <http://jsfiddle.net/>
* <http://jsbin.com/>
* <http://codepen.io/>

Ideally, start from scratch when building the repro case:

* Keeping the sample as simple as possible is essential for others to help
* Examining dependencies in the code can provide an idea of the underlying
  behavior
* Starting over often yields the solution as part of the process

## Development Tools

All modern browsers provide powerful tools for interactively inspecting and
debugging web applications.

Each tool provides some sort of:

* Inspect elements on the page and interactively change styles and other
attributes
* Trace network requests
* View included scripts and interactively debug execution
* Monitor and trace

## Interactive Debugging

The interactive JavaScript debugger is the most powerful tool available to
track down issues. This allows you to step through code as it's executing,
examine the state of the application, and even change information if needed to
see if that has any impact.

*Breakpoints* allow you to tell the JavaScript interpreter to stop at a
particular point of execution.

Also, you can add a `debugger` statement in a code block to force a breakpoint
(the console must already be open for this to work)

## Source Control

Source control can also be an essential tool to identify when a defect was
introduced to the codebase.

* `git stash` quickly hides uncommitted changes to compare against the original
  code
* Use branches to isolate various features
* Checkout various commits from history to determine which change introduced an
  error

## Brute Force Techniques

Finally, there are often times where you will need to instrument the code you
are working with to provide enough information about what is happening:

* The `console` object allows you to print statements in the JavaScript console
  so you can inspect the underlying behavior of the application
* Similarly `alert` can be used to pop up a message at some point during
  execution
* Use block comments (`/* <code> */`) to selectively enable and disable various
  parts of your application to isolate a problem

