# IT3133-ICEA01
## Question

You are requested to develop the front end of an online flower shop e-commerce application.
For the initial step, you must complete the given task with efficient programming methods
and component architecture. The task details are elaborated below.


## Features

- Display a list of flowers with images, names, and prices.
- Users can specify the quantity and add flowers to the shopping cart.
- The shopping cart shows the selected items, quantities, individual totals, and the grand total.

---
## Project Components
- FlowerDb.js
   -  Stores flower data (ID, name, price, image, etc.) as an array of objects.
- Product.js
    - Displays individual flower items with name, price, image, and quantity input.
    - Includes an "Add to Cart" button for adding flowers to the cart.
- Products.js
    - Renders all flower items using the Product component.
    - Manages cart state and handles adding flowers to the cart.
- Cart.js
    - Displays items in the shopping cart.
    - Shows the total price for each item and the grand total for the purchase.
  

## Images
- Flower images are stored in the src/assets/image folder. Ensure the image filenames match the ones defined in FlowerDb.js.

## output

![Screenshot (737)](https://github.com/user-attachments/assets/85377612-ea04-4934-9015-180376cc3026)
