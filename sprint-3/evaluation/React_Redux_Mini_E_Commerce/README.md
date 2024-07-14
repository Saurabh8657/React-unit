# React_Redux_Mini_E_Commerce

You need to create a mini e commerce application. On home page user can see the list of all products and they should be
able to add products to their cart and wishlist.

## Objective

- Learn to use Redux
- Learn to set up Redux
- Learn to use multiple reducres
- Learn to use redux-thunk

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push `package-lock.json`
- Download and unzip the boilerplate
- Navigate to the correct path
- Run `npm install` to install the node modules
- Run `npm start` to run.

## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Maximum Marks - 20

```
 ✅ The product initialstate should match with the given initial state: 1 Marks
 ✅ The cart initialstate should match with the given initial state: 1 Mark
 ✅ The wishlist initialstate should match with the given initial state: 1 Mark
 ✅ On homepage initially 10 items should be listed in grid fromat: 2 Mark
 ✅ User should be able to navigate to next and previous pages: 1 Mark
 ✅ The product store should update as per the current page number : 2 Marks
 ✅ User should be able to add single item to cart store: 1 Mark
 ✅ User should be able to add multiple items to the cart store: 1 Mark
 ✅ User should be able to remove items from the cart store: 1 Mark
 ✅ All the items added to the cart store should be shown on cart page: 1 Mark
 ✅ User should be able to add single item to wishlist store: 1 Mark
 ✅ User should be able to add multiple items to the wishlist store: 1 Mark
 ✅ All the items added to the wishlist store should be shown on wishlist page: 1 Mark
 ✅ User should be able to remove items from the wishlist store: 1 Mark
 ✅ User shoule be able to sort the items in ascending order: 1 Mark
 ✅ User shoule be able to sort the items in descending order: 1 Mark
 ✅ On sorting in ascending order product in store should also update sccordingly: 1 Mark
 ✅ On sorting in descending order product in store should also update sccordingly: 1 Mark
```

## Folder structure

```
> src
 ├── >Components
 │ └── ProductCard.jsx
 │ └── Navbar.jsx
 ├── >redux
 │ └── actionTypes.js
 │ └── reducers.js
 │ └── store.js
 ├── >Pages
 │ └── Cart.jsx
 │ └── ProductList.jsx
 │ └── WishList.jsx
 └── App.jsx
```

## Resources

- API Url : https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products
- To sort products on price : https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?sort=price&order=asc
- Order can be `asc` or `desc`

## Instructions

**Note: Display the texts as provided in images, Refer the images provided for better clarity**

### Redux

- Create a redux store, and use thunk middleware for async calls.
- Create separate reducers as `cart`, `wishlist` and `products` respectively.
- Use combineReducer
- The initial state will look like this

```
{
    products:{
                isLoading: false,
                isError: false,
                products: [],

             },
    cart: [],
    wishlist: []

}

```

#### App.jsx

- Create all the routes here
- `/` Will display the productList page
- `/cart` Will display the cart page
- `/wishlist` Will display the wishlist page

- On home page make a get request on the API and update the store.
- The `products` state should update as per the api request.

#### ProductList.jsx

- Display initial 10 products in this page
- use the `ProductCard` component to display individual Products.
- Render all the Products inside a div with className as `products-list-container`
- Apply `Pagination`, provide `previous` and `next` button.
- Previous button will have className `prev-button`
- Next button will have className `next-button`
- Display the page number here in p tag with className `page-number`

<img width="1723" alt="Screenshot 2024-02-02 at 4 59 32 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-02-10/Screenshot%202024-02-10%20at%201.36.49%E2%80%AFPM_516716.png">

#### Cart.jsx

- Display all the items added to cart in the page
- use the `ProductCard` component to display individual Products.
- Make sure `add-to-cart` and `add-to-wishlist` buttons are not visible on the card.
- Render all the Products inside a div with className as `cart-items-container`.
- If the cart is empty dispaly `Your cart is empty` with className `empty-text`
- Provide a button on each card to remove the item from the cart
- Update the store accordingly after removing
- The remove button will have a className `remove-from-cart-btn`

- Cart will get the data from the store.

<img width="1723" alt="Screenshot 2024-02-02 at 4 59 32 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-02-08/Screenshot%202024-02-08%20at%2012.12.02%E2%80%AFAM_802085.png">
<img width="1723" alt="Screenshot 2024-02-02 at 4 59 32 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-02-10/Screenshot%202024-02-10%20at%201.37.26%E2%80%AFPM_185751.png">

#### WishList.jsx

- Display all the items added to wishlist in the page
- use the `ProductCard` component to display individual Products.
- Make sure `add-to-cart` and `add-to-wishlist` buttons are not visible on the card.
- Render all the Products inside a div with className as `cart-items-container`.
- If the cart is empty dispaly `Your cart is empty` with className `empty-text`
- Provide a button on each card to remove the item from the wishlist
- Update the store accordingly after removing
- The remove button will have a className `remove-from-wishlist-btn`

- Wishlist will get the data from the store.

<img width="1723" alt="Screenshot 2024-02-02 at 4 59 32 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-02-08/Screenshot%202024-02-08%20at%2012.11.12%E2%80%AFAM_633491.png">
<img width="1723" alt="Screenshot 2024-02-02 at 4 59 32 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-02-10/Screenshot%202024-02-10%20at%201.37.07%E2%80%AFPM_638365.png">

#### ProductCard.jsx

- Use this component to display the details of individual products.
- Every ProductCard will have a className `product-card`.
- Display the product image with className `product-image`.
- Display the product title with className `product-title`.
- Display the product brand with className `product-brand`.
- Display the product category with className `product-category`.
- Display the product price with className `product-price`.
- The "Add to Cart" button has a className `add-to-cart-btn`.
- The "Add to Wishlist" button has a className `add-to-wishlist-btn`.

**Note: Display the texts as provided in images, Refer the images provided for better clarity**

**On clicking Add to cart item should be added in cart and store should be updated accordingly**
**On clicking Add to wishlist item should be added in wishlist and store should be updated accordingly**

#### Sorting (Bonus)

- Navbar UI is provided
- A select option tag is provided for sorting
- Write the logic for srting the products on home page
- The store should also get updated accordingly

## General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- So we request you to read the problem carefully and debug it before itself
- We also request you not to just submit it last minute
- Try to keep one submission at a time

HAPPY CODING 🚀🤞
