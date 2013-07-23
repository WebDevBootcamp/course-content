# Using JavaScript on a Webpage

JavaScript is rarely used in isolation from HTML web pages, including
JavaScript within a page is the first step towards creating dynamic content.

## The script Tag

The script HTML element specifies code that is available within a web page. For example:

```html
<script>

alert( ‘Hello from JavaScript’ );

</script>
```

will display a prompt message when the page loads.

### Language Type

Script tags can specify an optional _type_ attribute to define the language 
of the script content.

```html
<script type="text/javascript">
// code goes here
</script>
```

The type is optional in HTML5, and if it is omitted the browser will assume
the code is JavaScript.

```html
<script>
// this works too
</script>
```

## Importing External Scripts

It is considered better to separate markup (HTML) from script content (JS)
into separate files. The _src_ attribute specifies the URL where the content
of the script can be found:

```html
<script src=”js/application.js”></script>
<script src=”js/chat_module.js”></script>
```

Any number of scripts can be included on a page this way.

This is similar to CSS where style definitions can be embedded in an HTML page
within a _style_ element, but it is better to separate the content into
another file
