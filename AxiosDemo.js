import React,{useEffect, useState} from "react";
import axios from "axios";

function AxiosDemo() {

    let apiDomain = "https://jsonplaceholder.typicode.com";
    let [users,setUsers] = useState([]);
    let getUserList = async () => {
        try{
            var result = await axios.get(apiDomain+"/users");
            setUsers(result.data);
        }
        catch(error) {
            let {message,response } =error;
            if(response === undefined) {
                alert(message + " api not reachable");
                return false;
            }
            switch(response.status){
                case 404:
                    alert("requested page is not available");
                    break;
                default:
                    break;
            }
            // console.log(error.response);
        }
        // console.log(result.data);
    }

    let getSingleUserDetails = async(event,id) => {
        // console.log(id);
        let url = `${apiDomain}/users/${id}`
        try{
            var result = await axios.get(url);
            console.log(id);
            // console.log(result);
        }
        catch(error){
            alert("error");
        }
    }

    let removeUser = async(id) => {
        let url = `${apiDomain}/users/${id}`;
        // console.log(url);
        try{
            await axios.delete(url);
            let newUserList = users.filter((user) => user.id !== id);
            console.log(newUserList);
            setUsers(newUserList);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getUserList();
    },[])
    return(
        <div>
            <h1>Axios Demo</h1>
            <h4>Users List</h4>
            <ul>
                {users.map((user,index) => (
                    // <li key={index}><span className="userLink" onClick={(event) =>{ getSingleUserDetails(event,user.id);}}>{user.name}</span></li>
                    <li key={index}><span className="userLink" onClick={(event) =>{ removeUser(user.id);}}>{user.name}</span></li>
                ))}
            </ul>
            {/* <table border="1" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
            {users.map((user,index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table> */}
        </div>
    );
};

export default AxiosDemo;