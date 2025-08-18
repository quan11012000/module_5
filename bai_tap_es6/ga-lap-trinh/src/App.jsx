import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const welcom = ['Sách','Vở','Video'];
function ranDomTitle(){
    return Math.floor(Math.random() * welcom.length);
}
function App() {
    let today = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(0)
  return (
    <>
        <h1> {welcom[ranDomTitle()]}</h1>
        <p>Hôm nay là <strong>{today}</strong> thời gian hiên tại <strong>{time}</strong></p>
    </>
  )
}

export default App
