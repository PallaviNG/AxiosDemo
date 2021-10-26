import React,{useEffect, useState} from "react";
import axios from "axios";

function AxiosDemo() {

    let [users,setUsers] = useState([]);
    let getUserList = async () => {
        var result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(result.data);
        // console.log(result.data);
    }

    useEffect(() => {
        getUserList();
    },[users])
    return(
        <div>
            <h1>Axios Demo</h1>
            <h4>Users List</h4>
            <ul>
                {users.map((user,index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
            <table border="1" >
                <thead>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </thead>
                <tbody>
            {users.map((user,index) => (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AxiosDemo;