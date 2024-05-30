import React,{useEffect, useState} from 'react'

function index() {

  const[message, setMessage] = useState("Loading");

  // useEffect(() => {
  //   fetch("http://localhost:8081/api/home").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setMessage(data.message);
  //     }
  //   )
  // },[])

  return (
    <div>Hello</div>
  )
}

export default index