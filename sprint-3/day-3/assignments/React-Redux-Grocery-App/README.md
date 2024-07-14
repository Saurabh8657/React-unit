## React-Redux-Grocery-App

#### Problem Statement

Create the following application: Products Page using the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 11

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check Initial Redux Store Structure - 2 marks
 ✅ Check if user gets redirected after login - 2 marks
 ✅ Check if store data is being updated when user logs in - 2 marka
 ✅ Check if grocery data is updated in the store - 2 mark
 ✅ Check if grocery data is updated on the DOM - 2 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
  - `npm start`
  - 
- **_Note_**:

1. Libraries needs to be installed by yourself

#### Steps

### Testing Objectives

- Ability to set up a Redux and connect it with your React application
- Ability to use Redux, and Redux-Thunk, for storing and accessing application data, respectively
- Ability to get, and update data in redux store

### Understanding Component Structure

- Components
  - Dashboard
  - Login
- Routes
  - All Routes  
    - Path: “/”, Page: Login (Public Route)
    - Path: “/dashboard”, Page: Dashboard (Private Route)

### Redux

- Store

**NOTE**: Redux is mandatory for this application

1. Some of the boilerplate is provided. You are expected to write all the other remaining parts (action-creators, reducer file logic, etc) to set up the redux store.
2. Make sure Redux is connected with your React application properly, and you have access to the Redux store data

### Features to build:

1. The user should be able to login in the application using the following api: 
   - ```https://reqres.in/```
   - Update isAuth in your redux store when user logs in successfully

2. The grocery data received from the api: ```https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries``` should be stored in the Redux store

3. Your initial redux state should look like this
   ```
   groceryData: [],
   isAuth: false,
   isLoading: false
   ```
4. Update is isLoading and isAuth state on relevant states of login. 

5. Esnusre that all api calls are being done in actions.js and actionTypes are created for the same.

<img width="1727" alt="Screenshot 2022-12-19 at 3 42 02 PM" src="https://user-images.githubusercontent.com/39851506/208604651-e91892fa-6f81-4c88-809f-12d2cede5d12.png">

<img width="1728" alt="Screenshot 2022-12-19 at 3 42 11 PM" src="https://user-images.githubusercontent.com/39851506/208604653-287961b2-638a-4561-9155-9358e828491c.png">


### General Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
