import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    console.log(name, email, location);
    const user = { name, email, location };
    fetch('http://localhost:5000/users',{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert("User Added")
        form.reset()
      }
    })
  };
  return (
    <>
      <h1>Provide your information</h1>
      <form onSubmit={handleFormData}>
        <input type="text" name="name" placeholder="name" id="" />
        <br />
        <input type="email" name="email" placeholder="email" id="" />
        <br />
        <input type="text" name="location" placeholder="city" id="" />
        <br />
        <input type="submit" value="Add Information" />
      </form>
    </>
  );
}

export default App;
