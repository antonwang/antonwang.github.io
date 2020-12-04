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



