# Employee Listing App

You need to create a employee listing application where users can see the list of all employees and their details in a different page.
A user can only see any employee details if he is authenticated, but the employee list page will be visible to everyone.

## Objective

- Learn to use Context API
- Learn to use Routing
- Learn to use Dynamic Routing
- Learn to create a Private Route

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

## Maximum Marks - 12

```
 ✅ Should make API call on home page to get list of all Employees" - 1 mark
 ✅ Should render the list of employees on home page - 1 marks
 ✅ Authentication should work properly - 2 marks
 ✅ Context should update on user Authentication - 2 mark
 ✅ Employee details page should not be accessible without authentication - 2 marks
 ✅ Should able to visit Employee Detail page after successful login - I - 1 mark
 ✅ Should able to visit Employee Detail page after successful login - II - 1 mark
 ✅ Should should display all the details of employee on employee details page - I - 2 marks
 ✅ Should should display all the details of employee on employee details page - II
```

## Folder structure

```
> src
 ├── >Components
 │ └── EmployeeCard.jsx
 │ └── Login.jsx
 │ └── Navbar.jsx
 │ └── PrivateRoute.jsx
 ├── >Context
 │ └── AuthContext.jsx
 ├── >Pages
 │ └── EmployeeDetail.jsx
 │ └── EmployeeList.jsx
 └── App.jsx
```

## Resources

- API Url : https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees
- To fetch single employee : https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees/id

## Instructions

**Note: Display the texts as provided in images, Refer the images provided for better clarity**

#### Context API

- Create context for `authentication`
- `AuthContext` for authentication
- Create the context in the provided file.
- Create context provider in the given file and export it from there.
- Maintain the state for `auth` in the respective context file.
- Initial state of auth will be `false`

#### App.jsx

- Create all the routes here
- `/` Will display the employee list in grid format
- `/login` Will display the login page
- `/employeeDetail` Will display the employee details page
- `/employeeDetail` Will be a **private** and a **dynamic** route

#### Login.jsx

- This will be the login page
- Create a form with two input boxes for `email` and `password`
- Use `reqres API` for login purpose
- On successfull login change the AuthContext state to true.
- On successfull login redirect the user to `Home` page.

- Input box for email will have id as `username`
- Input box for password will have id as `password`
- submit button will have className as `submit` with text `Login`

<img width="1723" alt="Screenshot 2024-02-02 at 4 59 32 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-02-04/Screenshot%202024-02-04%20at%2012.16.32%E2%80%AFAM_162975.png">

#### EmployeeList.jsx

- Display all the employees in this page
- use the `EmployeeCard` component to display individual employee.
- Render all the employees inside a div with className as `employee-list`

<img width="1723" alt="Screenshot 2024-02-02 at 4 59 32 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-02-04/Screenshot%202024-02-04%20at%2012.16.05%E2%80%AFAM_174934.png">

#### EmployeeCard.jsx

- Use this component to display the details of individual employees
- Every EmployeeCard will have a className `employee-card`
- Display image with className `employee-image`
- Display name with className `employee-name`
- Display gender with className `employee-gender`

**Note: Display the texts as provided in images, Refer the images provided for better clarity**

**On clicking this employee card route will change to employeeDetail**

#### EmployeeDetail.jsx

- Use this component to display detailed information about a specific employee.
- You can fetch the data again based on id, and filter
- The component has a container with className `employee-detail-container`.
- Inside the container, there is a main section with className `employee-detail`.
- Display the employee image using an `img` element with className `employee-image`.
- Display the employee name using an `h2` element with className `employee-name`.
- Display the employee ID using a `p` element with className `employee-id`.
- Display the employee gender using a `p` element with className `employee-gender`.
- Display the employee department using a `p` element with className `employee-department`.
- Display the employee salary using a `p` element with className `employee-salary`.
- Ensure that the displayed information corresponds to the fetched and filtered employee data.
- Make sure to handle cases where data might be missing or not available.

<img width="1723" alt="Screenshot 2024-02-02 at 4 59 32 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-02-04/Screenshot%202024-02-04%20at%2012.17.14%E2%80%AFAM_837682.png">

## General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- So we request you to read the problem carefully and debug it before itself
- We also request you not to just submit it last minute
- Try to keep one submission at a time

HAPPY CODING 🚀🤞
