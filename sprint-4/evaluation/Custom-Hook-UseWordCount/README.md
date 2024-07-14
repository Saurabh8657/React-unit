# React useWordCount custom hook

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ Should update the text and word count to zero for empty string  - 2 mark
 ✅ Should update the text and world count for a single string - 2 mark
 ✅ should return initial text and word count for multiple words - 2 mark
 ✅ should handle leading/trailing white spaces and consecutive spaces - 2 mark
 ✅ App should have a text box to accept text and word count should be shown - 2 mark
```

## Installation

- you can use any node version.
- please make sure you do not push package-lock.json

```
npm install

// run locally
npm run start


```

#### Problem

Create a useWordCount custom hook with the following functionalities

1. It will count the number of words present in the input box.
2. It will accept `text` from input box as parameter.
3. It will return the current `text` and `wordCount` whenever text changes

```
{text, wordCount} // Do not change the key name
```

4. Whenver the text in the input box changes the `text` and `wordCount` value should be updated.
5. There might be some edge cases, think about it.

#### App.js

- In your app.js use this customHook with the follwing two parameters
- The inital text value for `useWordCount` will be an empty string.
- The initial count shown will be `Word Count: 0` with `data-testid=word-count`
- Provide an input box with `data-testid=input-box`
- When the user types something, the count value should update in real time.

Please refer to the below image for better clarity.


| ![space-1.jpg](https://i.postimg.cc/cCb1L5CM/custhook0.png) | 
|:--:| 
| *Image 1* |

| ![space-1.jpg](https://i.postimg.cc/8kKz4s4J/custhook1.png) | 
|:--:| 
| *Image 2* |


## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them, may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.

### Genaral Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
