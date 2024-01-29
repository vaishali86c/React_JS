import React, { Fragment } from "react"
import { useState } from "react";


function App() {

  const [title, setTitle] = useState("my name is vaishali1");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the button</button>
      <Header title={title}></Header>
      <Header title="vaishali"></Header>
      <Header title="vaishali"></Header>
      <Header title="vaishali"></Header>
      <Header title="vaishali"></Header>
      <Header title="vaishali"></Header>

    </div>
  )
}

const Header = React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})


export default App
