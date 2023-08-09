import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown"

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub - heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
function anotherExample(firstline, lastLine) {
if (firstLine == '\`\`\` ' && lastLine == '\`\`\`' && lastLine == '\`\`\`') {
return multilineCode;
}
}
\`\`\`
You can also make text **bold**... whoa! Or _italic_.
Or... **_both!_**
There's also [links](https://www.freecodecamp.com), and 
  >Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207)
- And of course there are lists.
- Some are bulleted.
With different indentation levels.
- That look like this. 

`;


function App() {
  const [MarkdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={MarkdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
            <ReactMarkdown>{MarkdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
