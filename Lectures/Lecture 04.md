# 9/10/24 Lecture 4

### Table

-   `<table>` - element used to create a table
-   `<tr>` - table row
-   `<td>` - table data
-   `<th>` - table heading
-   `colspan` and `rowspan` attributes allow a table entry to span multiple columns/rows.
-   `<thead>` - put headings of table here
-   `<tbody>` - body of table
-   `<tfoot>` - footer belongs here

### Forms

-   `<form>` - form controls live inside of this element. This element should always carry the `action` attribute and will usually have a `method` and `id` attribute too.
-   `action` - attribute whose value is the URL for the page on the server that will receive the information in the form when submitted.
-   `method` - forms can be sent using either GET or POST
    -   With the get method, the values from the form are added to
         the end of the URL specified in the `action` attribute
    -   With the post method the values are sent in what are known as HTTP headers
-   `<input>` used to create different form controls. The value of the `type` attribute determines what kind of input is created.

## CSS

### Selectors

| Selector                  | Meaning                                                      | Example                                                      |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Universal selector        | Applies to all elements in the document                      | `* {}`                                                       |
| Type selector             | Matches element names                                        | `h1, h2, h3 {}`                                              |
| Class selector            | Matches an element whose `class` attrivute has a value that matches the one specified after the period symbol | `.note {}`<br />`p.note{}` Targets only `<p>` elements whose `class` attribute has a value of `note`. |
| ID selector               | Matches an element whose `id` attribute has a value that matches the one specified after the hash symbol | `#introduction {}`                                           |
| Child selector            | Matches an element that is a direct child of another         | `li>a {}`                                                    |
| Descendant selector       | Matches an element that is a descendent of another specified element (not just a direct child of that element) | `p a {}`                                                     |
| Adjacent sibling selector | Matches an element that is the next sibling of another       | `h1+p {}`                                                    |
| General sibling selector  | Matches an element that is a sibling of another, although it does not have to be the directly preceding element | `h1-p {}`                                                    |

### How CSS Rules Cascade

-   **Last Rule** - If the two selectors are identical, the latter of the two will take precedence.
-   **Specificity** - If one selector is more specific than the others, the more specific rule will take precedence over more general ones. E.g. `h1` is more specific than `*`, `p b` is more specific than `p`, `p#intro` is more specific than `p`.
-   **Important** - You can add `!important` after any property value to indicate that it should be considered more important than other rules that apply to the same element.

### Inheritance

-   If you specify the `font-family` or `color` properties on the `<body>` element, they will apply to most child elements. This is because the value of the `font-family` property is inherited by child elements. It saves you from having to apply these properties to as many elements (and results in simpler style sheets).
-   You can compare this with the `background-color` or `border` properties; they are not inherited by child elements. If these were inherited by all child elements then the page could look quite messy.
-   You can force a lot of properties to inherit values from their parent elements by using `inherit` for the value of the properties.

### Color

-   **RGB Values** - express colors in terms of how much red, green and blue are used to make it up. E.g. `rgb(100,100,90)`
-   **Hex Codes** - six-digit codes that represent the amount of red, green and blue in a color, preceded by a pound or hash # sign. E.g. `#ee3e80`
-   **Color Names** - There are 147 predefined color names that are recognized by browsers. E.g. `DarkCyan`
-   **Hue** - is near to the colloquial idea of color. Technically speaking however, a color can also have saturation and brightness as well as hue.
-   **Saturation** - refers to the amount of gray in a color. At maximum saturation, there would be no gray in the color. At minimum saturation, the color would be mostly gray.
-   **Brightness** - (or "value") refers to how much black is in a color. At maximum brightness, there would be no black in the color. At minimum brightness, the color would be very dark.
-   **Lightness** - is the amount of white (lightness) or black (darkness) in a color. Lightness is represented as a percentage. 0% lightness is black, 100% lightness is white, and 50% lightness is normal. Lightness is sometimes referred to as *luminosity*.
-   **Foreground color** - `color: DarkCyan;`
-   **Background color** - `background-color: DarkCyan;`
-   **rgba** - allows you to specify a color, just like you would with an RGB value, but adds a fourth value to indicate opacity. This value is known as an **alpha** value and is a number between **0.0** and **1.0** (so a value of **0.5** is 50% opacity and **0.15** is 15% opacity). The **rgba** value will only affect the element on which it is applied (not child elements).

### Typeface Terminology

-   **Serif**
    -   Serif fonts have extra details on the ends of the main strokes of the letters. These details are known as serifs.
    -   In print, serif fonts were traditionally used for long passages of text because they were considered easier to read.

-   **Sans-Serif**
    -   Sans-serif fonts have straight ends to letters, and therefore have a much cleaner design.
    -   Screens have a lower resolution than print. So, if the text is small, sans-serif fonts can be clearer to read.

-   **Monospace**
    -   Every letter in a monospace (or fixed-width) font is the same width. (Non-monospace fonts have different widths.)
    -   Monospace fonts are commonly used for code because they align nicely, making the text easier to follow.

-   **Weight**

    -   Light, Medium, Bold, Black
    -   The font weight not only adds emphasis but can also affect the amount of white space and contrast on a page.

-   **Style**

    -   Normal, Italic, Oblique
    -   Italic fonts have a cursive aspect to some of the lettering. Oblique font styles take the normal style and put it on an angle.

-   **Stretch**

    -   Condensed, Regular, Extended
    -   In condensed (or narrow) versions of the font, letters are thinner and closer together. In expanded versions they are thicker and further apart.

-   **@font-face**

    ```css
    @font-face {
      font-family: 'ChunkFiveRegular';
      src: url('fonts/chunkfive.eot');
    }
    h1, h2 {
      font-family: ChunkFiveRegular, Georgia, serif;
    }
    ```

### Font Size

-   **Pixels** - commonly used because they allow web designers very precise control over how much space their text takes up. The number of pixels is followed by the letters `px`.
-   **Percentages** - The default size of text in browsers is 16px. So a size of 75% would be the equivalent of 12px, and 200% would be 32px.
-   **Ems** - An em is equivalent to the width of a letter m.

