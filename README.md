# JavaScript-Calculator

## Project description
Outline
Create a README.md on your Calculator repository that includes a picture of the design you will be reproducing
Using HTML + SCSS, recreate the design that you chose
In the README.md add a breakdown of your project for the JavaScript part of the code. We encourage you to be as granular as possible. const scope3 = () => { const scope3Var = "123"; }
MVP
Create a calculator to be rendered to the html page
it should have number keys from 0 to 9const scope3 = () => { const scope3Var = "123"; }
It should have operator keys (+, -, /, *, =)
It should have a display rendering the current calculation in a box at the top
It should also have a “.” key

## Table of Contents

-   Inspiration and Chosen Styling
-   Coding Stack
-   Implementation Plan

## Inspiration/Styling
<figure>
<figcaption>Inspiration Image</figcaption>
<img src="./imgs/inspiration.png" width="300px"/>
</figure>

<figure>
<figcaption>Live Design</figcaption>
<img src="./imgs/styledcalc.png" width="300px"/>
</figure>



## coding Stack
- Javascript
- HTML
- CSS/SCSS/SASS

## Implementation Plan
The followiung is a generalised plan to help structure the javascript required to meet the porject mvp. 

**Concatenation of buttons or html elements (divs) to required function/output when clicked:**
1. Write the necessary javascript that allows elements in the HTML (buttons which in this case are divs) to be clicked
2. Write the necessary code that concatenates the button number or operator to perform its desired function when clicked
3. Write the necessary code to store these numbers or operators in memory until the clear button is pressed

**Concatenation of clicking buttons causing content to be generated in the display:**
1. Write the necessary code which makes equation (mix of numbers and operators) appear on the top half of the display
2. Write necessary code which pushes answer to equation to appear on the bottom half of the display when the equals operator is pressed
3. Write the code that leaves displays empty when no buttons have been input or clear button has been used. 
4. Write the code that prevents the displaying of the number or operator when an impossible operation has occured.

**Prevention of undesired scenarios:**
1. Write the necessary code which prevents multiple decimal points from occuring
2. Write the code which allows a max limit of number size and or equation size input (10 characters maximum)
3. Write the code which converts outputted large numbers into exponential form when they breach the maximum character limit
4. Write the necessary code which evaluates equations to a maximum number of decimal places


 
