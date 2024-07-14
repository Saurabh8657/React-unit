# React Redux TS E-Commerce App

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Test if the Fetch Request - 1 mark
 ✅ Check the initial State of the redux store - 1 mark
 ✅ Check the dom if the product cards are showing - 2 marks.
 ✅ Check if Cart Add works or not - 1 marks.
 ✅ Check the Redux Store after adding products - 2 marks.
 ✅ Add Same product twice in cart - 1 marks.
 ✅ Visit Cart page and check for no of Cart Products - 1 marks.
 ✅ Check the DOM of the Cart Page - 1 marks.
 ✅ Check the deletion of Products with redux store update - 4 marks.

```

## Installation

- Use node version 16.16.0

- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "contents" of the unzipped file in the Masai Folder.

- Navigate to the Masai Folder, in VS Code.

- Run the following commands inside,

`npm install --engine-strict`
`npm start`

## Description:-

- You have to build a basic E-Commerce app with React Redux and Typescript.

- Use Redux here for state management purposes.

- All the Products should be stored in Redux Store with key:- `cart`.
- Here you will have 2 pages:-
  1.  `Home`
  2.  `Cart`

### Home Page:-

- First make an api request on this Rest end-point:-
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`

- After a successful api request, you will get a data in Array of Object Format. For each data you have to show the `Product`(src/Components/Products.tsx) Component.

- Here the Basic Display of the Product cards is given in the template. You have to create a button inside each card.

- When clicking on the Button add that perticular Product data in your Redux Store.

- Please make sure the user shouldn't be able to add the same product to the cart multiple times

- Reffer to this image for a better understanding:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-20/Screenshot%202023-03-20%20at%207.28.38%20PM_295657.png)

### Cart Page:-

- Here you have to take the data from the Redux Store and for each Product you have to show the `Product`(src/Components/Products.tsx) Component.

- Now in this page the button of the `Product` component will be used for deleting. When Cliked on the button that perticular Product should be deleted from Redux Store.

- Reffer to this image for better understanding:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-20/Screenshot%202023-03-20%20at%207.29.31%20PM_973044.png)

### Navbar:-

- In the Navbar Component we have 2 `Link` from `react-router-dom`. On the second Link there is a span with id:- `cart-count`. Here you have to show the No of Elements in the Redux Store stored as Cart Products.

- Reffer to this image for better understanding:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-20/Screenshot%202023-03-20%20at%207.29.31%20PM_864227.png)

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.

2. Do Not Remove ` data-testid="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.

3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks.

4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components. But make sure there is no error in your application(including TS Errors).

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
