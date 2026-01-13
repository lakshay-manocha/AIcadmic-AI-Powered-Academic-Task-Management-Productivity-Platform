import './Todo.css'
import HeaderComponenet from "./HeaderComponent"
import FooterComponenet from "./FooterComponent"
export default function LogOutComponenet() {
    return(
        <>
         
   <div className="LogoutComponent bg-light min-vh-100 d-flex flex-column">
   
<HeaderComponenet />
    <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
      <div className="card shadow p-5 text-center border-0 mt-5" style={{ maxWidth: "600px", width: "100%" }}>
        <h1 className="text-success fw-bold mb-3">You’ve Successfully Logged Out</h1>
        <p className="lead text-muted">
          Thank you for using <strong>AIcademic</strong>. We hope we helped you stay productive today!<br />
          Come back anytime to continue organizing and achieving your goals.
        </p>
        <hr />
        <p className="small text-muted">Stay focused. Stay organized. Stay ahead. 🚀</p>
      </div>
    </div>
<FooterComponenet />
    
  </div>
  
  </>
    )
}