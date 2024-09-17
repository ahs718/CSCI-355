# 9/12/24 Lecture 5

## Boxes

### Box Dimensions

-   **width**
    -   **min-width**
    -   **max-width**
-   **height**
    -   **min-height**
    -   **max-height**

### Overflowing Content

-   **overflow**
    -   **hidden** - hides any extra content that does not fit in the box
    -   **scroll** - adds a scrollbar to the box so that users can scroll to see the missing content

### Border, Margin, and Padding

-   **Margin:** Margins sit outside the edge of the border. You can set the width of a margin to create a gap between the borders of two adjacent boxes.
-   **Border:** Every box has a border (even if not visible). The border separates the edge of one box from another.
    -   **border-width** - control the width of a border, either in pixels or using **thin**, **medium**, or **thick**.

-   **Padding:** Padding is the space between the border of a box and any content contained within it. Adding padding can increase the readability of its contents.

### Centering Content

-   If you want to center a box on the page (or center it inside the element that it sits in), you can set the **left-margin** and **right-margin** to **auto**.

-   In order to center a box on the page, you need to set a **width** for the box (otherwise it will take up the full width of the page).

### Change Inline/Block

-   The **display** property allows you to turn an inline element into a block-level element or vice versa, and can also be used to hide an element from the page.

-   The values this property can take are:
    -   **inline:** This causes a block-level element to act like an inline element.
    -   **block:** This causes an inline element to act like a block-level element.
    -   **inline-block:** This causes a block-level element to flow like an inline element, while retaining other features of a block-level element.
    -   **none:** This hides an element from the page. In this case, the element acts as though it is not on the page at all (although a user could still see the content of the box if they used the *view source* option in their browser).

### Hiding Boxes

-   The **visibility** property allows you to hide boxes from users but It leaves a space where the element would have been.

-   This property can take two values:
    -   **hidden:** This hides the element
    -   **visible:** This shows the element

## Lists, Table, and Forms

### list-style-type

-   The **list-style-type** property allows you to control the shape or style of a bullet point (also known as a marker).
-   **Unordered lists**
    -   none
    -   disc
    -   circle
    -   square
-   **Ordered lists**
    -   decimal
    -   decimal-leading-zero
    -   lower-alpha
    -   upper-alpha
    -   lower-roman
    -   upper-roman

### list-style-image

-   You can specify an image to act as a bullet point using the **list-style-image** property.

-   The value starts with the letters **url** and is followed by a pair of parentheses. Inside the parentheses, the path to the image is given inside double quotes.

    ```css
    ul {
        list-style-image: url("images/star.png");
    }
    ```

### list-style-position

-   Lists are indented into the page by default and the **list-style-position** property indicates whether the marker should appear on the inside or the outside of the box containing the main points.
-   This property can take one of two values:
    -   **outside:** The marker sits to the left of the block of text. (This is the default behaviour if this property is not used.)
    -   **inside:** The marker sits inside the box of text (which is indented).

### Table Properties

-   **width** to set the width of the table
-   **padding** to set the space between the border of each table cell and its content
-   **text-transform** to convert the content of the table headers to uppercase
-   **letter-spacing, font-size** to add additional styling to the content of the table headers
-   **border-top, border-bottom** to set borders above and below the table headers
-   **text-align** to align the writing to the left of some table cells and to the right of the others
-   **background-color** to change the background color of the alternating table rows
-   **:hover** to highlight a table row when a user's mouse goes over it

## Layout

-   **Block-level elements start on a new line**

    -   Examples include:

        ```html
        <h1></h1> <p></p> <ul></ul> <li></li>
        ```

-   **Inline elements flow in Between surrounding text**

    -   Examples include:

        ```html
        <img /> <b></b> <i></i>
        ```

### Controlling the position of elements

-   **Normal flow:** Every block-level element appears on a new line, causing each item to appear lower down the page than the previous one. Even if you specify the width of the boxes and there is space for two elements to sit side-by- side, they will not appear next to each other. This is the default behavior (unless you tell the browser to do something else).

