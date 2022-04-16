import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
    return (
        <div>

            <Link to="/">Login</Link>
            <Link to="/Registration">Registration</Link>
            <Link to="/serviceproviderdetails">Service Provider Details</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/update">Update</Link>
        </div>
    )
}

export default Head;