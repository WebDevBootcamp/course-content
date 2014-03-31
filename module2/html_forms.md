# HTML Forms

Forms are used to pass data to a server

## Form Tag

Defines the behavior of the form

```
<form name="formName" id="thisForm" action="url of handler" method="get">
...
input elements
...
</form>

### Form Attributes

name   - provides a name for the form
id     - id of form element
action - specifies the action to be performed when the form is submitted. The 
         action should be a URL of a handler on a server that can accept the 
         submitted data
method - GET or POST
onsubmit - a piece of javascript code that should be executed before the 
           form is submitted. Form will only be submitted if the return value
           from the onsubmit handler is true. Useful for validating input 
           before sending to the handler
accept-charset - charset that is allowed (utf8)
enctype  - encoding method of the POST data (text/plain, multipart/form-data, 
           application/x-www-form-urlencoded)
autocomplete - on/off - new for HTML5

#### GET

Appends form-data into the URL in name/value pairs
The length of a URL is limited (~3000 characters)
Never use GET to send sensitive data (passwords, credit cards)
Useful for form submissions where a user may want to bookmark the result
GET is better for non-secure data like query strings

#### POST

Appends form-data inside the body of the HTTP request
Data is not visible in the URL
Has no size limitations
Form submissions with POST cannot be bookmarked

## Input types

Inputs define a field where users can enter data
Only inputs within a form are submitted when the form is submitted
(New for HTML5 - the form attribute can specify one or more form_ids which
the input belongs to)
Inputs come in many types depending on the information you are gathering
Inputs must have a name attribute to define the property that is being set
Inputs may have a value attribute to define a default value

### button

A clickable button (mostly used with javascript)

### checkbox

A single checkable box

### color (HTML5)

A color picker

### date (HTML5)
### datetime (HTML5)
### datetime-local (HTML5)

Data and time controls

### email (HTML5)

Field for entering an email address

### file

File picker control for uploading a file from the user's machine

### hidden

Passes a name/value pair to the server without giving the user an opportunity
to input a value. The value must be specified as an attribute. Javascript can
be used to modify the value.

### image

Defines an image as the submit button

### month (HTML5)

Defines a month and year control (no time zone)

### number (HTML5)

A field for entering a number

### password

A text field whose value is hidden (even to the user)

### radio

A radio button

### range (HTML5)

Defines a control for entering a number whose exact value is not important
(like a slider control)

### reset

A button which will cause a form to reset back to its default values

### search (HTML5)

A text field for entering a search string

### submit

A submit button for the form. Clicking this button will cause the onsubmit or
form action to be initiated.

### tel (HTML5)

A field for entering a telephone number

### text

A field for entering generic text

### time (HTML5)

A control for entering a time (no time zone)

### url (HTML5)

A field for entering a url

### week (HTML5)

A week and year control
