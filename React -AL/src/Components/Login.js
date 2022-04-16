import React, { useState, userEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";



const Login = () => {
    let history = useHistory();
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");

    const loginSubmit = () => {
        var obj = { email: name, password: password };
        axios.post("http://127.0.0.1:8000/api/AdminLogin", obj)
            .then(resp => {
                axios.get("http://127.0.0.1:8000/api/email")
                var token = resp.data;
                console.log(token);
                var user = { userId: token.userid, access_token: token.token };
                localStorage.setItem('email', JSON.stringify(user));
                console.log(localStorage.getItem('user'));

                if (token.token != null) {
                    window.sessionStorage.setItem("token", "exists");
                    alert("Signin successful");
                    window.sessionStorage.setItem("email", obj.email);
                    history.push("/serviceproviderdetails");
                }

            }).catch(err => {
                console.log(err);
            });


    }

    return (
        <div>
            <h1>Admin Login from here</h1>
            <form>
                <tr>
                    <td>  <b>Email:</b></td>
                    <td> <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td> <b>Password:</b></td>
                    <td>  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </td>
                </tr>

            </form>
            <br></br>
            <button onClick={loginSubmit}>Click here for Login</button>

        </div>

    )
}
export default Login; 