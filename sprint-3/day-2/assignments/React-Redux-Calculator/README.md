## React-Redux-calculater

#### Problem Statement

## Submission Instructions [Please note]

## Maximum Marks - 20

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check Initial Redux Store Structure - 2 marks
 ✅ displays the initial value "0" - 1 mark
 ✅ should add two numbers - 2 marks
 ✅ should subtract two numbers - 2 marks
 ✅ should multiply two numbers - 2 marks
 ✅ should divide two numbers - 2 marks
 ✅ should clear the display - 2 marks
 ✅ performs complex mathematical operations - 3 marks
 ✅ check whether all other buttons are working fine or not - 3 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
// install node_modules
npm install --engine-strict

// run locally
npm run start

```
- **_Note_**:

1. Libraries need to be installed by yourself

#### Steps

### Testing Objectives

- Ability to set up a Redux and connect it with your React application
- Ability to use Redux, for storing and accessing application data, respectively
- Ability to get, and update data in redux store

### Understanding Component Structure

- Components
 - Button.jsx (you need to re-use this button)
 - Display.jsx (you need to use this component for displaying data)

### Redux
- action.js
- actionType.js
- reducer.js
- store.js

### initial redux state should look like this

 ```
 {
  result: '0',
  operation:"",
  prevValue: "'',
  nextValue: "''
 }
 ```
- At any point of time the result should be the value that is displayed on the screen(the initial value of the display is 0);
- whenever the user clicks on any operator the value of the operation should be updated with the appropriate value in the redux store. (like when I tried to add two numbers by doing 12+13, if I check the redux store the value of operation should be "+");
- Update the redux store with values of type string like instead of 1 update it as "1"

**NOTE**: Redux is mandatory for this application

1. You are expected to write all the other remaining parts (action-creators, reducer file logic, etc) to set up the redux store in the boiler plate.
2. Make sure Redux is connected with your React application properly, and you have access to the Redux store data

### Features to build:

<div style="display: flex; justify-content: center; align-items: center; height: 500px;">
  <img src="https://i.imgur.com/TIYJ4ff.png" height="100%">
  <span style="line-height: 500px;">==&gt;</span>
  <img src="https://i.imgur.com/KHI8NlP.png" height="100%">
  <span style="line-height: 500px;">==&gt;</span>
  <img src="https://i.imgur.com/WthTQ4C.png" height="100%">
</div>

1. You need to build a calculator application using React and Redux that can perform basic arithmetic operations like addition, subtraction, division, and multiplication.
2. The calculator should display the result of the operation and provide a clear button to reset the result field.
3. The calculator should have buttons for the numbers 0-9, decimal points, and basic arithmetic operations (+, -, *, /).
4. When the user clicks on "=" button the the result to be displayed
    - for example, when the user tried to calculate
    - Type 1+2+3 display(1+2+3)
    - when he clicks on "=" button the display textContent should be 6 only.
5. The user should be able to perform multiple arithmetic operations.
6. The calculator should provide a Clear button to reset the result field to its initial state (here redux state also needs to be reset).
### General Instructions:
- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, and removing them may lead to low scores.
- Do not change the current folder structure, and names of components provided.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time