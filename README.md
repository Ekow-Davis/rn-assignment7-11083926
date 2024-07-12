# rn-assignment7-11083926
Assignment 7 for DCIT 202 Mobile Application Dev

## ID: 110839526

## Screenshots
![Homescreen](https://github.com/user-attachments/assets/d1fb7822-e69d-4517-817f-fd3038c74ba7)
![ExtraItemsInCart](https://github.com/user-attachments/assets/98093733-3d01-487d-8169-df8a6e966fd6)
![cart](https://github.com/user-attachments/assets/e9566868-de6c-4cc4-98d9-b50be90dd4f7)
![Addingbyproductdetail](https://github.com/user-attachments/assets/336a5d37-8096-431b-ba29-fb40ebd76aeb)
![Sidebar](https://github.com/user-attachments/assets/f13240e1-d5b0-4a99-8fd1-b469725c092e)
![Screenshot_20240712_205139](https://github.com/user-attachments/assets/455abbcf-32e5-49cf-97ab-3c7a07a9bea6)
![ProductDetail2](https://github.com/user-attachments/assets/a74de3c0-88ef-4460-9938-117f52d1c19b)
![productdetail1](https://github.com/user-attachments/assets/34765afe-ecfd-4b0e-a9e8-81c8df54e31b)


## Components
### Home Screen
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
