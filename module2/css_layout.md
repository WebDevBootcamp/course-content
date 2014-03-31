# Layout with CSS

## CSS Box Model
http://www.w3schools.com/css/css_boxmodel.asp

All HTML elements can be considered as boxes.

The box consists of margins, outline (css3), border, padding and content.

### Margin
An area around the border. Does not have background color. The transparent region is used to specify separation of one box from another.

### Outline
CSS3 allows us to specify an outline. This area is in addition to the border.

The outline is a line that is drawn around elements (outside the borders) to 
make the element stand out.

The outline is not a part of the element's dimensions, therefore the element's
width and height do not contain the width of the outline.

Unlike the border, an element's outline is contained within the element's
margin. If the element's margin is not large enough to contain the element's
outline, the outline may not be displayed.

### Border
The border is a line that is drawn around elements (outside the padding) to
make the element stand out.

The border is not a part of the element's dimensions, therefore the element's
width and height do not contain the width of the border.

### Padding
The padding defines an area of separation between the content and the border.

The padding area will contain the background color or image of the element.

The padding is not a part of the element's dimensions, therefore the element's
width and height do not contain the width of the padding.

### Content
This is the central box that contains the element's content.

The width and height properties define the size of this box.

The actual size of an HTML element's box is the size of the content plus the
padding plus the border plus the margin. The outline does not contribute to
the displayed size of the element as it is contained within the margin.

## Display Types
With CSS, you can specify the following display types:
  inline
  block
  inline-block
  none
  -css3-
  flexbox
  inline-flex

### Inline
An inline element will be placed adjacent to the previous content (left to 
right).

The width of an inline element will be the minimum required to contain the
element's contents.

Inline elements cannot be sized using width/height.

Inline elements are not guaranteed to be rectangular (consider an element
whose content spills off the right side of the container and wraps around to
continue on the left). For this reason, borders and outlines are not
recommended for inline elements.

Inline elements can have left/right margins and padding specified but will
ignore top/bottom margins and padding.

### Block
A block element will be placed below the previous content (top to bottom).

The default width of a block element is the width of the element's container 
minus the margin, outline, border and padding. In other words, by default an 
element with its padding, borders, outlines and margins will fill the width 
of the enclosing container

The default height of an element is the smallest height that will fully
contain the contents of the element. The element will additionally occupy the
space required to display the padding, border, outline and margin.

The width/height of a block element can be changed using the width and height
properties.

### Inline-Block
An inline-block element will be placed adjacent to the previous content (left
to right) if there is room to fit the entire block's width. If the entire
block cannot fit to the right of the previous element, then the block will be
displayed below the previous element.

The default width of an inline-block element will be the minimum required to
contain the element's contents. If the element's contents are wider than the
container which holds the element, the element's contents will wrap to the 
next line and the element will be sized so that it, along with its padding,
border, outline and margin, will fit within the enclosing container.

The default height of an inline-block element will be the minimum required to
contain the element's contents. The element's display area will be increased
by the padding, border, outline, and margin.

The width and height of an inline block element can be changed using the width 
and height properties.

### None
Elements who have their display type set to none will not appear in the final
rendered document, nor will their size, shape or placement contribute in any
way to the layout of the document. The are not just invisible - it is as if 
these elements have been removed from the html entirely.

### Flexbox and Inline-Flex

## Position
Used to determine the placement of an element on the rendered page.

### static
This is the default. The placement of the element is determined by the order
of the elements in the HTML. Elements are placed left-to-right, top-to-bottom
depending on whether they are inline or block display types.

### fixed
The element is positioned relative to the browser window.

Example:
```
#alertBox {
   width     : 50%;
   height    : 50%;
   position  : fixed;
   top       : 25%;
   left      : 25%;
   z-index   : 100;
   }
```
Will create a box that occupies 25% of the available screen space and be
centered exactly in the browser's window. The user may attempt to use the 
scrollbars to position the page, but this alertBox will not move since its
position is fixed within the browser window.

### relative
The element is positioned relative to where it would normally have been 
placed.

