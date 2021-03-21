import React, { useEffect, useRef, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Home } from './container/Home/Home'
import { Navbar } from './component/nav/Navbar';
import { useWindowSize } from './component/WindowSizeHook/useWindowSize'
function App() {

  const [State, setState] = useState(false)
  const [height, width] = useWindowSize()

  console.log(height)
  console.log(width)
  // const wid = useRef()

  useEffect(() => {

    // console.log(wid.current.offsetWidth)

    // {wid.current.offsetWidth < 350 ? setState(true) : setState(false)}
    
    
  }, [])
  
  console.log(window.innerHeight)
  // function change() {
    // setState(true)
  // }

  // console.log(State)
  return (
    <div className="main-app">
       {/* the height is {height} */}
       {/* the width is {width} */}
      {width > 350 ? <Home /> : <p>please view on pc devices</p>}
      
  
    </div>
  );
}

export default App;
