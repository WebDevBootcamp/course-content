# Best Practices

Best practices are often a subjective concept, and a source of great debate
(and less charitable conversation). However, there are many concepts that are
broadly accepted in the community as examples of better code. Many of these
apply broadly to any language or environment you might use.

Activity reading:
* <http://docs.webplatform.org/wiki/tutorials/javascript_best_practices>
* <http://contribute.jquery.org/style-guide/js/>

## Style Guidelines

## Hoisted Variables and Globals

## Equality Operators

## Tips for Code Organization

### Favor simplicity

Better code tends to be simpler

For instance, when writing functions:

* Use short, meaningful names

```javascript
var addTask = function(task) {} // good
var addTaskToCurrentListOfItems = function() {} // bad
```

* Each function should do one thing
* Keep the code short - if the function is more than 10 or 15 lines, think of
  ways to break it apart into separate tasks

### The *DRY* principle - don't repeat yourself

### Separation of concerns

### Be prepared to refactor and rewrite

