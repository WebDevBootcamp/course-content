# HTML Best Practices

## HTML defines semantics, not appearance
HTML should be used to define the semantics (purpose or content) of the document text. This is a heading, this is a paragraph, this is the author, this is the title, and so forth.

HTML should not be used to try to control the appearance of the document. It would be bad to say "I would like this text to appear larger so I will mark it as h2." Ask yourself why this text should appear larger. Is it because it is a keypoint? or because you want to draw attention to the author? or is it just that you want to emphasize the text? 

Use HTML to describe the purpose of the text:
```
<p class='keypoint'>This text is important because it is a keypoint</p>
<h1>Definitions of language terms</h1>
<span class='author'>John Doe</span>
<em>Emphasize this part</em>
```

## ADA - Americans with disabilities act
When possible, try to adhere to the ADA recommendations for web design:
[Creating an ADA compliant website](http://www.techrepublic.com/blog/web-designer/creating-an-ada-compliant-website/)
ADA website for reference:
[ADA website - chapter 5](http://www.ada.gov/pcatoolkit/chap5toolkit.htm)

## HTML validation
Check that your code conforms to the standards to make sure that it will display correctly in all browsers.

### Invalid markup leads to suble differences in parsing and rendering
### Browsers and development tools are optimized for valid markup.
### It's easier to get help with valid markup.

Web tools for validation
### [W3C validator](http://validator.w3.org)

Brackets contains a lint checker for validating code
[Short introduction to Brackets](http://www.youtube.com/watch?feature=player_embedded&v=HZkrlX7jJcg)

## Resources and where to go for help

### [HTML Dog Beginner Tutorial](http://www.htmldog.com/guides/htmlbeginner/)
### [W3C Web Standards Curriculum](http://www.w3.org/wiki/Web_Standards_Curriculum)
### [Web Stndards Group mailing list](http://webstandardsgroup.org/mail)
### [WebDesign-L mailing list](http://www.webdesign-l.com)
### [Doctype Q&A website](http://doctype.com/)
