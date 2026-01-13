import HeaderComponenet from "./HeaderComponent"
import FooterComponenet from "./FooterComponent"
import './Todo.css'
export default function ErrorComponenet() {
    return(
        <div className="ErrorComponent">
        <HeaderComponenet />    
            <h1>We are working hard</h1>
                <h2>Appologies for 404</h2>
                <h2>This Sector is Under Development</h2>
        <FooterComponenet/>
        </div>
    )
}