import {createRoot} from "react-dom/client"
const root = createRoot(document.querySelector("#rootDiv"))
root.render(
    <div>
        <h2><u>Why React??</u></h2>
        <ol>
            <li>It's better than EJS</li>
            <li>Virtual DOM</li>
            <li>Cool logo</li>
            <li>Cool Documentation</li>
            <li>Awesome UI components</li>
        </ol>
    </div>
)