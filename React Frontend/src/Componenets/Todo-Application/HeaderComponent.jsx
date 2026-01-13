import { Link } from 'react-router-dom'
import './Todo.css'
import { AuthContext, useAuth } from './Security/AuthContext'
export default function HeaderComponenet() {

    const authContext = useAuth(AuthContext)
    const isAuthenticated = authContext.isAuthenticated

    function logout() {
        AuthContext.logout()
    }

    return (

        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.AIcademic.com">AIcademic</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/welcome/AIcademic">Home</Link>}
                                </li>
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/about">About</Link>}
                                </li>
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/todos">Tasks</Link>}
                                </li>
                                <li className="nav-item dropdown fs-5">
                                    {isAuthenticated && (
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            AI
                                        </Link>
                                    )}
                                    <ul className="dropdown-menu">
                                        {isAuthenticated && (
                                            <>
                                                <li>
                                                    <Link className="dropdown-item" to="/taskrecomend">
                                                        Task Prediction
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="/moodprediction">
                                                        Mood Prediction
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="/Progress">
                                                        Progress Report
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </li>

                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}