-   **Relative Positioning:** This moves an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left of where it would have been placed. This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow.

-   **Absolute Positioning:** This positions the element in relation to its containing element. It is taken out of normal flow, meaning that it does not affect the position of any surrounding elements (as they simply ignore the space it would have taken up). Absolutely positioned elements move as users scroll up and down the page.

-   **Fixed Positioning:** This is a form of absolute positioning that positions
     the element in relation to the browser window, as opposed to the containing element. Elements with fixed positioning do not affect the position of surrounding elements and they do not move when the user scrolls up or down the page.

-   **Floating elements:**  Floating an element allows you to take that element out
     of normal flow and position it to the far left or right of a containing box. The floated element becomes a block-level element around which other content can flow.
-   When you move any element from normal flow, boxes can overlap. The **z-index** property allows you to control which box appears on top.

### Normal Flow

-   `position: static`
-   In normal flow, each block-level element sits on top of the next one. Since this is the default way in which browsers treat HTML elements, you do not need a CSS property to indicate that elements should appear.

### Relative Positioning

-   `position: relative`
-   Relative positioning moves an element in relation to where it would have been in normal flow.

### Absolute Positioning

-   `position: absolute`
-   When the **position** property is given a value of **absolute**, the box is taken out of normal flow and no longer affects the position of other elements on the page. (They act like it is not there.)

### Fixed Positioning

-   `position: fixed`
-   Fixed positioning is a type of absolute positioning that requires the **position** property to have a value of **fixed**.
-   It positions the element in relation to the browser window. Therefore, when a user scrolls down the page, it stays in the exact same place.

### Overlapping Elements

-   `z-index`
-   If you want to control which element sits on top, you can use the **z-index** property. Its value is a number, and the higher the number the closer that element is to the front.
-   For example, an element with a **z-index** of **10** will appear over the top of one with a **z-index** of **5**.

### Floating Elements

-   `float`
-   The **float** property allows you to take an element in normal flow and place it as far to the left or right of the containing element as possible.
-   Anything else that sits inside the containing element will flow around the element that is floated.

### Clearing Floats

-   `clear` - The **clear** property allows you to say that no element (within the same containing element) should touch the left or right-hand sides of a box. It can take the following values:
    -   **left:** The left-hand side of the box should not touch any other elements appearing in the same containing element.
    -   **right:** The right-hand side of the
         box will not touch elements appearing in the same containing element.
    -   **both:** Neither the left nor right-hand sides of the box will touch elements appearing in the same containing element.
    -   **none:** Elements can touch either side.

### Parents of Floating Elements: Problem

-   If a containing element *only* contains floated elements, some browsers will treat it as if it is zero pixels tall.
-   Traditionally, developers got around this problem by adding an extra element after the last floated box (inside the containing element). A CSS rule would be applied to this additional element setting the **clear** property to have a value of **both**. But this meant that an extra element was added to the HTML just to fix the height of the containing element.
-   More recently, developers have opted for a purely CSS-based solution because it means that there is no need to add an extra element to the HTML page after the floated elements. The pure CSS solution adds two CSS rules to the containing element (in this example the `<div>` element):
    -   The **overflow** property is given a value **auto**.
    -   The **width** property is set to **100%**.

### Creating Multi-Column Layouts with Floats

-   Many web pages use multiple columns in their design. This is achieved by using a `<div>` element to represent each column. The following three CSS properties are used to position the columns next to each other:

-   **width:** This sets the width of the columns.

-   **float:** This positions the columns next to each other.
-   **margin:** This creates a gap between the columns.
    -   A two-column layout like the one shown on this page would need two `<div>` elements, one for the main content of the page and one for the sidebar.
    -   Inside each of the `<div>` elements there can be headings, paragraphs, images, and even other `<div>` elements.

