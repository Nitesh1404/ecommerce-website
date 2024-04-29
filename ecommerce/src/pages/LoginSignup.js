import React, { useEffect, useState } from 'react'
import "./cssFolder/LoginSignUp.css"
import { useNavigate } from 'react-router-dom';


const LoginSignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });



  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async () => {
    console.log("login")
    let signupres = await fetch('http://localhost:5000/auth/login', {
      method: "POSt",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    let signUpData = await signupres.json();

    if (signUpData.success) {
      localStorage.setItem('auth-token', signUpData.token);
      navigate('/');
    }
    else {
      alert(signUpData.error)
    }
  }

  const signup = async () => {
    console.log("signup")
    let signupres = await fetch('http://localhost:5000/auth/createuser', {
      method: "POSt",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    let signUpData = await signupres.json();

    if (signUpData.success) {
      localStorage.setItem('auth-token', signUpData.token);
      navigate('/');
    }
    else {
      alert(signUpData.error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div style={{ background: "linear-gradient(180deg, #8590f47d, white)" }}>
      <div className='container'>
        <div className='d-flex justify-content-center' style={{ minHeight: "90vh" }}>
          <div className="main mt-5 mb-3">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="login">
              <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="chk" aria-hidden="true">Log in</label>
                <input className="input" value={formData.email} onChange={onChange} type="email" name="email" placeholder="Email" required="" />
                <input className="input" type="password" value={formData.password} onChange={onChange} name="password" placeholder="Password" required="" />
                <button onClick={login}>Log in</button>
              </form>
            </div>

            <div className="register">
              <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="chk" aria-hidden="true">Register</label>
                <input className="input" type="text" value={formData.name} onChange={onChange} name="name" placeholder="Username" required="" />
                <input className="input" type="email" value={formData.email} onChange={onChange} name="email" placeholder="Email" required="" />
                <input className="input" type="password" value={formData.password} onChange={onChange} name="password" placeholder="Password" required="" />
                <button onClick={signup}>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup