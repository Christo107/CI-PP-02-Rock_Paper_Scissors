# Rock Paper Scissors
This website was designed and developed as a simple game that can be enjoyed by people of all ages. The game is something that most people would have played when they were children and the ability to play against a computer allows the user the freedom to play on their own.

To play the game is very simple with a player needing to select one of the three possible choices - Rock, Paper or Scissors to start the game, and then the computer randomly chooses its option. 

![Responsive Mockup](#)

The live website on Github pages can be accessed at the following link: [View my Live Website on Github Pages here](https://christo107.github.io/CI-PP-02-Rock_Paper_Scissors/)

## CONTENTS

* [Introduction](#rock-paper-scissors)

* [Sections and Pages](#sections-and-pages)
    *  [Header](#header-and-navbar)
    *  [Game Area](#game-area-section)
    *  [Footer](#footer)
* [User Experience](#user-experience)
    *  [User Stories](#user-stories)
* [Design](#design)
    *  [Colour Palette](#colour-palette)
    *  [Typography](#typography)
    *  [Imagery](#imagery)
    *  [Wireframes](#wireframes)
    *  [Accessibility](#accessibility)
* [Technologies Used](#technologies-used)   
    *  [Languages Used](#languages-used)
    *  [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
* [Testing](#testing)
    * [Validator Testing](#validator-testing)
    * [Responsiveness Testing](#responsiveness-testing)
    * [Accessibility Testing](#accessibility-testing)
* [Bugs](#Bugs)
* [Deployment](#deployment)
* [Credits](#credits)
* [Acknowledgements](#acknowledgements)

## Sections and Pages

### Existing Sections
- #### **Header**
    - The header contains the logo(name of the game) in a simple easy to read font to announce what the game is to the user.
    - A subtitle also provides a description of the game and who the game is suitable for.

![Header Image](#)

- #### **Game Area Section**
    - This section contains the main game elements. The player can choose their 'weapon' from the three options and ultimately try to win points. It is divided in to a result announcement section, the scores area, player and computer choice area and finally the controls area.
    - At the top of the game area, there is space for the result announcement of the winner of each round. This is blank by default, but javascript code runs with the following messages depending on the result - "You Win! Let's have another round", "You lose! Let's have another round" and "It's a draw! Let's have another round". The message encourages the user to continue playing regardless of the outcome of each round.
    - Beneath this, the choice area for both the player and computer is shown, with the player area on the left, and computer on the right. The choice area consists of the user header, the current score and an image of their currently selected choice.(On initial load, an image of the 3 options is displayed as a placeholder before the first choice is made). The JS script changes the image depending on the choice that is made from the control area below.
    - At the base of the game area is the controls and rules section. A message instructing the player to make a choice is shown to direct the user how to start the game. Below this, three circle buttons are displayed with a thumbnail image of each option and its corresponding name.
    - Underneath the controls area is a small container displaying the simple rules to the player. They are always displayed for usability and reference.

![Game Area Image](#)

- #### **Footer**
    - This section displays some important information regarding the location of the cafe. A large embedded google map link is included along with the address, telephone and email address of the cafe.
    - A list of the cafe's opening hours is included so customers are aware of when they can visit during the week
    - Links to the cafe's social media accounts are also present to encourage engagement on social media networks, and these all open in a new tab to allow the user to keep the main website open while they might be browsing the other links.

![Footer section image](#)

- #### **

## User Experience

### User Stories

#### Client Goals
- A responsive website that is able to be viewed on multiple devices including laptps, tablets and mobile
- To inform potential or regular customers of the food and drinks options available in the cafe
- To allow the customer to book a table at the cafe at a time of their choosing
- To communicate the ethics of the cafe in its use of fresh, locally supplied, organic and vegetarian ingredients
- A website that entices the user to interact and to whet their appetites to increase footfall at the cafe

#### First Time Visitor Goals
- I want to find out what food options are available at the cafe
- I want to be able to book a table at the cafe 
- I want to see if the cafe is a nice place to eat
- I want to find out the location and opening hours of the cafe
- I want to visit the cafe's social media platforms to view their photos
- I want to find out the ethos of the cafe and whether it aligns with my own

#### Returning Visitor Goals
- I want to book a table for my next visit
- I want to see if the menu options have changed since my last visit
- I want to visit the cafe's social media platforms to view their photos
- I want to find out the location and opening hours of the cafe

## Design

### Colour Palette
- The colour palette was chosen to communicate the ethos of the cafe using organic, natural earthy tones that weren't distracting to the visitor, but added to the pleasing nature of the website.

![Colour palette for the website](./assets/images/Readme-images/Colour-Palette.jpg)


### Typography
- The Verdana font was used throughout the website, being an accessible sans-serif font face, making the website easy to read for all visitors.


### Imagery
- All imagery for the website was downloaded from Pexels.com which provide free to use images. Credits for the images are listed in the credit section below and in the names of the images used.



### Wireframes
- I designed the website firstly through hand drawn sketches that were then turned into basic wireframes on Figma, before being made into high fidelity wireframes.

![Wireframe selection](./assets/images/Readme-images/Wireframes-selection.jpg)


### Accessibility
- The website was designed and developed with accessibility in mind using colours that conform to the minimum 4.5:1 colour contrast ratio as per the WCAG 2.0 level AA Guidelines
- Semantic HTML elements allows for easier navigation of the website
- Alt text has been added to all non-decorative images used on the website
- Font style used is simple and easy to read for all users.

## Technologies used

### Languages used
- HTML5
- CSS3

### Frameworks, Libraries and Programs used
- [GitHub](https://github.com)
- [Gitpod](https://gitpod.io/workspaces)
- [Figma](https://www.figma.com/)
- [Optimizilla Image Compressor](https://imagecompressor.com)
- [Fontawesome](https://fontawesome.com/)
- [Am I Responsive](http://ami.responsivedesign.is/)
- [Coolers.co](https://coolors.co)
- [Pexels.com](https://pexels.com)
- [Chrome Dev Tools](https://www.google.com/intl/en_ie/chrome/)
- [A11y color contrast validator](https://color.a11y.com/Contrast/)
- [Convertico](https://convertio.co/)

## Testing
The website was tested for markup and CSS validation, responsive design and accessibility using multiple browsers including Chrome, EDGE, and Firefox.
The W3C Markup validator retuned several erros on the 3rd September when tested. This included an error for a disallowed element present within a unordered list, an incorrect value for the width of an iframe, and a bad value for an input type on the booking form. These were all rectifiedin order to pass validation, as shown below. On CSS validation on the 8th September, an incorrect value was present in the grid rows style of the About us Card grid element. This was rectified to achieve oa pass on the validation. Please see screenshots of the previous results below:
[W3C Markup Result 03092022](./assets/images/Readme-images/W3C-Markup-Results-03092022.jpg) [W3C CSS Validator Result 08092022](./assets/images/Readme-images/W3C-CSS%20Validation-Report-08092022.jpg)

### Validator Testing
- HTML
    - Before final deployment, no errors were returned when passing through the offical [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchristo107.github.io%2FCI-PP-01%2F)
- CSS
    - Before final deployment, no errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fchristo107.github.io%2FCI-PP-01%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Responsiveness Testing
- The website was tested for responsiveness using the Chrome and Firefox browsers and their associated Developer Tools. 
#### Chrome
- A variety of screen sizes were checked for responsiveness using the Developer tools from 4K displays at 2560px wide, laptop sizes 1440px and 1024px, tablets at 768px, and a variety of mobile sizes down to 320px width. All elements maintained functionality and visibility in all scenarios. Real world testing was also conducted on physical devices of various sizes to ensure integrity. No issue was encountered on these.
- A Lighthouse report was run several times to gauge the performance, accessibility, best practice and SEO scores. Early tests showed a performance score of less than optimal at 77, and accessibility at 93. By optimizing some of the imagery used on the site I was able to achieve a performace score of 93, and then 99. There were a few missing alt tags on images and some colour contrast issues on the original test and once these were resolved, I was able to bring the accessibility score up to 100, with Best Practice and SEO also scoring 100.

![Lighthouse scoring Homepage](./assets/images/Readme-images/Lighthouse-results-09092022.jpg)![Lighthouse scoring Homepage](./assets/images/Readme-images/Lighthouse-results-13092022%201841.jpg)![Lighthouse scoring Homepage](./assets/images/Readme-images/Lighthouse-results-homepage-16092022-1837.jpg)

[Lighthouse scoring Booking Confirmation page](./assets/images/Readme-images/Lighthouse-BookingPage-results-16092022.jpg)

### Accessibility Testing
- Multiple tests were run on the website using Lighthouse and A11y Color Contrast Accessibility Validator to examine any accessibility issues.
#### Firefox
- Firefox's built in colour blindness simulator was used to identify any areas where sufficient colour contrast was not present.

## Deployment
I used the Gitpod to develop th website and the site was deployed using GitHub Pages. Please see details below:

- The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://christo107.github.io/CI-PP-01/

## Bugs
### Fixed Bugs
- There was an issue with the Book a table call to action button that could not be centred in the hero section. This was fixed by changing the display of the containing wrapper to Flex and an align-items property of center.
![Book a table CTA button bug](./assets/images/Readme-images/Booktable-button-not-centred.jpg)![Book a table CTA button bug dev tools image](./assets/images/Readme-images/Book-table-button-not%20centred-dev-tools.jpg)
- Header was overlapping section headers after scrolling to section. This was fixed with code taken from (https://css-tricks.com/fixed-headers-on-page-links-and-overlapping-content-oh-my/).
- On small size mobile screens, the social media icons in the footer were running on to a second line instead of remaining on one. This was fixed by reducing the padding between the icons on the media query max-width 360px.
![Social Media Icons Bug](./assets/images/Readme-images/Mobile-footer-socialmediaicons-bug.jpg)

### Known Bugs
- Keyboard navigation via the tab key is restricted in some sections of the page including the food and drinks menu. I have tried to fix the bug using tabindex="0" attribute on elements but this has not resolved the issue.

## Credits

### Content 

- The text content of the website was written by the developer.
- The hero slider was modelled on the design by Avi Kohn with modifications to suit my needs.(https://codepen.io/AMKohn/details/DZYKEV)
- The icons in the small mobile nav menu and footer were taken from [Font Awesome](https://fontawesome.com/)
- The tab-style layout of the food and drinks menu was based upon a design by Wendy Ho, but modified and re-styled by me (https://codepen.io/Wendy-Ho/pen/MWWBvmd)
- The header section was inspired by the Love Running project by Code Institute.

### Media

- The imagery used in the hero slider, about us section, book a table section and food and drinks menu section were taken from the [Pexels.com](https://pexels.com) website, a source for free to use imagery. I would like to give credit to the creators of the images below-

## Acknowledgements
 - My mentor for his advice and assistance
 - The CI students who peer reviewed my website and gave feedback