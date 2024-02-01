import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{background: color}}>

      <div className='fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex fixed flex flex-wrap
      justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        <button
        onClick={() => setColor("blue")}
        className="outline-none px-4"
        style={{backgroundColor: "blue"}}>
        Blue</button>
        <button
        onClick={() => setColor("green")}
        className="outline-none px-4"
        style={{backgroundColor: "green"}}>
        Green</button>
        <button
        onClick={() => setColor("gray")}
        className="outline-none px-4"
        style={{backgroundColor: "gray"}}>
        Gray</button>
        <button
        onClick={() => setColor("yellow")}
        className="outline-none px-4"
        style={{backgroundColor: "yellow"}}>
        yellow</button>
        <button
        onClick={() => setColor("black")}
        className="outline-none px-4"
        style={{backgroundColor: "black"}}>
        Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
