import { Fragment } from "react";
import { useState } from "react"

function App() {
const [title, setTitle ] = useState("My name is Surya");

function updateTitle(){
setTitle("My name is " + Math.random());
}
  return (
    <Fragment>
      <button onClick={updateTitle} >Update the title</button><br />
      <Header title={title}></Header><br />
      <Header title="Surya2"></Header><br />
    </Fragment>
  )
}

// eslint-disable-next-line react/prop-types
function Header({title}){
  return <i>
    {title}
  </i>
}

export default App
