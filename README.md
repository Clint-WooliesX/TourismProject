# Working Tourism Website project
Create a working tourism website

### Minimum Viable Product:<br>
* A landing page/section with a title and some information on it.
* A gallery page, that showcases a bunch of images of the location.
* A getting there page, that contains information available transport options, snippets of maps, etc.
* a README.md at the root of the repo to include how you went about coding for that project)
* A Contact page/section with your email, GitHub profile link

### Development process:
* established the subject matter to be Wisemans ferry
* thought about the MVP criteria and how I would implement that into the site
* I decided heavy use of grids wot layout the site would demonstrate the aquired knowledge
* I sketched by hand with pen and paper how I wanted the site to look both on dekstop and mobile device
* I began gathering the resources for the site images text snippets etc. 
* structured all the HTML in such away that I could apply the CSS to style the site for both mobile and desktop as well as apply any style sheet to test different layouts and designs.

## Site Features:
### Responsive layout to suite screens of all sizes:
A combination CSS styles have been used to create the responsive layout:

1. Flex/grid
	- The flex and grid layout automatically arrange content on the page
1. Media query
	- a media query loads the appropriate stylesheet when the page loads for screens of 900px and below and 901px and above.

`<link rel="stylesheet" href="CSS/baseStyle.css">`
`<link rel="stylesheet" media="screen and (min-width: 900px)" href="CSS/styles.css" />`
`<link rel="stylesheet" media="screen and (max-width: 901px)" href="CSS/styleSmallScreeen.css" />`

		- baseStyle.css contains all the common styling
		- styles.css contains all unique styling for >901px
		- styleSmallScreen.css contains all unique styling for <900px
1. Javascript
	- Hides/shows the horizontal navigation menu
	- Hides/shows the Hamburger navigation menu and controls the opening and closing of the flyout

### SASS generated CSS style sheets:
* SCSS style sheets have been used
* BEM naming convention used for Block, elements and modifiers
* I have made use of
	* Variables
	* Placeholders
	* Mixins
	* @if and @else statements

Examples of mixins I created:
hoverMovement() is used for mouse over effects it takes 5 arguments
* time in ms animation transition
* cursor - sets mouse pointer
* Vertical movement px
* Horizontal movement px
* shadow type - filter or box
Example: hoverMovement(250,pointer,-10,10,filter)
replaces 13 lines of code
![](/hoverEffect.png)

corners() is used for quick setting of corner radiuses where 3 or less corners or different radius sizes per corner are used. t takes 4 arguments
* top left in px
* top Right in px
* bottom left in px
* bottom right in px
example: @include corners(20,10,30,5) replaces 4 lines of code
![](/corners.png)
###Use of Java script:
Some light Javascript use has been used to extend functionality of the site. I have used:
* Event listeners:
	* Window resize
	* form submission
	* History traversal
* Functions to modify page elements:
	* Hide, show and resize page elements
	* Alter styles
	* Replacing content
	* Obtaining element properties for various uses


### Theme and design:
- A color pellet was devised by uploading the hero image at top of page into https://color.adobe.com/create/color-wheel.
- the pallet is stored in variables with logical names to allow for quick changing the theme rapidly without having to edit the entire style sheets, only the variable stored in _pallet.scss.
- The layout design was devised to best demonstrate my acquired knowledge of the block/flex and grid layout systems to create a responsive layout with minimal code.
- As the page is resized all content on the page logical shifts around to make best use of the screen space.
- when the page gets below 900px where the horizontal nav bar becomes crowded the following happens.
	- Horizontal nav bar is hidden.
	- the right side bar is moved to below the content and changes to a side-by-side layout instead of above and below.
	- The body Margins are set to 0px and the rounded borders turned off.
	- the Article panel's switched to 100% screen width.
	- a Hamburger bar replaces the nav bar.
	- A flyout dropdown contains the page headings.
	- as the nav bar is now hidden page titles are turn on in the article panel to denote the pages subject.
 	- Many other visual tweaks to make best use of screen space.
 	- only 2 media queries are needed due to use of block, flex, grid and css.
 	- Site tested on 5k monitor, 15" and 11" laptops, 10"tablet and 6"mobile.
 		-mobile and tablet test in both portrait, landscape and split screen.

## Gallery Page:
The gallery page is a responsive grid layout that can adjust to any screen size.

hover animations and the mouse cursor changing to the zoom-in pointer denote the gallery image can be opened.

clicking an image opens it to the largest size capable of being displayed up to 800x600px

the window has a black tint added and the image opened in the center of the display.

links to the images are not hard coded. Java script is used to send the src value of the thumbnail clicked to a function that opens the correct image.

the Alt text is also sent to the function to display as a caption on the image.

once opened the mouse pointer changes to the zoom-out pointer and clicking closes the image

if images are moved deleted or renamed nothing breaks and the gallery will continue to work.

the gallery has been implemented on other pages of the site to to open images in a larger view.

## Contact page:





