import axios from "axios";
import React, { Fragment } from "react"
import { useEffect } from "react";
import { useState } from "react";

// learn usestate and useeffect

function App() {

  const [selectedId, setSelectedId] = useState(1);

    return <div>
      <button onClick={() => setSelectedId(1)}>1</button>
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>


      <Todo id={selectedId} />
    </div>
}


function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(response => {
        setTodo(response.data.todo)
      })
  }, [id])

  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}
export default App
