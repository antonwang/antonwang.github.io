/* The following codes are taken from freecodecamp.org data visualization tutorial. 
This is only for my learning purpose.

Introduction to the Data Visualization with D3 Challenges
Add Document Elements with D3
Select a Group of Elements with D3
Work with Data in D3
Work with Dynamic Data in D3
Add Inline Styling to Elements
Change Styles Based on Data
Add Classes with D3
Update the Height of an Element Dynamically
Change the Presentation of a Bar Chart
Learn About SVG in D3
Display Shapes with SVG
Create a Bar for Each Data Point in the Set
Dynamically Set the Coordinates for Each Bar
Dynamically Change the Height of Each Bar
Invert SVG Elements
Change the Color of an SVG Element
Add Labels to D3 Elements
Style D3 Labels
Add a Hover Effect to a D3 Element
Add a Tooltip to a D3 Element
Create a Scatterplot with SVG Circles
Add Attributes to the Circle Elements
Add Labels to Scatter Plot Circles
Create a Linear Scale with D3
Set a Domain and a Range on a Scale
Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
Use Dynamic Scales
Use a Pre-Defined Scale to Place Elements
Add Axes to a Visualization

*/

/* Introduction to the Data Visualization with D3 Challenges
D3.js, or D3, stands for Data Driven Documents. D3 is a JavaScript library to create dynamic and interactive data visualizations in the browser. It's built to work with common web standards, namely HTML, CSS, and Scalable Vector Graphics (SVG).

D3 takes input data and maps it into a visual representation of that data. It supports many different data formats. D3 lets you bind (or attach) the data to the Document Object Model (DOM). You use HTML or SVG elements with D3's built-in methods to transform the data into a visualization.

D3 gives you a lot of control over the presentation of data. This section covers the basic functionality and how to create visualizations with the D3 library. */

/* Data Visualization with D3: Add Document Elements with D3Passed
D3 has several methods that let you add and change elements in your document.

The select() method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example: */

const anchor = d3.select("a");

/* The above example finds the first anchor tag on the page and saves an HTML node for it in the variable anchor. You can use the selection with other methods. The "d3" part of the example is a reference to the D3 object, which is how you access D3 methods.

Two other useful methods are append() and text().

The append() method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.

The text() method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.

Here's an example that selects an unordered list, appends a list item, and adds text: */

d3.select("ul")
  .append("li")
  .text("Very important item");

/* D3 allows you to chain several methods together with periods to perform a number of actions in a row.

Use the select method to select the body tag in the document. Then append an h1 tag to it, and add the text "Learning D3" into the h1 element. */

<body>
  <script>d3.select('body').append('h1').text('Learning D3')</script>
</body>;

/* Data Visualization with D3: Select a Group of Elements with D3
D3 also has the selectAll() method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document: */

const anchors = d3.selectAll("a");

/* Like the select() method, selectAll() supports method chaining, and you can use it with other methods.

Select all of the li tags in the document, and change their text to "list item" by chaining the .text() method. */

<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>d3.selectAll('li').text('list item')</script>
</body>;

/* output: 
list item
list item
list item */
