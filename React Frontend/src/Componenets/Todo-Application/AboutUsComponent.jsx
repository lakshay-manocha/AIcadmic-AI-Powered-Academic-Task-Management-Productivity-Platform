import HeaderComponenet from "./HeaderComponent"
import FooterComponenet from "./FooterComponent"
export default function AboutUsComponent(){
    return(
        <div className = "AboutUsComponent" >
            <HeaderComponenet />
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">About Us</h1>
            <p className="col-md-8 fs-4">
At AIcademic, we believe productivity is more than just checking off tasks — it’s about working smarter with the right tools by your side. We're a team of passionate developers, students, and innovators who set out to build a smarter, AI-driven task management platform that helps individuals and students manage their academic and personal lives with ease.

Whether you're a busy student balancing deadlines, an educator managing schedules, or a professional aiming to stay organized, AIcademic is designed for you.
            </p>
            </div>
            </div>

            <>
  <hr className="featurette-divider" />

  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading">
        Lakshay Manocha <br />Co Founder and Software Archietect <br /><span className="text-muted">AIcademic</span>
      </h2>
      <p className="lead">
        Lakshay Manocha is the Co-Founder of AIcademic and a seasoned expert in full stack development 
        and application design. With a deep understanding of both frontend and backend technologies, 
        Lakshay has played a critical role in building the core structure and functionality of AIcademic. 
        His expertise in scalable architecture, user-focused interfaces, and deployment strategies 
        ensures that the platform delivers a seamless experience. 
        Lakshay’s commitment to performance, reliability, and modern application practices drives the 
        technical excellence of AIcademic.
      </p>
    </div>
    <div className="col-md-5">
      <img
        className="featurette-image img-fluid mx-auto"
        alt="Managing Director"
        src="/Images/Lakshay.jpeg"
        style={{ width: '400px', height: '400px' }}
      />
    </div>
  </div>

  <hr className="featurette-divider" />

  <div className="row featurette">
    <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">
        Anmol Gupta<br />Co Founder and AI-ML Expert<br /><span className="text-muted">AIcademic</span>
      </h2>
      <p className="lead">
        Anmol Gupta, Co-Founder of AIcademic, is a driven and innovative artificial intelligence expert.
         With a strong foundation in machine learning, natural language processing, and data-driven 
         solutions, Anmol leads the AI research and development efforts at AIcademic. 
         He is responsible for integrating smart features into the platform that enhance productivity and 
         automate daily planning tasks. Anmol’s passion for leveraging AI to improve everyday life and 
         his curiosity for emerging technologies fuel the company's vision of intelligent digital organization.
      </p>
    </div>
    <div className="col-md-5 order-md-1">
      <img
        className="featurette-image img-fluid mx-auto"
        alt="Technical Team"
        src="/Images/Anmol.jpeg"
        style={{ width: '400px', height: '400px' }}
      />
    </div>
  </div>

  <hr className="featurette-divider" />
</>





            <FooterComponenet />
        </div>
    )
}