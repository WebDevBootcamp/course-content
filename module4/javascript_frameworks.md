# JavaScript Frameworks

The JavaScript development scene is becoming increasingly complicated given the
number of new projects that are starting up every day. Many of these seek to
address some of the underlying shortcomings of JavaScript and improve
developer productivity.

## Assessing Third-Party Projects

If you're playing around with code, there is a lot of freedom when working with
other projects. However, for production code and projects, it is essential to
exersize some restraint in choosing tools that will add benefits without
causing more pain in the future

* How active is the project? - not just recently, but over a sustained period of
  time
* Examine the developer and support community
* What does the documentation look like?
* Are there significant contributors and users?

## Frameworks

jQuery works well for simple DOM interactions, but more complex applications
will typically be built with additional tools (many of which use jQuery
internally). Each framework has pros and cons of course, but learning how to
use them can introduce important concepts for writing better applications.

A couple standout projects:

* [Backbone.js](http://backbonejs.org/) - Very popular MVC framework
* [AngularJS](http://angularjs.org/) - Dynamic binding between underlying
  code and the user interface
* [Dojo](http://dojotoolkit.org/) - Modular framework that provides a large
  amount of functionality

## Node.js

[Node.js](http://nodejs.org/) is a server-side framework for creating
full-stack applications using JavaScript. The JavaScript environment is
very well suited to building various web services:

```javascript
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
```

There is a very [large array of modules](https://npmjs.org/) available that can
be installed with the `npm` command. This simplifies creating applications
by using existing projects.

## Transpilers

Many projects are working to improve some of the shortcomings and warts of
JavaScript without needing to wait for the language itself to update. A
*transpiler* is a translating compiler, so the code in the target language
is converted to plain JavaScript that can be run in the browser

* **[CoffeeScript](http://coffeescript.org)**: Provides a simpler syntax
  (less formatting tokens) and provides shortcuts for many common patterns
* **[TypeScript](http://www.typescriptlang.org/)**: Adds type checking hints
  so the compiler can provide more feedback about correct usage

These languages are often the proving ground for ideas that ultimately make
it into the ECMAScript specification. For instance, several ideas from
CoffeeScript are part of the Harmony proposal.

## Build Tools and Dependency Handling

As projects get more and more complex, there is a need for additional tools
to perform common tasks, help organize the code, and package an application
in various ways.

* **[Yeoman](http://yeoman.io/)**: Scaffolding tool for creating the layout
  for a project, and for adding new features/modules
* **[Grunt](http://gruntjs.com/)**: Task runner and build tool, providing
  options to package, minify, and run a complex application
* **[Bower](http://bower.io/)**: Dependency manager for client-side libraries
  (similar to *npm* on the server side)

## Code Resources

A key aspect of keeping up to date with developments in the web development
world is simply to read and be exposed to new developments and frameworks.

* Google+ groups
* GitHib - Explore popular projects, watch/join projects you are interested in
* Blogs - <http://dailyjs.com/>, <http://addyosmani.com/blog/>
* Meetups - Many meetups are available in your area, both development-specific
  and more generic
