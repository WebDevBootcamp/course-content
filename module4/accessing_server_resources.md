# Accessing Server Resources

## Variations

Web applications have added complexity compared to more traditional
applications because code can execute on either the server side or the client
side. Knowing where things are executed is essential to adding new
functionality or tracking down issues.

Benefits of server-side applications

* More computing resources available typically (especially for mobile users)
* Easier integration into backend resources like databases, file systems, etc
* Better support for search engines

Client-side benefits:

* Quicker response times because there is no server round-trip
* Easier debugging in many cases using browser development tools
* Less network transfers (static resources plus data, full HTML is not transferred)


## Data Exchange Formats

* HTML text fragments (old school AJAX, rarely used any more)
* XML - still used by some backend servers, difficult to consume in JavaScript
* JSON (JavaScript Object Notation) - easiest to use in JavaScript since it is
  essentially the native format
  * JSONP - cross domain workaround, being supplanted by CORS

### JSON

JSON has become the de-facto standard for exchanging data between systems on
the web. It is much simpler than XML, and has support across a wide variety
of environments.

Current browsers provide `JSON.stringify` and `JSON.parse` methods to convert
between JSON and string representations for serializing data:

```javascript.interactive
var data = {
  key: 'something',
  value: 12,
  colors: [ 'Red', 'Green', 'Mauve' ]
}
return JSON.stringify(data);
```

One significant drawback with JSON is that is has no native support for date
values - there are various techniques for formatting dates to text such that
they are consistently handled.

## $.ajax

## XMLHttpRequest

## Cross-Domain Requests

