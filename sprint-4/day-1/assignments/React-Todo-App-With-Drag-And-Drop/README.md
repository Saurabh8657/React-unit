<h1 style="color:#397ce7">React-Todo-App-With-Drag-And-Drop</h1>

<h2 style="color:red">
Submission Instructions [Please note]:
</h2>

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package-lock.json to GitHub

<h2 style="color:red">
Installation:
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- `npm install --engine-strict`
- `npm start`
- `npm run server` -> to start the json-server

<h4 style="color:red">
   Note:-
</h4>

1. Make sure that the Json-Server is running at port 8080
2. Use JSON-Server URL a`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` Instead of using `http://localhost:8080`
<h2 style="color:#397ce7">
Maximum Marks - 16
</h2>

```
 ✅ should be able to submit application: - 1 mark ( minimum score )
 ✅ should have a title of the application: - 1 mark
 ✅ should make a GET request when app loads: - 1 mark
 ✅ should have all the todos visible for notStarted: - 2 marks
 ✅ should have all the todos visible for inProgress: - 2 marks
 ✅ should have all the todos visible for completed: - 2 marks
 ✅ should have draggable attributes for all todo: - 1 mark
 ✅ should change todo status if we drag it from notStarted to inProgress & make a PATCH request: - 3 marks
 ✅ should change todo status if we drag it from inProgress to completed & make a PATCH request: - 3 marks
```

<h2 style="color:#397ce7">
Folder Structure (Important Files):
</h2>

```
src
├── App.css
├── App.jsx
├── Components
|  └── Todo.jsx
├── index.css
├── index.js
├── logo.svg
└── Pages
   └── Home.jsx
```

<h2 style="color:#397ce7">
Problem Statement:
</h2>

Create an application using React and Axios, allowing users to manage and organize their tasks across different stages: "`notStarted`", "`inProgress`", and "`completed`". Tasks can be dragged and dropped between these stages for easy status updates.

<h2 style="color:#397ce7">
Features
</h2>

- View tasks categorized by status: "`notStarted`", "`inProgress`", "`completed`".
- Drag and drop tasks between different status containers to update their status.
- Tasks are fetched from and updated in the backend using `Axios`.

<h4 style="color:red">
   Note:-
</h4>

- Do not use any npm package or library dependencies to implement drag-and-drop functionality
- Use HTML core API for drag and drop functionality.
- Refer to this doc for more understanding [Drag And Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

<h2 style="color:#397ce7">
Components & Pages:
</h2>

<h3 style="color:#397ce7">
1. App.jsx
</h3>

- It should include a `title` and a `Home.jsx` page.
- The title should be `Todo App`, enclosed within an `h1` HTML tag.

<h3 style="color:#397ce7">
2. Home.jsx
</h3>

The Home component is the main component that renders the Todo List application. It fetches tasks from the backend, displays them in different columns based on their status, and allows tasks to be dragged and dropped to update their status.

- Use `useState` hook to manage state and `useEffect` for API requests.
- When the page loads, fetch all the todos from the JSON server and render them inside `div` (given with `className="todo-list"`) with respect to their status.
- There are three possible statuses for a todo: `notStarted`, `inProgress`, and `completed`.
- For each status, display the respective todos in separate containers using a `div` tag, each having the classNames `notStarted`, `inProgress`, and `completed` according to their respective status.
- Display the status titles `notStarted`, `inProgress`, and `completed` for each respective container using `h2` tags.

<figure style="border: 1px solid gray; ">
<img src="https://i.imgur.com/xazZs4E.png" width="100%">
<figcaption align = "center"><b>Fig.1 - Home.jsx</b></figcaption>
</figure>

<h3 style="color:#397ce7">
3. Todo.jsx
</h3>

The Todo component represents an individual task. It displays the task's title and enables dragging functionality.

- This component will receive a `todo` and a `function` to enable dragging the todo.
- To enable dragging functionality for a todo, set the `draggable` attribute to `true` and assign the `id={id of todo}` to a `div` element with the `className='todo'`.
- Each todo `title` should be rendered in above mentioned div having `className="todo"`.
- div with the `className="todo"` should not have any child html elements.
- If a todo is dragged from one status container to another, a `PATCH` request should be made to endpoint `/todos/{id}` to update the todo's status. The DOM should be updated in real-time to reflect this change(Hint: make a `GET` request to get updated todos).

<figure style="border: 1px solid gray; ">
<img src="https://i.imgur.com/5mDWn7S.gif" width="100%">
<figcaption align = "center"><b>Fig.2 - Drag And Drop Functionality</b></figcaption>
</figure>

<h2 style="color:#397ce7">
Tested on cp.masaischool.com:         
</h2>

<figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/V77yNCr.png" width="100%">
</figure>

<h2 style="color:red">
Important Instructions:
</h2>

- Do not remove the `data-cy` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

<h2 style="color:red">
General Instructions:
</h2>

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
