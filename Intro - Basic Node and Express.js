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

