# TourismProject

Create a working tourism website

## Minimum Viable Product

- A landing page/section with a title and some information on it.
- A gallery page, that showcases a bunch of images of the location.
- A getting there page, that contains information available transport options, snippets of maps, etc.
- a README.md at the root of the repo to include how you went about coding for that project)
- A Contact page/section with your email, GitHub profile link

## todo

- ~~Create repo~~
- ~~Create templatefiles and boilerplate~~
- Create HTML content
  - ~~index.html~~
  - ~~getting_here.html~~
  - ~~contact.html~~
- ~~Style HTML content~~
- ~~Test site at different resolutions and on different devices~~
- **TIDY CSS**
- **review all class ID names**
  - Impliment B.E.M naving convention
  - Start using SASS and generate css from that
- **refine and optimise code**

## Developement process

1. established the subject matter to be Wisemans ferry
2. thought about the MVP criteria and how I would implement that into the site
3. I decided heavy use of grids wot layout the site would demonstrate the aquired knowledge
4. I sketched by hand with pen and paper how I wanted the site to look both on dekstop and mobile device
5. I began gathering the resources for the site images text snippets etc.
6. structured all the HTML in such away that I could apply the CSS to style the site for both mobile and desktop as well as apply any style sheet to test different layouts and designs.
7. I used a media querry and some java script to change the layout of the site based on the screen size it was being viewed from.

   - The media querry changes the style sheet used
     - smallscreen.css for anything under 900px
     - wide screen.css for anying over 900px
   - the javascript in index.js uses an event handler to watch for changes to the view window and changes parameters in the currently ussed css to creat the hamburger menu and standard desktop nav bar on the fly

8. I styled the website using standrad CSS
9. at this point I learn the importance of creating git branches for new features as I introduced some code that broke the mobile layout.

   - I was able to go back to my last good commit about 4 commits back then logically track down my mistake.
   - **I now create a new branch for any major new changes i impliment**

10. I am now ready to go back and tidy my code change some class name to make them clearer and more logical.

    - we are now learning SASS so I may be able to achieve my cleaner code through a rewrite using sass to generate the CSS with the BEM naming done at the same time.

11. Solved issue with responsive zoomed image from gallery. was as simple as changing a paremeter on my flex box to achieve desire result of centered image in view window regardless of device rotation or screen size.
12. added info side panels (undecided on look, may remove)
13. **Major feature added to gallery larg image no has descriptive caption.**
    -caption is pulled from Alt text using JS and injected back into page element
14. added epanding image on mous over on landing page (undecided on loook. Will likley replace with gallery script and full screen on click)
