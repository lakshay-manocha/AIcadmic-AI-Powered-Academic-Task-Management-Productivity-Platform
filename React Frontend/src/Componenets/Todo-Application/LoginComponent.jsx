import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Todo.css'
import HeaderComponenet from "./HeaderComponent"
import FooterComponenet from "./FooterComponent"
import { useAuth } from './Security/AuthContext'
export default function LoginComponenet() {

  const [username, setUssername] = useState('AIcademic')

  const [password, setPassword] = useState('dummy')

  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const navigate = useNavigate()

  const authContext = useAuth()

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handleUsernameChange(event) {
    setUssername(event.target.value)
  }

  async function handleSubmit() {
    if (await authContext.login(username, password)) {
      navigate(`/welcome/${username}`)
    }
    else {
      setShowErrorMessage(true);
    }
  }
  return (
    <div className="Login bg-light min-vh-100 d-flex flex-column">
      <HeaderComponenet />

      <div className="container my-5 d-flex justify-content-center align-items-center flex-grow-1">
        <div className="card shadow p-4 border-0" style={{ maxWidth: '400px', width: '100%' }}>
          <h1 className="h3 mb-4 fw-bold text-center text-primary">Please Sign In</h1>

          {showErrorMessage && (
            <div className="alert alert-danger text-center py-2">
              Authentication Failed
            </div>
          )}

          <div className="LoginForm">
            <div className="form-floating mb-3">

              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="checkDefault"
              />
              <label className="form-check-label" htmlFor="checkDefault">
                Remember me
              </label>
            </div>

            <button
              className="btn btn-primary w-100 py-2"
              type="submit"
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <Link to="/SignIn" className="btn btn-secondary  w-100 py-2">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <FooterComponenet />
    </div>

  )
}
