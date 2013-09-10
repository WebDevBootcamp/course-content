# Introduction to HTML

## HTML is not a programming language
HTML is a markup language, not a programming language. When you are writing HTML, you are marking up or authoring a document

| **HTML** | **Programming Language** |
| -------- | ------------------------ |
| Highlights areas of text to indicate their semantic purpose | Contains a series of instructions to perform an operation |
| Comprised of elements, tags and properties | Comprised of statements which are made up of keywords, variables and functions |
| Output is rendered by a user-agent (browser) | Code is compiled or interpreted and executed |
| An HTML file is referred to as a document | A coded application is referred to as a program |

## Tags, Elements and Attributes
### Tag - a bit of text that assigns meaning to an element's content. Tags are enclosed withing angle brackets '<' and '>'.
```
Example tags: <h1>  <p>  <html>  <body>
```
### End Tag - an end tag always matches a start tag, except that it has a slash after the opening angle bracket.
```
Example end tags: </h1> </p> </html> </body>
```
### Element - the combination of a start tag and an end tag define an element. Everything between the two tags is referred to as the contents of the element.
```
Example element: <h1>This is the heading content</h1>
```
### Elements can be nested - an element can contain other elements. For example, a paragraph can contain linked text.
```
Example nested element: <p>This paragraph contains a <a href="http://www.google.com"> link</p>
```
### Attributes - an element can be assigned properties which can be assigned values. Useful for creating links or assigning unique identifiers to tags which can be used in CSS and JS.
```
Example attributes: <img id='myImage' class='smallImages' src='pictureOfMyDog.jpg'/>
```
### Self Closing Tags - certain tags are considered self-closing, i.e. they do not need a closing tag. These tags do not have any content, though they can have attributes. Self-closing tags can have a slash before the closing bracket to indicate that the tag is self-closing.
```
Example self-closing tags: <br/> <img src='pic.jpg'/>
```

## Minimal correct HTML document
An HTML document must be contained within an <html> element. The top level must contain two elements, a <head> and a <body>. The head must contain a <title> and can contain other meta-data. The body contains the content that will be displayed.
```
<html>
  <head>
    <title>My first html document</title>
  </head>
  <body>
    <h1>My first document</h1>
    <p>Here it is! I did it!</p>
  </body>
</html>
```

## Next: Useful tags
[Useful tags](?md=/course-content/module2/useful_tags.md)
