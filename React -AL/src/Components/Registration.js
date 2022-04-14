import React, { useState, userEffect } from "react";
import axios from "axios";

const Registration = () => {
    //let [token, setToken] = useState("");
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [address, setAddress] = useState("");
    let [password, setPassword] = useState("");

    const registrationSubmit = () => {
        var obj = { name: name, email: email, phone: phone, address: address, password: password };
        axios.post("http://127.0.0.1:8000/api/AdminRegistration", obj)
            .then(resp => {

                alert("Registration successful");
            }).catch(err => {

                alert(err);
            });


    }

    return (
        <div>
            <h1>Add Another Admin</h1>

            <form>
                <tr>
                    <td> <b>Name:</b></td>
                    <td> <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td> <b>Email:</b></td>
                    <td>  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </td>
                </tr>
                <tr>
                    <td> <b>Phone:</b></td>
                    <td> <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                    </td>
                </tr>
                <tr>
                    <td> <b>Address:</b></td>
                    <td> <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                    </td>
                </tr>
                <tr>
                    <td> <b>Password:</b></td>
                    <td> <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </td>
                </tr>


            </form>
            <br></br>
            <button onClick={registrationSubmit}>Register an Admin</button>

        </div>

    )
}
export default Registration; 