# Working Tourism Website project

Create a working tourism website

### Minimum Viable Product:<br>

- A landing page/section with a title and some information on it.
- A gallery page, that showcases a bunch of images of the location.
- A getting there page, that contains information, available transport options, snippets of maps, etc.
- a README.md at the root of the repo to include how you went about coding for that project
- A Contact page/section with your email, GitHub profile link

### Development process:

- Established the subject matter to be Wisemans ferry
- Thought about the MVP criteria and how I would implement that into the site
- Decided use of flex/grid to layout the site would demonstrate the acquired knowledge
- Sketched by hand with pen and paper how I wanted the site to look both on desktop and mobile device
- Began gathering the resources for the site images, text snippets etc.
- Structured all the HTML in such a way that I could apply the CSS to style the site for both mobile and desktop as well as apply any style sheet to test different layouts and designs.

## Site Features:

### Responsive layout to suite screens of all sizes:

A combination of techniques have been used to create the responsive layout:

1. Flex/grid
   - The flex and grid layout automatically arrange content on the page
1. Media query
   - a media query loads the appropriate stylesheet when the page loads for screens of 900px and below and 901px and above.

    ```
    <link rel="stylesheet" href="CSS/baseStyle.css">
    <link rel="stylesheet" media="screen and (min-width: 900px)" href="CSS/styles.css" />
    <link rel="stylesheet" media="screen and (max-width: 901px)" href="CSS/styleSmallScreeen.css" />
    ```

	- baseStyle.css contains all the common styling
	- styles.css contains all unique styling for >901px
	- styleSmallScreen.css contains all unique styling for <900px
	- Other page specific stylesheets are also combined with base and screen size sheets.
	- Media queries within the sheets for specialised layouts at low resolutions

3. Javascript
   - Hides/shows the horizontal navigation menu
   - Hides/shows the Hamburger navigation menu and controls the opening and closing of the flyout

### SASS generated CSS style sheets:

- SCSS stylesheets have been used
- BEM naming convention used for Block, elements and modifiers
- I have made use of
  - Variables
  - Placeholders
  - Mixins
  - @if and @else statements

#### Examples of mixins I created:

`hoverMovement()` is used for mouse over effects it takes 5 arguments

- time in ms animation transition
- cursor - sets mouse pointer
- Vertical movement px
- Horizontal movement px
- shadow type - filter or box

```
@mixin hoverMovement($time, $cursor, $v, $h, $shadow) {
  position: relative;
  top: 0;
  left: 0;
  transition: #{$time}ms;
  &:hover {
    position: relative;
    cursor: #{$cursor};
    top: #{$v}px;
    left: #{$h}px;
    @if $shadow == filter {
      filter: $filter-shadow
    } @else {
      box-shadow: $shadow-hover;
    }
  }
```

Example: hoverMovement(250,pointer,-10,10,filter)
replaces 13 lines of code

`corners()` is used for quick setting of corner radiuses where 3 or less corners or different radius sizes per corner are used. It takes 4 arguments

- top left in px
- top Right in px
- bottom left in px
- bottom right in px
  example: @include corners(20,10,30,5) replaces 4 lines of code

```
@mixin corners($tl, $tr, $bl, $br) {
border-top-left-radius: #{$tl}px;
border-top-right-radius: #{$tr}px;
border-bottom-left-radius: #{$bl}px;
border-bottom-right-radius: #{$br}px;
}
```

### Use of Java script:
  Some light Javascript use has been used to extend functionality of the site. I have used:
- Event listeners:
  - Window resize
  - Form submission
  - History traversal
- Functions to modify page elements:
  - Hide, show and resize page elements
  - Alter styles
  - Replacing content
  - Obtaining element properties for various uses

### Theme and design:

- A color palette was devised by uploading the hero image at top of page into https://color.adobe.com/create/color-wheel.
- The palette is stored in variables with logical names to allow for quick changing the theme rapidly without having to edit the entire style sheets, only the variable stored in _palette.scss.
- The layout design was devised to best demonstrate my acquired knowledge of the block/flex and grid layout systems to create a responsive layout with minimal code.
- As the page is resized all content on the page logically shifts around to make best use of the screen space.
- When the page gets below 900px where the horizontal nav bar becomes crowded the following happens.
  - Horizontal nav bar is hidden.
  - The right side bar is moved to below the content and changes to a side-by-side layout instead of above and below.
  - The body Margins are set to 0px and the rounded borders turned off.
  - The Article panel is switched to 100% screen width.
  - A Hamburger bar replaces the nav bar.
  - A flyout dropdown contains the page headings.
  - As the nav bar is now hidden page titles are turned on in the article panel to denote the pages subject.
  - Many other visual tweaks to make best use of screen space.
  - only 2 media queries are needed due to use of block, flex, grid and css.
  - Site tested on 5k monitor, 15" and 11" laptops, 10"tablet and 6"mobile.
    -mobile and tablet test in both portrait, landscape and split screen.

## Gallery Page:
- The gallery page is a responsive grid layout that can adjust to any screen size.
- Hover animations and the mouse cursor changing to the zoom-in pointer denote the gallery image can be opened.
- Clicking an image opens it to the largest size capable of being displayed up to 800x600px.
- The window has a black tint added and the image opened in the center of the display.
- Links to the images are not hard coded. Java script is used to send the src value of the thumbnail clicked to a function that opens the correct image.
- The Alt text is also sent to the function to display as a caption on the image.
- Once opened the mouse pointer changes to the zoom-out pointer and clicking closes the image.
- If images are moved deleted or renamed nothing breaks and the gallery will continue to work.
- The gallery has been implemented on other pages of the site to to open images in a larger view.

## Contact page:
- HTML form collects the input from the user.
- Hosted server processes the input and emails the submission.
- HTML/CSS animation tells the user the submission is being handled if the server is slow to respond.
- Once successfully submitted the user is shown a success page and an option to "Go back".
- A Javascript event listener detects a "back" page traversal and triggers a refresh of the page to clear the form (this was a work around required as custom success redirects are not allowed on the free plan).

# What I learnt creating on this project.
It was fun putting what I have learnt in to practice to create this website.

One of the most valuable lessons I learnt was use of git, github and version control.

Early on I made several commits without branching first and later realized I had broken my responsive layout and had no idea at what point it had happened.

I was able to checkout to an earlier commit where everything was working and then dig through my code to find my mistake and then merge my work back into the last good working commit.

After this early mistake I followed a strict process of branching before making any major changes and while working on several features at once before merging after testing back into my main branch.


