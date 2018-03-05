Splitwise is an app that makes it easy to split bills with friends and family. We organize all your shared expenses and bills in one place, so that everyone can see who they owe. Whether you are sharing a ski vacation, splitting rent with roommates, or owe someone for lunch, Splitwise makes life easier. We store data using Hasura data apis and authentication too is done with the help of asura features

## How it works

You signup and enter your your infrmation then create a group and add members to it then add a bill with details of each person payed how much and then press the split button to display the user dues among the group members

## What does this come with?

* A react native app of the splitwise app clone which consists of the basic functionalities like creating group,organizing bills and splitting bills etc.
* A backend API managing the authentication and database of the app with the help of hasura's data and auth api.

## Deployment instructions

### Basic deployment:

* Press the **Clone & Deploy** button and follow the instructions.
* The `hasura quickstart` command clones the project repository to your local computer, and also creates a **free Hasura cluster**, where the project will be hosted for free.
* A git remote (called hasura) is created and initialized with your project directory.
* Run `git add .`, `git commit`, and `git push hasura master`.
* Run the below command to open your deployed express.js app.
``` shell
$ hasura microservice open api
```

### Making changes and deploying

* To make changes to the project, browse to `/microservices/api/src` and edit the `server.js` file in according to your app.
* Commit the changes, and perform `git push hasura master` to deploy the changes. Also add admin token as hasura secret in the terminal
``` 
Secret updated admin_token=[value]

```

## Migrating your existing express.js app

* If you have an existing express.js app which you would like to deploy, replace the code inside `/microservices/api/src/` according to your app.
* You may need to modify the Dockerfile if your `package.json` or the build directory location has changed, but in most cases, it won't be required.
* Commit, and run `git push hasura master` to deploy your app.


