import {createRoot} from "react-dom/client"
import Navbar from './navbar'
import Header from './header'

const root = createRoot(document.querySelector("#rootDiv"))

root.render(
    <div>
        <Header />
        <Navbar />
    </div>
)
// render everything into root Div


