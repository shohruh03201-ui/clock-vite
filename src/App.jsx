import { Fragment, useState, useEffect } from "react";

function App() {
// function myName(){
//   return console.log('Akmal va Nozim');
  
// }
// setTimeout(myName,5000)
const [time, setTime] = useState(new Date())
const hour = time.getHours().toString().padStart(2,'0')
const minute = time.getMinutes().toString().padEnd(2,"0")
const second = time.getSeconds().toString().padStart(2,'0')
const day = time.getDate().toString().padStart(2,'0')
const month = (time.getMonth() + 1).toString().padStart(2,'0')
const year = time.getFullYear().toString().padStart(2,'0')


useEffect(() => {
  setInterval (() => {
    setTime(new Date())
  }, 1000)
}, [])
  return (
    <Fragment>
      <div>{hour} : {minute} : {second}</div>
      <div>{day}.{month}.{year}</div>
    </Fragment>
  )
}

export default App
