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

/* Managing Packages with Npm - Add a Description to Your package.json
The next part of a good package.json file is the description field; where a short, but informative description about your project belongs.

If you some day plan to publish a package to npm, this is the string that should sell your idea to the user when they decide whether to install your package or not. However, that’s not the only use case for the description, it’s a great way to summarize what a project does. It’s just as important in any Node.js project to help other developers, future maintainers or even your future self understand the project quickly.

Regardless of what you plan for your project, a description is definitely recommended. Here's an example:

"description": "A project that does something awesome",
Add a description to the package.json file of your project.

Note: Remember to use double-quotes for field-names (") and commas (,) to separate fields. */

/* Managing Packages with Npm - Add Keywords to Your package.json
The keywords field is where you can describe your project using related keywords. Here's an example:

"keywords": [ "descriptive", "related", "words" ],
As you can see, this field is structured as an array of double-quoted strings.

Add an array of suitable strings to the keywords field in the package.json file of your project.

One of the keywords should be "freecodecamp". */

/* Managing Packages with Npm - Add a License to Your package.json
The license field is where you inform users of what they are allowed to do with your project.

Some common licenses for open source projects include MIT and BSD. License information is not required, and copyright laws in most countries will give you ownership of what you create by default. However, it’s always a good practice to explicitly state what users can and can’t do. Here's an example of the license field:

"license": "MIT",
Fill the license field in the package.json file of your project as you find suitable. */

/* Managing Packages with Npm - Add a Version to Your package.json
A version is one of the required fields of your package.json file. This field describes the current version of your project. Here's an example:

"version": "1.2.0",
Add a version to the package.json file of your project.
 */

/* Managing Packages with Npm - Expand Your Project with External Packages from npm
One of the biggest reasons to use a package manager, is their powerful dependency management. Instead of manually having to make sure that you get all dependencies whenever you set up a project on a new computer, npm automatically installs everything for you. But how can npm know exactly what your project needs? Meet the dependencies section of your package.json file.

In this section, packages your project requires are stored using the following format:

"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}
Add version "2.14.0" of the "moment" package to the dependencies field of your package.json file.

Note: Moment is a handy library for working with time and dates. */

/* Managing Packages with Npm - Manage npm Dependencies By Understanding Semantic Versioning
Versions of the npm packages in the dependencies section of your package.json file follow what’s called Semantic Versioning (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer in order to clearly communicate what kind of changes projects can expect if they update.

Knowing SemVer can be useful when you develop software that uses external dependencies (which you almost always do). One day, your understanding of these numbers will save you from accidentally introducing breaking changes to your project without understanding why things that worked yesterday suddenly don’t work today. This is how Semantic Versioning works according to the official website:

"package": "MAJOR.MINOR.PATCH"
The MAJOR version should increment when you make incompatible API changes. The MINOR version should increment when you add functionality in a backwards-compatible manner. The PATCH version should increment when you make backwards-compatible bug fixes. This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.

In the dependencies section of your package.json file, change the version of moment to match MAJOR version 2, MINOR version 10 and PATCH version 2 */