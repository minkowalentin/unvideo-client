## React and Material-UI template for registering and loging in users

### `npm install`

Installs the listed node modules in package.json

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Configure server for registering and loging in users 

Basic server functionality for registering and loging in users.
https://github.com/minkowalentin/pg-express-graphql-server
Built with postgres,express and graphql.

To connect with server create an enviroment variable in **src/enviroments/enviroment.js** containing the backend URL.
Example:
`export const enviroment = {
   backendURL: 'http://localhost:3002/graphql'
}`

