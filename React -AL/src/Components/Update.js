import React, { useState, userEffect } from "react";
import axios from "axios";

const Update = () => {

    //let [token, setToken] = useState("");
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    // let [email, setEmail] = useState("");
    let [address, setAddress] = useState("");
    // let [password, setPassword] = useState("");
    var a = window.sessionStorage.getItem("token");

    const updateSubmit = () => {
        if (a == "exists") {
            var email = window.sessionStorage.getItem("email");
            var obj = { name: name, phone: phone, email: email, address: address };
            axios.post("http://127.0.0.1:8000/api/AdminUpdate", obj)
                .then(resp => {

                    alert("Update Successful");
                }).catch(err => {
                    console.log(err);
                    alert(err);
                });


        }
    }


    return (
        <div>
            <h1>Update Admin</h1>
            <form>
                Enter  Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
                Enter Phone: <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input><br></br>

                Enter Address: <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input><br></br>


            </form>
            <button onClick={updateSubmit}>Update Admin</button>

        </div>

    )

}

export default Update; 