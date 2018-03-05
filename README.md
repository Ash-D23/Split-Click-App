Splitwise is an app that makes it easy to split bills with friends and family. We organize all your shared expenses and bills in one place, so that everyone can see who they owe. Whether you are sharing a ski vacation, splitting rent with roommates, or owe someone for lunch, Splitwise makes life easier. We store data using Hasura data apis and authentication too is done with the help of asura features

## How it works

You signup and enter your your infrmation then create a group and add members to it then add a bill with details of each person payed how much and then press the split button to display the user dues among the group members

## What does this come with?

* A react native app of the splitwise app clone which consists of the basic functionalities like creating group,organizing bills and splitting bills etc.
* A backend API managing the authentication and database of the app with the help of hasura's data and auth api.

![React-native](https://github.com/Ash-D23/spliwise-app-clone/blob/master/readme-assets/1.png) ![React-native](https://github.com/Ash-D23/spliwise-app-clone/blob/master/readme-assets/2.png)

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
## REACT NATIVE APP (Mobile version)

A clone of a popular bill/expense sharing app “Splitwise” app, as a part of the hasura product Development  Fellowship program(HPDF). This app is a react-native app. It requires the user of the app to create a group, thereby adding members based on their phone numbers. Once the group is created, the user is expected to add the name of the bill along with the cost of individual user. After clicking on the split button in the app,the app will display the usernames of that particular group  along with costs.

### GET STARTED WITH THE APP

`react-native init Splitwise
cd Splitwise`
* npm install --save react-native-router-flux
* npm install --save react-navigation
* npm install react-native-elements --save
* npm install --save react-native-vector-icons
* react-native link react-native-vector-icons
* react-native run-ios/react-native run-android
* App will now run on simulator/emulator.

![React-native](https://github.com/Ash-D23/spliwise-app-clone/blob/master/readme-assets/Simulator%20Screen%20Shot%2005-Mar-2018%2C%2012.17.50%20AM.png)

#### Opening the app
* Run npm start from the react-native directory.
* Scan the generated QR code using the Expo app from your phone (Install from Playstore/Appstore)
* Fully working app will open on your phone

### Backend API

Authentication (login/signup) is handled by using hasura auth api and data is stored in the database using hasura's data API.
The database contains four tables :
* userinfo : which stores details like hasura_id,phone_no,user_name,email_id
* groups: which conatains group_id and group_name
* usergroups: which conatains information like group_name,group_id,user_name,hasura_id
* userbiils: which contains informations about the bills: bill_no,bill name,group_id,hasura_id,user_name,user_payed,user_dues,user_payed,split

The Api contains admin token as a secret which is used for joining two tables. To add secret include :
``` Secret updated admin_token=[value] ```

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

##  Contributors 

* Gaurav Tejwani (gaurav.tejwani.97@gmail.com)
* Ashutosh Kumar (ak6214651@gmail.com)
