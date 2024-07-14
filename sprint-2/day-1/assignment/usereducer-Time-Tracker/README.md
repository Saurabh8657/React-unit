# react-usereducer-Time-Tracker

## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Installation

- you can use any node version >= 14 and <=16
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - run `npm install --engine-strict` to install the node modules
  - `npm start`
  - `npm run test` -> to run the test

## Maximum Marks - 20

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Activity reducer initialState should match with the initial state as per problem  - 1 mark
 ✅ Form reducer initialstate should match the initial state as per problem - 1 mark
 ✅ Form Reducer should update on typing activity in the input box - 1 mark
 ✅ Form reducer should update on typing user in the input box - 1 mark
 ✅ Form reducer should update on selecting gender from the options  - 1 mark
 ✅ Form reducer should update on typing time in the input box - 1 mark
 ✅ Form is present with proper input fields to take input of activities - 1 marks
 ✅ Activity Reducer state should update on adding activity - 1 mark
 ✅ The added activities should be displayed on DOM - 2 marks
 ✅ Required Proptypes should be defined for all the props in ActivityCard component - 2 marks
 ✅ should initialize with the correct time and status - 1 marks
 ✅ should start the timer and decrement the time every second - 2 marks
 ✅ should end the timer when time reaches 0 - 2 marks
 ✅ should clear interval when component unmounts - 2 marks
```

## Folder Structure (Important Files)

```
>src
├── >component
│    └── AddActivity.jsx
│    └── Navbar.jsx
│    └── ActivityList.jsx
│    └── ActivityCard.jsx
├── >reducers
│    └── formReducer.js
│    └── activityReducer.js
├── >Hooks
│    └── useTimerHook.js
└── App.js
```

## Problem Statement

Create a activity list app with time tracking component. The user can add a activity and provide a timeline(provide it in second for simplicity). The status of the card will change `True or False` based on the given timeline.

You need to create a custom-hook `useTimer` for using the timestamp.

#### useReducer

- Create the reducer functions as `formReducer` and `activityReducer`.
- Create it within the files provided and export it.

- The initial state for `form` will be as

```
  activity: "",
  user: "",
  gender: "",
  time: 0,
```

- - The initial state for `activities` will be as

```
activities: [],
```

- The following action types will be triggered on form for corresponding activity values

```
"ACTIVITY"
"USER"
"GENDER"
"TIME"
"RESET" - (For resetting the state)
```

- The following action types will be triggered on activity for adding activity

```
"ADD_ACTIVITY"
```

#### AddActivity.jsx

- Create a form where the user will enter all the activity details
- Provide input boxes for following :-

```
Activity: - String
User: - String
Time: - Number
```

- Provide the input tags below `label` tag within the wrapper `div` provided

- Provide a select tag for gender with the following options and corresponding values
- This select tag will have `data-testid="gender-select"`

```
`Option`-`Value`
- Male   -  "male"
- Female   -  "female"
```

- Provide a submit button for submitting the form.
- After submitting the form both the `form` and the `formReducer` state should be reset.

_Show the Activity List on this page only using the `ActivityList` component_

#### ActivityList.jsx

- Map through the activities list and show it on the same page.
- The activity card will have `data-testid="activity-card"`

- Refer the image provided for more clarity

<img width="1723" alt="Screenshot 2023-05-11 at 9 19 23 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-07-27/Screenshot%202023-07-27%20at%207.15.21%20PM_331699.png">

#### ActivityCard.jsx

- It will accept all the activity details
- Display the following
- Once the status changes to true, turn the background to red

```
activity :- with `data-testid="activity-name"`
user :- with `data-testid="activity-user"`
gender :- with `data-testid="activity-gender"`
status :- with `data-testid="activity-status"`
time :- with `data-testid="activity-time"`
```

**The time will come from the `useTimer` hook.**
**The status will also come from `useTimer` hook.**

**Define proptypes with proper data-types**
**All the props of activity card should be required**

**Status Will come from the custom hook as per the time**

## useTimer Custom-Hook

You have to create a custom hook, which will accept the time in second. It will run a countdown in reverse order with interval of 1 second, till the time reaches ZERO.

- It will accept `time` as initial time as parameter
- It will return the `time`(current time) and the `isTimerEnded`(Status in boolean if time ended)
- Return stattement :- `[time, isTimerEnded]`
- `isTimerEnded` will be `false` initially and will turn `true` once the timer ended.
- The interval of the timer will be 1 sec.
- Once the timer ends do not forget to cleanup

### Note : The submissions are invalid if `useReducer` hook is not used.

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
