import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Page(){
    return(
        <>
            <h1>GameStack</h1>
            <p>Discover, collect and track your games</p>
            <p><a>Create a free account</a> or <a>log in</a> if you have an account</p>
        </>
    )
}
root.render(
    <Page/>
)