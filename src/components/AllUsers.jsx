import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllUsers = () => {
    const allUsers = useLoaderData()
    const [users, setUsers] = useState(allUsers)

    const handleDelete = (_id) =>{
        console.log("delete", _id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert("User deleted")
                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
            <h2>These are all information stored in database</h2>
            <h3>Total users: {allUsers.length}</h3>
            {
                users.map(user => <p key={user._id}>{user.name} {user.email} {user.location} 
                <Link to={`/update_details/${user._id}`}><button>Update</button></Link>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
                </p>)
            }
        </div>
    );
};

export default AllUsers;