## React User Management

## Tags

react, useState, conditional rendering, props

## Submission Instructions [Please note]

## Maximum Marks - 5

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ The Form and the table components are present in the DOM - 1 marks
 ✅ When the form Submit happens it adds a new row on the table - 1 marks
 ✅ Check if the text that is being appended is correct or not - 1 marks
 ✅ Password input toggles visibility when "Show Password" checkbox is clicked - 1 mark
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run `npm install --engine-strict` to install the node modules
- Run `npm test` for the test cases.

## Description

- You need to build a Small user management app with react
- In the React app there is a Form.jsx file
- Inside the form there are some input fields
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-08-11/Screenshot%202023-08-11%20at%202.36.19%20PM_950275.png)
- When a user submits the form take all the values from the input tags and store the values in a state
- Loop over the state and show the data in form of a table
- Use the Table and the Row component for showing the data
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-08-11/Screenshot%202023-08-11%20at%202.38.03%20PM_207878.png)
- Inside the Form.jsx there will be a PasswordInput component
- There will be a checkbox inside the component
- If you check that checkbox the password typed in the input tag should be visible else it shouldn't be visible
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-08-11/Screenshot%202023-08-11%20at%202.38.41%20PM_725917.png)

## Note

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove data-testid="xxxx" from anywhere, these are used by testing tools to test your code, and removal of this will lead to the low score.
- Also make sure to cross-check all the spellings and Cases of Texts.

## General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
  try to keep one submission at a time
