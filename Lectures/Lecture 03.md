# 9/5/24 Lecture 3

### Lists

-   **Ordered list**

    ```html
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
    ```

-   **Unordered list**

    ```html
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    ```

-   **Definition list**

    ```html
    <dl>
        <dt>Term 1</dt>
        <dd>Definition 1</dd>
        <dt>Term 2</dt>
        <dd>Definition 2</dd>
        <dt>Term 3</dt>
        <dd>Definition 3</dd>
    </dl>
    ```

### Links

-   **Anchor tag** - link to external or local webpages, or to other sections of a webpage.

-   **Linking to other sites**

    ```html
    <a href="https://google.com">Google</a>
    ```

-   **Relative urls**

    ```html
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about-us.html">About</a></li>
        <li><a href="movies.html">Movies</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
    ```

-   **Email links**

    ```html
    <a href="mailto:name@example.org">Email me</a>
    ```

-   **Opening links in a new window**

    ```html
    <a href="https://www.imdb.com" target="_blank">Internet Movie Database</a>
    ```

    -   Generally, you should avoid this, but if done, it is good practice to inform the user that the link will be opened in a new window.

-   **Linking to a specific part of the same page**

    ```html
    <h1 id="top">Heading</h1>
    
    <a href="#section-1">Section 1</a>
    <a href="#section-2">Section 2</a>
    <a href="#section-3">Section 3</a>
    
    <h2 id="section-1">Section 1</h2>
    <h2 id="section-2">Section 2</h2>
    <h2 id="section-3">Section 3</h2>
    <a href="#top">Go to top</a>
    ```

    -   This can be done to link to parts of a different page, which can be done by adding `/#(id)` to the end of the url to that page.

### Image

-   `<image>` tag

-   `src` tells the browser where to find the image file

-   `alt` provides a text description of the image

-   `height` and `width` specifies the height and width of the images

    ```html
    <img src="image.jpg" alt="image" height=100 width=100 />
    ```

    
