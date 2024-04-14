import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-slate-200 dark:bg-slate-700 flex flex-col items-center h-screen">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="size-20 m-5" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="size-20 m-5" alt="React logo" />
        </a>
      </div>
      <h1 className="text-blue-600 text-5xl p-10">Vite + React</h1>
      <div className="flex flex-col">
        <button className="bg-red-950 text-slate-200 text-2xl rounded-lg m-2" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button className="bg-red-950 text-slate-200 text-2xl rounded-lg m-2">darkmode</button>
        <p className="mt-10">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
