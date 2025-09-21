import {createRoot} from "react-dom/client"
import Navbar from './navbar'
import Header from './header'

const root = createRoot(document.querySelector("#rootDiv"))


root.render(
        <Header className='header' />
)


// Same above code when written in imperative coding (using js only):

// const header = document.createElement("h2")
// header.textContent = "Maverick Here"
// header.className = "header"
// document.querySelector("#rootDiv").appendChild(header)
// Declarative is more cleaner and convinient than imperative

// Declarative Coding: We tell the system what to do , it will find a way to make it happen (eg: react)
// Imperative Coding: We tell every single step for doing something

