# Asynchronous Programming

Given that the JavaScript runtime is single-threaded, it can be difficult to
ensure that processor-intensive tasks are executed in a manner that doesn't
prevent the UI from being responsive

## What is Asynchronous?

It is important to know whether resources in JavaScript are synchronous or
asynchronous. Synchronous code means the result can be returned relatively
immediately, so the application will block until the action is complete.
With asynchronous resources, it can be hard to know how long an operation will
take, so the results are typically provided through a callback.

This includes:

* Fetching server resources (AJAX)
* Working with local databases
* Accessing hardware resources (geolocation, camera, etc.)

## setTimeout/setInterval

## Error Handling and Exceptions

## Promise/Deferred APIs

## Publish/Subscribe Pattern

