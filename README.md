# Module 10 Challenge - Team Profile Generator

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Video](#video)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learnt](#what-i-learnt)
 
## Overview

### The challenge

Your challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

Because this Challenge will require the use of the Inquirer package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: npm i inquirer@8.2.4.

Testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.

### User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

```

### Video
[Demo Video]()

### Links

- [Github Repository](https://github.com/rmdn321/10-Team-Profile-Generator)
HTML File

## My process

### Built with

- HTML
- CSS
- Javascript
- Node.js
- Inquirer
- Jest

### What I learnt

- Create more scalable applications that follow the OOP paradigm.

- Create new objects using constructor functions.

- Add methods to objects using prototypal inheritance.

- Explain polymorphism through method overloading.

- Implement Promise.all() to wait for multiple API calls.

- Verify that your code works as intended through the use of automated tests.

- Build applications using test-driven development—writing tests before implementing functionality.

- Implement ES6 classes to create new instances of objects.

- Extend basic classes with additional functionality.

- Implement multiple classes with different purposes to practice the OOP paradigm.
