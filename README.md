# Votewatch

Votewatch was born as an idea for our final project during the Makers Academy bootcamp and developed by our team of six junior software developers in under two weeks.

## The idea
Keep track of what your representative is doing in the House of Commons and let them know what you think about how they vote on your behalf!

Aye-Spy will optionally notify you every time your MP casts a vote and inform you what was up for debate, when, and which way they voted. Each vote is presented for you to register your approval/disapproval, with the option to directly open an email popup to their official contact address if you feel particularly strongly about the issue at hand and their registered stance on it.

* **Watch a demonstration of what our app can do [here](https://youtu.be/ygtw67MctDw)**
* **Watch a video presentation of our application for our Demo day [here](https://youtu.be/jNPUt79UpsA) (First presenting team)**

### Why though?

"Our brief was 'Tech for Good', and fetching pertinent information from a reliable source and showing it to people from the comfort of their pockets "didn't look like it would be too hard given that we've got less than two weeks" (sorry team!). Aside from the practicalities, I've been personally affonted for a long time at the ridiculous level of abstraction that political information is filtered through, both on the way to and from our MPs. This seemed like a way to bring some reality back into the process of representative democracy for all parties involved - in coding terms, 'tightening the loop' and 'getting visibility on' expected vs real behaviours of the country's government." - By Tom Allen, who initially proposed and pitched for this fantastic idea

## Teck stack

* [PostgreSQL](https://www.postgresql.org/)
* [ExpressJS](https://expressjs.com/)
* [React Native](https://reactnative.dev/)
* [NodeJS](https://nodejs.org/en/)
* [Sequelize](https://sequelize.org)

## The Team

* [Ali Bhatti](https://github.com/AliBDev)
* [Benedict Smith](https://github.com/eggs-benny)
* [Chris Aston](https://github.com/AUTOMCAS)
* [Joe Osborne](https://github.com/JoeOsborne77)
* [Patricia Garcia Nieto](https://github.com/PatriciaGN)
* [Tom Allen](https://github.com/tomallens)
* Forest Aston the Cocker Spaniel, our team mascot.

You can also get an idea of what our development process was like (as well as other parts of the bootcamp) by checking out [Patricia](https://www.catfromspace.com/programming/learning/progress/2022/12/05/weeks-11-and-12-at-makers.html) or [Joe](https://medium.com/@joeosborne77/when-your-tank-runs-dry-93a7a8255c90)'s blogs!

## Current list of features

* A user can **register and login**. Their **session will stay open** on their phone until they decide to logout, even if they close the application.
* A user can **register adding their MP name**. This will be used to display the information on their votes.
* A user can receive **push notifications** when their MP has just voted.
* A user can see the **most recent vote on their screen**, as well as swipe to check older votes.
* A user can get **redirected to a google search** of a particular vote directly from the application.
* A user can **emaill their MPs about a particular vote** by pressing the email button. This gives them direct access to their email client and will be presented with a template, including their MP email address, the name of the division as a subject and a draft email.
* A user can **“Approve” or “Disapprove”** a vote and see a percentage of their MP’s approvals.

## What's next? Will you continue to support this?

Although the course is now over and the final presentation done, we all feel passionate about what Votewatch could do for the people and would like to continue developing this project it the near future.

Things we would have liked to do if we had more time (and will try to do in the future):

* **We would like to improve the code quality and testing**. Although we initially decided we wanted to use TDD, we soon found out that React Native is not as easy to test as we expected. Part of our team spent two days trying to figure out how to do it unsuccessfully, and given the time pressure, we had to decide between having out MVP running by the end of those two weeks or having a small amount of code that was good quality but didn’t have enough functionality.
* **Being able to change the MP to look at what other MPs are doing**. 
* **Implement user input and data validation and error handling**. This was initially done but only worked on web, causing serious bugs on the other platforms, so we needed to delete it due to the time constraints.
* **User being able to set their MP by writing a postcode**.
* **Use users’ “Approves” and “Disapproves” anonymously to gather data about how MPs are doing** and give them direct feedback of what the public really thinks about them and their votes.
Deploy our application and put it in the App Store

## Installation

### Front-end client:
```
nvm install 16
nvm use 16
cd votewatch/frontend
npm install
expo start
```

### Back-end server:

**First time setup**

Install postgresql from any directory:

```
brew install postgresql
```

Create the database in a terminal

```
createdb votewatch
```

Install dependencies from inside the api directory :

```
npm install
```

Change USER to your local username in `api/app/config/config-db.js`

```bash
# inside config-db.js

module.exports = {
  HOST: "localhost",
  USER: "username", # Change this to your local username
  PASSWORD: "password",
  DB: "votewatch",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
```

# Running the backend server:

Run postgresql locally in a terminal

```
brew services start postgresql
```

Start the server:

```
cd votewatch/API
npm start
```
---
Contains Parliamentary information licensed under the [Open Parliament Licence v3.0.](https://www.parliament.uk/site-information/copyright-parliament/open-parliament-licence/)

