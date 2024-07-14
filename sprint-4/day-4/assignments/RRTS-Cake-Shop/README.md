# React Redux TS Cake Shop App

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if Submitting for updates the redux store - 1 mark
 ✅ Check the redux store after multiple form submits - 1 mark
 ✅ Visit Cakes Page and check the table - 2 marks.
 ✅ Check if Cake Buying works or not - 2 marks.
 ✅ Visit Edit Page - 1 marks.
 ✅ Edit and Check the table - 2 marks.

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

- You have to build a basic Cake Shop app with React Redux and Typescript.

- Use Redux here for state management purposes.

- All the Products should be stored in Redux Store with key:- `cake`.
- Here you will have 2 pages:-
  1.  `Home(/)`
  2.  `Cake(/cake)`
  3.  `Edit(/edit/:cakeid)`

### Home Page:-

- In this page you should have a form. When you submit this form store the form's data in the redux-store.

- Below is the structure of the data that should be stored in the redux-store:-

```
id(number)
name(String)
description(String)
flavour(A Union type of Chocolate, Vanilla, Strawberry)

```

- Here all the data will come from the form submit except for the id. This id should be unique for each cake. You can use `Date.now()` to create an unique id.

- Please have a look at this image for a better understanding:-
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-22/Screenshot%202023-03-22%20at%205.10.29%20PM_700453.png)

### Cake Page:-

- In this page all data will come from the redux-store.
- Loop over the data and show it in form of a table.
- The table will have the following rows:-

```
<tr>
    <td>
      <Link to={`/edit/${id}`}>ID</Link>
    </td>
    <td>Name</td>
    <td>Description</td>
    <td>Flavour</td>
    <td>Buy</td>
</tr>

```

- Here the `Link` comes from `react-router-dom`.
- Please reffer to this image for a better understanding:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-22/Screenshot%202023-03-22%20at%205.11.04%20PM_760841.png)

### Edit Page:-

- When the user visits the edit page, show them a form same as the Home page but this time the input/select/textarea will have their value stored in redux-store.

- When the user updates the input/select/textarea values and submit the form update the data in redux-store.

- Please reffer to this image for a better understanding:-
  ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-22/Screenshot%202023-03-22%20at%205.11.25%20PM_702745.png)

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
