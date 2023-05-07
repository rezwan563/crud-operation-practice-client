import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const user = useLoaderData()
    const [currentUser, setCurrentUser] = useState(user)
    // console.log(user);

    const handleUpdateUser = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        console.log(name, email, location);
        const updatedUser = {name, email, location}
        fetch(`http://localhost:5000/users/${user._id}`,{
            method: "PUT",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data);
            if(data.modifiedCount > 0){
                alert('User updated successfully')
                setCurrentUser(data)
            }
        })

    }
  return (
    <div>
      <h2>Welcome {currentUser?.name}, Update your details</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" placeholder="name" defaultValue={currentUser?.name} id="" />
        <br />
        <input type="email" name="email" placeholder="email" defaultValue={currentUser?.email} id="" />
        <br />
        <input type="text" name="location" placeholder="city" defaultValue={currentUser?.location} id="" />
        <br />
        <input type="submit" value="Update Information" />
      </form>
    </div>
  );
};

export default UpdateUser;
