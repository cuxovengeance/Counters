# Cornershop Frontend Test

#### ⚠️ Before you begin

> Create a new git repository on the root of this folder, upload it to Github, and invite [@RoHerrera](https://github.com/RoHerrera) and [@varellanov](https://github.com/varellanov) as collaborators.

## Overview

You have been commissioned to implement a counter application following the design specs provided [here](https://www.figma.com/file/6CnuM0Gj9oiwi2AV9vXLRH/Counters-for-the-web?node-id=0%3A1).

The application consists of several screens where each screen has one or multiple states that you will have to implement following the design specs the best you can.

We have provided starter boilerplate so you can write your application without any hassle and also a NodeJS dummy backend with all the neccessary endpoints to persist your data.

For bootstrapping the frontend application we're using `react-scripts`, so as you might have guessed you **must** use React (it's our primary view layer for frontend applications here at Cornershop).

> Note: This is NOT a backend test. Don't make it require any databases. Don't touch the server folder. Just leave it as it is.

## Requirements

Your submission will be evaluated considering the following criterias:

- Good implementation of UI elements, both visually and at code level.
  - Extra points for writing custom styling code for UI elements.
  - Use whatever CSS flavor you want: plane old CSS, SASS, LESS, CSS-in-JS, CSS modules, everything is allowed.
- Good architecture and software design.
  - _Hint:_ Usage of design patterns, good code organization, separation of concerns, etc. 
- Use of best practices when writing code.
  - _Hint:_ Idiomatic & readable code, good use of composition, DRY, etc.
- The application must persist data back to the server.
- Feature completion (all features must be implemented for a perfect score).
- Good management of state using built-in React features or third party dependencies (context, `redux`, `mobx`, `xstate` or whatever you might like).
- You must include tests.
  - Behavior tests are perfect.
- Your project must be self-contained (make sure you're not using global dependencies).
- We would love to understand your thought process, so writing a little summary of your choices, what you did and how you solved the test is required (write it here on this README file).

Please consider that we expect your solution to be production-ready. In other words, that millions of users would be thrilled to use your product.

> Note: You can use whatever dependencies/libraries you want, the only requirement dependency-wise is to use React.

## Getting started

First and foremost, make sure you have `node` and `npm` (or `yarn`) installed on your machine, then run:

```bash
$ npm install
$ npm start
```

For `yarn` users:

```bash
$ yarn
$ yarn start
```

## API endpoints / examples

Since the backend API runs locally on a different port (`3001`) than the `react-scripts` dev server (`3000`), we have setup a proxy so you don't have to do anything special to consume the API (fetching data from `/api/v1/counter` will do).

> The following endpoints are expecting a `Content-Type: application/json` header.

#### **GET** `/api/v1/counter`.

_Fetch a list of counters._
```javascript
/* Response */
[]
```

#### **POST** `/api/v1/counter`.

_Adds a counter._

```javascript
/* Body */
{ title: "bob" }

/* Response */
{ id: "asdf", title: "bob", count: 0 }
```

#### **POST** `/api/v1/counter/inc`
_Increments the value of a counter._
```javascript
/* Body */
{ id: "asdf" }

/* Response */
{ id: "asdf", title: "bob", count: 1 }
```

#### **POST** `/api/v1/counter/dec`
_Decrements the value of a counter._

```javascript
/* Body */
{ id: "asdf" }

/* Response */
{ id: "asdf", title: "bob", count: 0 }
```

#### **DELETE** `/api/v1/counter`
_Deletes a counter._

```javascript
/* Body */
{ id: "qwer" }

/* Response */
"qwer" // The id of the deleted counter
```
---

Good luck! 🎉

We hope your submission is… to die for.

![Coffin dance](coffin.gif)
#   b e t a 
 
 


## Summary

I made the structure of the project thinking in separate the components for the Counters and his functions. So, there is two principal folders, one of them is "api" where are index.js, this file contain the endpoint necessarys for the principal operations of the aplication and be able to cosume this services importing this index.js and indicate what operation i need (thank you so much for the easter egg <3 , really helped me a lot).

The second folder is the Component folder, this contain all the components separate for those who are exclusively of the Counter as Counters, Create Counter, Examples, List Counters and Total Counters. The other folder one called Errors contains a little componen that works for controlled one possible error what happen when the user try to register one counter but unspecified the name of the same. 

The other folder contained inside the Component folder is Functions, who contains the principal function like decrement, increment, delete and share. And the last one is the folder welcome, who contain the component of welcome screen.

The first thing what i developed was the getCounters function, I used the index.js file in api folder specifically in the ListCounter.js component. With the useEffect I called the API and I left just a empty dependency for execute this useEffect just one time when start the application. Inside of the same component I used two useState, one for filter the search of counters and other for show the complete list of counters. For one of them I used a useEffect (for separate) in the case of the search, when the 'search' (useState declared in the App.js) is diferent of empty the code going to filter based on the value that captures the setSearch hook and this useEffect executes when the value of the 'search' hook changes.

The last useEffect in the ListCounter.js components executes for show if the counters array is empty or for show all of them and this executes when de counters array changes, that is, when a new counter it created or when one of them is deleted or one of then changes de value of the counter.

In the graphic part of this component i decided use a ternary operator for show the message when the counter array is empy or show the list of them.

Moving forward, the next thing what i developed was the CreateCounter component. For this I used two useStates, one for save the title of the counter and other for control the error when the user try to register one counter without name (for the alert i used boostrap alert in the Error.js component). 
So, for create a new counter i made a function for made a submit (I used a form too) i used a prevenDefault for prevent the refresh of the page, then i did a condition for validate that the title it wasn't empty, then specified the error that is false, build the counter with the title (the info that i send to the api) call the api, specified the url and the body (in this case the title of the counter) i recived the answer, i made one copy of the content of counters and add the response of the api, then reset the form and finally notice that the new counter is added. (for this i used a boostrap modal)

Then i delevoped the Counter.js component for showing the list of the counters, for this i passed the props in App.js for ListComponents.js first and then to the Counters.js for to show them. In Counter.js i usedthe counter prop for list each one of them. (For the selection i used a ternary operator for show the item selected). 

Each counter have a two button one for increment and other for decrement, each action have a component, where i called the endpoint respective with the url and the data necessary. Inside of the the call of the api when i get the response i made a map for make sure that the id's match and finally save the data with the saveCounters hook. 

Finally for the delete i made the same thing, build the data for send to the api (from the idToSave prop), call the api, filter the counters and if the id's match i saved and if not i filtered of the array, save the new array without the element deleted and return null. (For this component i used a modal of boostrap too).

For the function share, i used a popup of reactjs-popup and the CopyToClipboard of the react-copy-to-clipboard and sweetalert2 too. I reused the idToSave prop (who contains all the info for the counter selected) build the title, count using desctructuring and finally a complete text for share and a beautiful sweetAlert for confirm that the info was copy successfully.

For the examples.js Component i had a problems because i what that when i clicked one of the badges, the counter it will be created immediatly, but i couldn't get the value for build the title when i clicked, i tried in a few ways but i didn't succedd. the same way i tried to the examples were random used a function for this and i failed, maybe because the idea what i had i didn't know how to land it well. However for the graphic part i used a customized popup and boostrap badges, the other graphic part i maded with pure css. Also modify some of the boostrap component with CSS and all of components where i used boostrap and popups. 

For the welcome component, specifically for the icon, i save the .svg icon from the page figma that you send to me and i used it. For the other things like buttons, search bar and stuff i used CSS. And that's it.

The things what i couldn't do it were disable the decrement when the counter was in 0 for the same reason of the examples, the other thing was the graphic part of the selected item becauase the focus ring always stood ahead and the text looked blurry.

For the part of the test i investigated how to do it and i made test for simulate clicks, submit, make sure that they were calling some of the functions when i change the value of the input and make sure that they the values of the props are correct when some of this functions are called. 



