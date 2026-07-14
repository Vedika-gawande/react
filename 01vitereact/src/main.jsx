import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const username="vedika"
// function Myapp(){
//   return(
//     <h1>Custom React</h1>
//   )
// }

// const another=(
//   <a href="https://google.com" target='_blank'>Visit me</a>
// )

const reactElement=React.createElement(
  'a',
  {'href':'https://google.com',target:"_blank"},
  'click me to visit google',
  username
)
createRoot(document.getElementById('root')).render(
  //  another 
  reactElement 
  // <App />
)
