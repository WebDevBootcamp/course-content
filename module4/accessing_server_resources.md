# Accessing Server Resources

Most web applications depend on server resources to provide additional
functionality, storage, and other capabilities.

Learning objectives:

* Understand common client/server architectures for web applications
* Understand data exchange formats
* Use jQuery.ajax to request web services

Section reading:

* <http://learn.jquery.com/ajax/>

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

### Architectures

**Web Services** - This is a generic term for requests to a server for
data operations, in contrast to requesting web pages, images, etc. This
will often be used to request complex data from the server (from a database,
etc), store resources on the server, and other transactions from user
interactions.

**REST APIs** - *Representative state transfer* is a web service API style
that encodes details about the web service structure into the AJAX request.
For instance, you might have:

```
GET /services/books/ - returns list of available books
GET /services/books/book_title/ - returns details about a particular book
POST /services/books/book_title/ - updates details about a book
GET /services/authors/ - list of authors
...
```

**Single Page Applications** - This is an increasingly popular archicture for
creating complex applications on the web. The server only provides static
resources (scripts, stylesheets, etc) and the HTML page is typically an
empty shell that is populated by JavaScript after the page loads.

This is sometimes referred to as *data on the wire*.

## Data Exchange Formats

AJAX stands for *asynchronous JavaScript and XML*. The *asynchronous* part
is because requests will take an unknown amount of time to complete,
*JavaScript* refers to the fact that it is executed within a scripting
environment, and *XML* is a vestigial term regarding the data being
exchanged.

All client-server interactions must use a data format that is agreed upon as
part of the API:

* HTML text fragments (old school AJAX, rarely used any more)
* XML - still used by some backend servers, difficult to consume in JavaScript
* JSON (JavaScript Object Notation) - easiest to use in JavaScript since it is
  essentially the native format
  * JSONP - cross domain workaround, being supplanted by CORS

### JSON

[JSON](http://www.json.org/) has become the de-facto standard for exchanging
data between systems on the web. It is much simpler than XML, and has support
across a wide variety of environments.

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

`JSON.parse` does the opposite of stringify - it converts string data into
a JavaScript object structure. In general it is safer than using the native
JavaScript `eval` function because it does not allow code to be executed
during parsing.

One significant drawback with JSON is that is has no native support for date
values - there are various techniques for formatting dates to text such that
they are consistently handled.

## XMLHttpRequest

[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
is the underlying object provided by browsers that supports requesting
additional resources from the server.

It provides a callback-based API that allows requests to be submitted, and
have your code notified when results are successfully received or an error
occurs.

## $.ajax

The jQuery `ajax` method simplifies access to the *XMLHttpRequest* request
object and is the de-facto mechanism for requesting server resources.

The basic format for requesting a resource is:

```javascript
$.ajax({
  url: '/web_service/url', // path to request
  type: 'GET', // (or 'POST')
  success: function(data) {}, // success callback
  error: function(xhr, status) {} // error callback
});
```

### Public APIs

Many services provide public APIs that you can consume to add additional
information to your website. These include:

* [Twitter](https://dev.twitter.com/docs/api)
* [GitHub](http://developer.github.com/v3/)
* [Flickr](http://www.flickr.com/services/api/>)
* [Google Maps](https://developers.google.com/maps/documentation/javascript/)

Most of the APIs require some sort of authentication, so using them in
practice can be a little tricky.

```javascript.interactive
$.ajax({
  url: 'https://api.github.com/users/WebDevBootcamp/repos',
  type: 'GET',
  success: function(data) {
    console.log("Repositories: " + _.pluck(data, 'name'));
  },
  error: function(xhr, status) {
    console.error('error: ' + xhr.statusText);
  }
})
```

## Cross-Domain Requests

For security reasons, web pages are typically restricted to a *same origin
resource policy* when accessing additional resources. This means that a page
from *http://www.example.com* can access other resources under *example.com*,
but is prevented from accessing *http://www.example2.com*.

### CORS

[Cross-origin resource sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
(CORS) is a standard that allows web pages to request web resources from
different origins. CORS support must be available and configured on the
server, so this is usually only an option when you have some control over the
server architecture.

### JSONP

[JSONP](http://en.wikipedia.org/wiki/JSONP) is an older workaround/hack to
support loading scripts from other domains. It takes advantage of the fact
that `script` tags can access resources from any location, so an AJAX
request is made to download by adding a script element to the DOM.

This requires the response to be wrapped so the data can be accessed as
the script is loaded, so it requires configuration on the server side as
well.

