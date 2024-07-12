# rn-assignment7-11083926
Assignment 7 for DCIT 202 Mobile Application Dev

## ID: 110839526

## Screenshots

## Components

## Home Screen
The Home Screen consists of the Header, OurStory, Products and HomeScreen javascript files.

### Header
The Header file contains the code for the header of the Home Screen. It contains the menu, logo, search and shopping bag icons.

### OurStory
This file contains the text 'OUR STORY' as in the UI mockup, the ListView and Filter icons.

### Products
This file contains the list of products in the app.

### HomeScreen
This file is just the compilation of all the other files. It makes up the actual home screen.


## Cart Screen
The Cart Screen consists of the Header, Checkout, Footer and CartScreen files.

### Header
The Header.js file contains the code for the header of the Cart Screen. 

### Checkout
This renders the items in the Home Screen so when products are added to cart from the home screen, they appear on the cart screen. it also allows a user to delete items from the cart screen.

### Footer
This file contains the checkout button, and displays the estimated sum of the products added to the cart screen

### CartScreen
This file is the compilation of all the other files in the CartScreen folder to form the actual cart screen.

### CartContext
Using react context api handle and utilizing asyncstorage to locally store the information

## Modifications

### Header
Modified the header.js to render the sidebar, where on click it renders and closes based on clicking the close (X) button 

### Footer
Modified the footer in the product details screen/page so that when clicked on it adds the item to the cart