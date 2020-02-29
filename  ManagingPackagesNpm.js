/* Outline:

Introduction to the Managing Packages with npm Challenges

How to Use package.json, the Core of Any Node.js Project or npm Package

Add a Description to Your package.json

Add Keywords to Your package.json

Add a License to Your package.json

Add a Version to Your package.json

Expand Your Project with External Packages from npm

Manage npm Dependencies By Understanding Semantic Versioning

Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency

Use the Caret-Character to Use the Latest Minor Version of a Dependency

Remove a Package from Your Dependencies
 */

/* Introduction to the Managing Packages with npm Challenges
The Node Package Manager (npm) is a command-line tool used by developers to share and control modules (or packages) of JavaScript code written for use with Node.js.

When starting a new project, npm generates a package.json file. This file lists the package dependencies for your project. Since npm packages are regularly updated, the package.json file allows you to set specific version numbers for each dependency. This ensures that updates to a package don't break your project.

npm saves packages in a folder named node_modules. These packages can be installed in two ways:

- globally in a root node_modules folder, accessible by all projects.
- locally within a project's own node_modules folder, accessible only to that project.

Most developers prefer to install packages local to each project to create a separation between the dependencies of different projects. Working on these challenges will involve you writing your code on Glitch on our starter project. After completing each challenge you can copy your public Glitch url (to the homepage of your app) into the challenge screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using this link or clone this repository on GitHub! If you use Glitch, remember to save the link to your project somewhere safe! */

// https://glitch.com/edit/#!/lily-windy-building?path=README.md:1:0

/* Managing Packages with Npm - How to Use package.json, the Core of Any Node.js Project or npm Package

The package.json file is the center of any Node.js project or npm package. It stores information about your project, similar to how the <head> section of an HTML document describes the content of a webpage. It consists of a single JSON object where information is stored in key-value pairs. There are only two required fields; "name" and "version", but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.

If you  look at the file tree of your project, you will find the package.json file on the top level of the tree. This is the file that you will be improving in the next couple of challenges.

One of the most common pieces of information in this file is the author field. It specifies who created the project, and can consist of a string or an object with contact or other details. An object is recommended for bigger projects, but a simple string like the following example will do for this project.

"author": "Jane Doe",
Add your name as the author of the project in the package.json file.

Note: Remember that you’re writing JSON, so all field names must use double-quotes (") and be separated with a comma (,). */
