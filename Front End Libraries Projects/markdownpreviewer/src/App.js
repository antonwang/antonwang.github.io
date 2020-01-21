import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const marked = require("marked");

const firstMarkdown = `
# Welcome to Markdown Previewer!

## Basic tutorial

### Markdown guides:
https://guides.github.com/features/mastering-markdown/

https://marked.js.org/#/USING_ADVANCED.md

### Links
[My freeCodeCamp](https://www.freecodecamp.org/focus_concepts)
[My GitHub](https://github.com/antonwang)
[My CodePen](https://codepen.io/antonwang/)

### Inline code
\`ReactDOM.render(<App/>, document.getElementById('root'))\`

### A code block
\`\`\`
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
\`\`\`

### Unordered List

* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered List

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

### Text Manipulation

*italic*
**bold**
~crossover~
***~bold-italic-crossover~***

### A blockquote
> "**Whatever is hard is only a matter of time. Given enough time, what is hard becomes easier**" - *Anton*

### Image

![A mountain bird on my shoulder](https://raw.githubusercontent.com/antonwang/antonwang.github.io/master/images/antonandbird.jpeg 'cute mountain bird!')

`;
// Get reference and link is opened on a new tab
//https://marked.js.org/#/USING_PRO.md#renderer
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a href=${href} target='_blank'>${text}</a>`;
};

//markdown previewer interprets carriage returns and renders them as br (line break) elements.
marked.setOptions({
  renderer,
  breaks: true
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: firstMarkdown
    };
  }

  handleChange = e => this.setState({ markdown: e.target.value });
  render() {
    return (
      <div className="container-fluid">
        <h1>Markdown Previewer</h1>
        <div className="container">
          <div className="left">
            <textarea
              id="editor"
              value={this.state.markdown}
              onChange={this.handleChange}
            />
          </div>
          <div className="right">
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
