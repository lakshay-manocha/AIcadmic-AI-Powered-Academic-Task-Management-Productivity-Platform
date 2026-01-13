import './Todo.css'
import { Link } from 'react-router-dom'
import { AuthContext, useAuth } from './Security/AuthContext'
export default function FooterComponenet() {

    const authContext = useAuth(AuthContext)
    const isAuthenticated = authContext.isAuthenticated

    function logout() {
        AuthContext.logout()
    }

    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        {isAuthenticated && <Link className="nav-link px-2 text-body-secondary" to="/welcome/AIcademic">Home</Link>}
                    </li>
                    <li className="nav-item">
                        {isAuthenticated && <Link className="nav-link px-2 text-body-secondary" to="/about">About</Link>}
                    </li>
                    <li className="nav-item">
                        {isAuthenticated && <Link className="nav-link px-2 text-body-secondary" to="/todos">Tasks</Link>}
                    </li>
                    <li className="nav-item">
                        {isAuthenticated && <Link className="nav-link px-2 text-body-secondary" to="/login">Login</Link>}
                    </li>
                    <li className="nav-item">
                        {isAuthenticated && <Link className="nav-link px-2 text-body-secondary" to="/logout" onClick={logout}>Logout</Link>}
                    </li>
                </ul>
                <p className="text-center text-body-secondary">© 2025 AIcademic, Inc</p>
            </footer>
        </div>

    )
}