Example:
```
#leftBox {
   width     : 50%;
   height    : 100%;
   position  : relative;
   top       : 0px;
   left      : 0px;
   }
   
#rightBox {
   width     : 50%;
   height    : 100%;
   position  : relative;
   top       : -100%;
   left      : 50%;
   }
```
Will divide the containing element into two vertical columns, each occupying 
one half of the available width. 

Using a relative position with top/left set to 0 will cause the block to be 
placed in its default location. 

Setting the top to -100% will cause the block to be displayed above where it 
would have been displayed by an amount equal to the height of the element
which contains the block being placed.

Setting the right to 50% will cause the block to be displayed to the right of
where it would have been displayed by an amount equal to one half the width of
the element which contains the block being placed.

### absolute
The element is positioned relative to its first positioned (not static)
ancestor element. In other words, this allows for an element to be placed at
a position within a container element rather than within the browser window.

Absolute positioned elements are removed from the normal flow and can overlap
other elements.

Example:
```
#menuItem {
  width     : 640px;
  height    : 480px;
  position  : relative;
  top       : 0px;
  left      : 0px;
  }

#menuItem>pullDown  {
  width     : 100%;
  height    : 100px;
  display   : none;
  position  : absolute;
  top       : 100%;
  left      : 0px;
  z-index   : 100;
  }
```
This will create an invisible pull down menu that will be positioned

## Floats
An element can have its float property set to left, right or none. The default
is none.

An element that is floated is removed from the flow of its containing element.
The containing element will be resized (if default sizes are being used) so
that it is sized to contain the remaining contents excluding the floating
elements. In other words, an element that contains just floating elements will
have its default size set to 0. This is important to remember when using float
to define layouts.

The remaining contents of the containing element will flow around elements
that are floated. This is great for inserting images within text. By default
an img element is a block, meaning that it will be placed below the previous
element and the next element will be placed below it. To have text flow
around an img, set the img element's float property to either left or right
depending on where you want the img to be placed.

Floats are commonly used for navigation panel buttons. Floated elements will
stack up next to each other (left to right for left floated elements or right
to left for right floated elements).

Example:
```
#navPanel {
  width      : 100%;
  height     : 15%;
  display    : block;
  }
  
#navPanel>li {
  width     : 20%;
  height    : 100%;
  display   : block;
  float     : left;
  }
```
Creates a navigation panel with up to 5 buttons (each 20% of the available
width).

## Overflow
If an element's box is sized using width/height, it is possible that the size
of the container may not be large enough to hold all of the contents.

By default, the extra contents will be displayed overflowing from the box but
the extra contents will not affect the layout, therefore these contents will
more than likely overlap the adjacent elements. Overlapping elements is
generally not good for readability.

The overflow property can be used to control how extra content is displayed.

Set overflow to hidden to make any extra content invisible.

Set overflow to scroll to display scroll bars on the element.

Set overflow to auto to only display scroll bars if the contents of the 
element are larger than the element.

Overflow can be set independantly for horizontal (x) and vertical (y).

## Examples and reference

Navigation bar: http://www.w3schools.com/css/css_navbar.asp

Image gallery: http://www.w3schools.com/css/css_image_gallery.asp

Centering a block:
```
.center {
   margin-left   : auto;
   margin-right  : auto;
   width         : 50%;
   }
```

Image sprites: http://www.w3schools.com/css/css_image_sprites.asp

# CSS Media Types
You can define different css rules for different media.

Screens can come in many different sizes and shapes and css should be 
adaptive, or responsive, to allow your document to adjust to the screen on
which it is being displayed.

You can create a different css targeted at handheld devices with small
screens. For instance a two column display on a screen might be best 
handled as a single column display on a handheld.

You can even specify css for print media. Since most printers support standard
letter sized paper (8 1/2" x 11") or A4 paper, you can specify dimensions in
either inches or cms when laying out a document for printing.

One css file can contain multiple media definitions, or you can separate
your media specifications into separate files for easier maintenance.

There are other media types for non-visual user-agents.

http://www.w3schools.com/css/css_mediatypes.asp
