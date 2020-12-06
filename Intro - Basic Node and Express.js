/* Introduction to the Basic Node and Express Challenges

Meet the Node console

Start a Working Express Server

Serve an HTML File

Serve Static Assets

Serve JSON on a Specific Route

Use the .env File

Implement a Root-Level Request Logger Middleware

Chain Middleware to Create a Time Server

Get Route Parameter Input from the Client

Get Query Parameter Input from the Client

Use body-parser to Parse POST Requests

Get Data from POST Requests
 */

/* Introduction to the Basic Node and Express Challenges
Node.js is a JavaScript runtime that allows developers to write backend (server-side) programs in JavaScript. Node.js comes with a handful of built-in modules - small, independent programs - that help facilitate this purpose. Some of the core modules include:

HTTP: a module that acts as a server
File System: a module that reads and modifies files
Path: a module for working with directory and file paths
Assertion Testing: a module that checks code against prescribed constraints
Express, while not included with Node.js, is another module often used with it. Express runs between the server created by Node.js and the frontend pages of a web application. Express also handles an application's routing. Routing directs users to the correct page based on their interaction with the application. While there are alternatives to using Express, its simplicity makes it a good place to begin when learning the interaction between a backend powered by Node.js and the frontend.

Working on these challenges will involve you writing your code on Repl.it on our starter project. After completing each challenge you can copy your public Repl.it URL (to the homepage of your app) into the challenge screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Repl.it using this link or clone this repository on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe! */

/* Basic Node and Express - Start a Working Express Server
In the first two lines of the file myApp.js, you can see how easy it is to create an Express app object. This object has several methods, and you will learn many of them in these challenges. One fundamental method is app.listen(port). It tells your server to listen on a given port, putting it in running state. For testing reasons, we need the app to be running in the background so we added this method in the `server.js` file for you.

Let’s serve our first string! In Express, routes takes the following structure: app.METHOD(PATH, HANDLER). METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object. For example, the handler

function(req, res) {
  res.send('Response String');
}
will serve the string 'Response String'.

Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path. Be sure that your code works by looking at the logs, then see the results in the preview if you are using Repl.it.

Note: All the code for these lessons should be added in between the few lines of code we have started you off with. 

solution: app.get("/", (req, res) => res.send("Hello Express"));
*/

/* Basic Node and Express - Serve an HTML File
You can respond to requests with a file using the res.sendFile(path) method. You can put it inside the app.get('/', ...) route handler. Behind the scenes, this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Then it will read and send the file. This method needs an absolute file path. We recommend you to use the Node global variable __dirname to calculate the path like this:

absolutePath = __dirname + relativePath/file.ext
Send the /views/index.html file as a response to GET requests to the / path. If you view your live app, you should see a big HTML heading (and a form that we will use later…), with no style applied.

Note: You can edit the solution of the previous challenge or create a new one. If you create a new solution, keep in mind that Express evaluates routes from top to bottom, and executes the handler for the first match. You have to comment out the preceding solution, or the server will keep responding with a string. 

solution: 
var express = require("express");
var app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));
module.exports = app;
*/
/* 
Basic Node and Express - Serve Static Assets
An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images). In Express, you can put in place this functionality using the middleware express.static(path), where the path parameter is the absolute path of the folder containing the assets. If you don’t know what middleware is... don’t worry, we will discuss in detail later. Basically, middleware are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method app.use(path, middlewareFunction). The first path argument is optional. If you don’t pass it, the middleware will be executed for all requests.

Mount the express.static() middleware for all requests with app.use(). The absolute path to the assets folder is __dirname + /public.

Now your app should be able to serve a CSS stylesheet. From outside, the public folder will appear mounted to the root directory. Your front-page should look a little better now!

solution:

var express = require("express");
var app = express();

console.log("Hello World");

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use(express.static(__dirname + "/public"));
module.exports = app;
 */
/* 
Basic Node and Express - Serve JSON on a Specific Route
While an HTML server serves (you guessed it!) HTML, an API serves data. A REST (REpresentational State Transfer) API allows data exchange in a simple way, without the need for clients to know any detail about the server. The client only needs to know where the resource is (the URL), and the action it wants to perform on it (the verb). The GET verb is used when you are fetching some information, without modifying anything. These days, the preferred data format for moving information around the web is JSON. Simply put, JSON is a convenient way to represent a JavaScript object as a string, so it can be easily transmitted.

Let's create a simple API by creating a route that responds with JSON at the path /json. You can do it as usual, with the app.get() method. Inside the route handler, use the method res.json(), passing in an object as an argument. This method closes the request-response loop, returning the data. Behind the scenes, it converts a valid JavaScript object into a string, then sets the appropriate headers to tell your browser that you are serving JSON, and sends the data back. A valid object has the usual structure {key: data}. data can be a number, a string, a nested object or an array. data can also be a variable or the result of a function call, in which case it will be evaluated before being converted into a string.

Serve the object {"message": "Hello json"} as a response, in JSON format, to GET requests to the /json route. Then point your browser to your-app-url/json, you should see the message on the screen.

solution:
let message = { message: "Hello json" };
app.get("/json", (request, response) => response.json(message)); */

/* Basic Node and Express - Use the .env File
The .env file is a hidden file that is used to pass environment variables to your application. This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden. For example, you can store API keys from external services or your database URI. You can also use it to store configuration options. By setting configuration options, you can change the behavior of your application, without the need to rewrite some code.

The environment variables are accessible from the app as process.env.VAR_NAME. The process.env object is a global Node object, and variables are passed as strings. By convention, the variable names are all uppercase, with words separated by an underscore. The .env is a shell file, so you don’t need to wrap names or values in quotes. It is also important to note that there cannot be space around the equals sign when you are assigning values to your variables, e.g. VAR_NAME=value. Usually, you will put each variable definition on a separate line.

Let's add an environment variable as a configuration option.

Store the variable MESSAGE_STYLE=uppercase in the .env file. Then tell the GET /json route handler that you created in the last challenge to transform the response object’s message to uppercase if process.env.MESSAGE_STYLE equals uppercase. The response object should become {"message": "HELLO JSON"}.

solution:
in the .env file: MESSAGE_STYLE=uppercase
in the myApp.js file:
app.get("/json", (request, response) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
      response.json({ message: "HELLO JSON" });
    } else {
      response.json(message);
    }
  }); */

