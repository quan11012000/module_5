import { useState } from 'react'

import './App.css'

function App() {
  const MESSAGES_ERROR ={
    userName : "Username error",
    email : "Email Error",
    password: "Password Error",
    confirmPassword : "Password must be the same",
  }
  const REGEX = {
    username: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[A-Za-z0-9!@#$%^&+=._-]{6,}$/,
  };
    const [form, setForm] = useState({})
  function handleChange(e) {
      let error  = "";
      if(e.target.name === "password") {
        if(form.confirmPassword && form.confirmPassword.value) {
          error = e.target.value=== form.confirmPassword.value?
              "":MESSAGES_ERROR[e.target.name];

        }else {
          error = REGEX[e.target.name].test(e.target.value)?"":MESSAGES_ERROR[e.target.name];
        }

      }
  }
  function handleSubmit() {
      const isValid = form.username && form.email && form.password && form.confirmPassword;
      alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
  }

  return (
    <>
      <h1>Sign up</h1>
        <form>
          <div className="custom-input">
            <label>Username </label>
            <input name="username" value={form.username || ''} onChange={handleChange} />
          </div>
          <div className="custom-input">
            <label>Email </label>
            <input name="email" value={form.email || ''} onChange={handleChange} />
          </div>
          <div className="custom-input">
            <label>Password </label>
            <input type="password" name="password" value={form.password || ''} onChange={handleChange} />
          </div>
          <div className="custom-input">
            <label>Confirm password </label>
            <input type="password" name="confirmPassword" value={form.confirmPassword || ''} onChange={handleChange} />
          </div>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default App
