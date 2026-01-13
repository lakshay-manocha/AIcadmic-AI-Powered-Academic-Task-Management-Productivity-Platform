import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './Todo.css'
import AuthProvider, { useAuth } from './Security/AuthContext'
import AboutUsComponent from './AboutUsComponent'
import LoginComponenet from './LoginComponent'
import LogOutComponenet from './LogoutComponent'
import WelcomeComponenet from './WelcomeComponenets'
import ErrorComponenet from './ErrorComponent'
import ListTodosComponenet from './ListTodoComponent'
import TodoComponent from './TodoComponent'
import Recommendation from './Recomendation'
import MoodPredict from './MoodPrediction'
import ProgressDashboard from './ProgressDashboardComponent'
import UserForm from '../UserForm'

function AuthenticatedRoute({ children }) {
    const authContext = useAuth()
    if (authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}


export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LoginComponenet />}></Route>
                        <Route path='/login' element={<LoginComponenet />}></Route>

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponenet />
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponenet />
                            </AuthenticatedRoute>}
                        ></Route>

                        <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent />
                            </AuthenticatedRoute>}
                        ></Route>

                        <Route path='/about' element={
                            <AuthenticatedRoute>
                                <AboutUsComponent />
                            </AuthenticatedRoute>}
                        ></Route>

                        <Route path='/taskrecomend' element={
                            <AuthenticatedRoute>
                                <Recommendation />
                            </AuthenticatedRoute>}
                        ></Route>

                        <Route path='/moodprediction' element={
                            <AuthenticatedRoute>
                                <MoodPredict />
                            </AuthenticatedRoute>}
                        ></Route>

                        <Route path='/Progress' element={
                            <AuthenticatedRoute>
                                <ProgressDashboard />
                            </AuthenticatedRoute>}
                        ></Route>

                        <Route path='/SignIn' element={
                                <UserForm />}
                        ></Route>

                        <Route path='/logout' element={<LogOutComponenet />}></Route>

                        <Route path='*' element={<ErrorComponenet />}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}