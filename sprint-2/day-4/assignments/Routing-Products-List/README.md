## React-Routing-Products List

#### Problem Statement

Create the following application: Products Page using the boilerplate code provided in the zip file

## Maximum Marks - 15

```
✅ able to submit - (default) 1 mark
✅ Should render the homepage by default - 1 mark
✅ Should navigate the user to the Products page, when clicked on the 'View all Products' button - 1 mark
✅ Should fetch and render the products using the ProductCard component - 2 marks
✅ Should render, image, title, price inside the ProductCard component - 2 marks
✅ Should navigate the user to SingleProduct page, when clicked on 'More Details' button - 2 marks
✅ Should fetch the product details, using the productId variable from the URL - 2 marks
✅ Should show the details of title, image, price, category and description on the SingleProduct page - 2 marks
✅ Should show the 404 page not found, when visiting and un-listed route - 2 marks
```

### Note : submitting just boilerplate code will give you testfailed error

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
// install node_modules
npm install --engine-strict

// run locally
npm run start

//to start the json-server
npm run server

```

##### NOTE:

1. Make sure that the json-server is up and running at port 8080
2. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. You need to restart the react server once the env file is updated
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url

### Testing Objectives

- Ability to set up Routing functionality, using react-router-dom
- Ability to fetch data, and show it on the UI
- Ability to manage/work with the fetched data

### Understanding Component Structure

- App
  - MainRoutes
    - Path: “/”, Page: Homepage
    - Path: “/products, Page: Products
    - Path: “/products/:productId", Page: SingleProduct
    - Render the PageNotFound page, for all other routes
      Use the ProductCard component to render the Products inside the Products page

### JSON Data:

- db.json file is included in the boilerplate zip file, with the initial watches data. **Do not overwrite/modify this data**

### Features to build:

1. Homepage:

- Link/Navigate the user to the Product page, when they click on the 'View all Products' button

![](https://i.imgur.com/ypiG68W.png)

2. Products page:

- Fetch all the products data from the json-server, and render the data in the UI using the ProductCard component
- The product card component should contain the title, image and price
- The user should be navigate to the SingleProduct page, when clicked on the 'More details' button in the ProductCard component

![](https://i.imgur.com/pHYl0cJ.png)

3. SingleProduct:

- Fetch the details of the product, based on the productId received from the URL
- Render all the details, of title, image, price, category and description on the page
  ![](https://i.imgur.com/zBZc2bB.png)

4. Should show the 404 page when visiting any unlisted path.
   ![](https://i.imgur.com/Xz25P57.png)

### General Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding
- So we request you to read the problem carefully and debug before itself.
