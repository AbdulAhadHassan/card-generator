import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './comp/card'
import './App.css'


function App() {
    const [status, setStatus] = useState([]);
  const [background, setBackground] = useState('white')
  const [text, setText] = useState('try out')
  const [color, setColor] = useState('black')
  

  return (
    <>
      <div className='flex justify-center items-center flex-col'>
        <div className='mb-2'>
          <h1>Card Generator</h1>
        </div>

        <div className='border-2 border-solid border-grey p-5' >
          <div>
            <input type="color" className="mx-3" onChange={(e) => setBackground(e.target.value)} placeholder='background color' />
            <input type="text" className="mx-3" onChange={(e) => setText(e.target.value)} placeholder='text' />
            <input type="color" className="mx-3" onChange={(e) => setColor(e.target.value)} placeholder='text color' />
          </div>
          <div className='text-center mt-3 px-5'>
            <button onClick={() => {
              const obj = {
                text,
                background,
                color,
                createdAt: Date.now(),
              };

              setStatus([...status, obj]);
              console.log(obj);
            }} >+</button>
        </div>

      </div>
    </div >
    <div className="flex flex-wrap gap-2">
        {status.map((data) => (
          <Card /*removeCard={onRemove}*/ key={data.createdAt} data={data} />
        ))}
      </div>

    </>
  )
}

export default App