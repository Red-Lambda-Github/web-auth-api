# Web Auth API
![alt text](https://www.eweek.com/imagesvr_ez/b2bezp/2019/02/Red.Lambda.jpg "Red Lambda Logo")

This information and data management app implements user management, including user registrating and login, as well as session management using cookies. The API works as follows:

| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                 |
| ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/auth/register | Creates a `user` using the information sent inside the `body` of the request. **Hashes the password** before saving the user to the database.                                                                                                                                                 |
| POST   | /api/auth/login    | Uses the credentials sent inside the `body` to authenticate the user. On successful login, creates a new session for the user and sends back a 'Logged in' message and a cookie that contains the user id. If login fails, responds with the correct status code and the message: 'You shall not pass!' |
| GET    | /api/users    | If the user is logged in, responds with an array of all the users contained in the database. If the user is not logged in, reponds with the correct status code and the message: 'You shall not pass!'.            |

