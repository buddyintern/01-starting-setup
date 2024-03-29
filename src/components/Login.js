import React, { useState } from "react";

import "./login.css";

function Login({stateChanger}) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "aksoy.firat@heb.com",
      password: "Realone23!"
    },
    {
      username: "user2",
      password: "pass2"
    },
    {
        username: "",
        password: ""
      }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        stateChanger(true)
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Sign In" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title" style={{color: "black"}}>Sign In To Your HEB Account</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        <button style={{align: "center"}} onClick={handleSubmit} >TRY DEMO</button>
      </div>
    </div>
  );
}

export default Login;
