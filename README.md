# Web Auth API

This app implement user management, including user registrating and login, as well as session management using cookies. The API works as follows:

| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                 |
| ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/register | Creates a `user` using the information sent inside the `body` of the request. **Hashes the password** before saving the user to the database.                                                                                                                                                 |
| POST   | /api/login    | Uses the credentials sent inside the `body` to authenticate the user. On successful login, creates a new session for the user and sends back a 'Logged in' message and a cookie that contains the user id. If login fails, responds with the correct status code and the message: 'You shall not pass!' |
| GET    | /api/users    | If the user is logged in, responds with an array of all the users contained in the database. If the user is not logged in, reponds with the correct status code and the message: 'You shall not pass!'.            |

