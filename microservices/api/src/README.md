Splitwise is an app that makes it easy to split bills with friends and family.We organize all your shared expenses and bills in one place, so that everyone can see who they owe. Whether you are sharing a ski vacation, splitting rent with roommates, or owe someone for lunch, Splitwise makes life easier. We store data using Hasura data apis and authentication too is done with the help of asura features

### Backend API

Authentication (login/signup) is handled by using hasura auth api and data is stored in the database using hasura's data API.
The database contains four tables :
* userinfo : which stores details like hasura_id,phone_no,user_name,email_id
* groups: which conatains group_id and group_name
* usergroups: which conatains information like group_name,group_id,user_name,hasura_id
* userbiils: which contains informations about the bills: bill_no,bill name,group_id,hasura_id,user_name,user_payed,user_dues,user_payed,split

The Api contains admin token as a secret which is used for joining two tables. To add secret include :
``` Secret updated admin_token=[value] ```

* Login/Signup using the auth apis and user information is inserted into the userinfo table.
* New group is created to the group table and members added to usrgroups table.
* Bill is added to the userbills with group_id,hasura_id,user_payed and userdues is calculated using the group by clause 

### Making changes and deploying

* To make changes to the project, browse to `/microservices/api/src` and edit the `server.js` file in according to your app.
* Commit the changes, and perform `git push hasura master` to deploy the changes. Also add admin token as hasura secret in the terminal
``` 
Secret updated admin_token=[value]

```
