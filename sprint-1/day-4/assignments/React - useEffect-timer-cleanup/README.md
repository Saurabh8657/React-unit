# React - useEffect-timer-cleanup

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub
- Rename the boilerplate folder name(there shouldn't be any spaces) once downloaded.
  follow this naming convention <block>-<sprint>-<eval> for e.g., b22-s1-c1 should be the folder name

## Rubrics

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ App should have the basic structure- 1 mark.
 ✅ Should be able to clean up intervals during unmount - 3 marks.
 ✅ If the timer is already over then the cleanup should not called during unmount - 2 marks.
 ✅ Check if the timer is able to start - 1 mark.
 ✅ Check if after Clicking on the Stop button the timer pauses and again clicking on Start timer starts again - 1 mark.
 ✅ Check if the reset button resets the counter - 1 mark.
```

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given IDs or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

#### Getting Started

#### Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Unzip the zip file, and COPY the contents in your Masai Repo Folder.
- Run the following commands
  - `npm install --engine-strict`
  - `npm start`

## Folder structure

```

├── src
|  ├── App.js
|  ├── Components
|  |  ├── Home.jsx
|  |  ├── Navbar.jsx
|  |  └── Timer.jsx
|  ├── index.js
|  ├── styles.css
|  └── utils
|   └── interval.js //(not necessary)can use for making interval functions. 

```

- Please ignore all the other files/folders except the above-mentioned ones.
- in .css files add your styles.

## Problem Statement:-

- Build a timer application that can give an input time in seconds there are three buttons start, stop, and reset clicking on those the timer should start, pause, and reset respectively.


Create the following application and complete the functionality of the components:

 **App.js**

- Render `Navbar.jsx` and conditionally render either `Timer.jsx` or `Home.jsx`. Initially, `Home.jsx` should be rendered. There are buttons in both `Home.jsx` and `Navbar.jsx` that will determine which component should be displayed, whether it's `Timer.jsx` or `Home.jsx`.

### Components

  - _*Navbar.jsx*_
    - Inside the `Navbar.jsx` component there are two buttons.(already provided just add functionality)
       - button with `id="nav-home"` clicking this button the Home component should show in the DOM.
       - button with `id="nav-timer"` clicking this button the Timer component should show in the DOM.
       
  - _*Home.jsx*_
    - The home component has an `h1` with welcome text as "Welcome to useEffect Timer". (Already provided in the boilerplate)
    - button with `id="home-timer"` on clicking it the Timer component should show in the DOM.

    - **Home

    <diV>
    <img src="https://i.imgur.com/9pN1XNi.png" width="100%">
    </div>


  - _*Timer.jsx*_
    - In this component make the timer functionality with the help of `setInterval` and `clearInterval`.
    - There is an input tag with `id="initial"`, it is responsible for taking the timer value. The initial value of the timer input is `0`.

    - button with `id="start"` on click the button the timer should start the countdown from the value entered in the input tag with `id="initial"`  and the current timer value should be shown in an `h1` tag with `id="timer"` and it should update every second.

    - button with `id="stop"` on click the button the timer should stop the countdown and the current timer value should be shown in an `h1` tag with `id="timer"` and it should stop updating every second and if again click on the button with `id="start"` the timer should start from that time where it stopped (e.g. if the timer stopped at 4 and after a click on start button it should start from 4 again).

    - button with `id="reset"` on click the button the timer should reset the timer and the current timer value should  `0` which means the input tag with ` id="initial"` value should reset to `0` and the `h1` tag with `id="timer"` should not exist in the dom and an `h2` tag with `id="timer-up"` should be shown in the DOM and contains a text as `Time's Up`.
    
    - If the timer is in the initial value (which is `0`) or the countdown reaches `0` then the `h1` tag with `id="timer"` should not exist in the dom and an `h2` tag with `id="timer-up"` should be shown in the DOM and contains a text as `Time's Up`.

    - In between the timer is running if the `Timer.jsx` gets unmounted then the `Interval` should stop(e.g call `clearInterval`), in other words, it should clean up all the side effects (hint:- use useEffect hooks cleanup function).

    - for a better understanding see the images.

    - **Initial state of Timer.jsx component**
    <diV>
    <img src="https://i.imgur.com/Bx25GIg.png" width="100%">
    </div>

    - **State of Timer.jsx component when Timer-running**
    <diV>
    <img src="https://i.imgur.com/bIMyfAQ.png" width="100%">
    </div>

    - **State of Timer.jsx component when Timer-stop or Reset**
    <diV>
    <img src="https://i.imgur.com/Bx25GIg.png" width="100%">
    </div>



#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to a low score.
- Also make sure to cross-check all the spellings and Cases of Texts.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
