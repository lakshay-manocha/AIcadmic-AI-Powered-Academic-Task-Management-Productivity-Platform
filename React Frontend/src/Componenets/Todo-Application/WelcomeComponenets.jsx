import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Todo.css'
import HeaderComponenet from "./HeaderComponent"
import Recommendation from './Recomendation'
import MoodPredict from './MoodPrediction'
import FooterComponenet from "./FooterComponent"
export default function WelcomeComponenet() {
  const { username } = useParams()
  const [showRecommender, setShowRecommender] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="Login">
      <HeaderComponenet />
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://plus.unsplash.com/premium_photo-1721936482448-1400b30b3c00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Stay Orgainised Stay Ahead
            </h1>
            <p className="lead">
              AIcademic helps you manage your academic and personal tasks effortlessly with smart AI-driven
              suggestions, clean design, and productivity insights — all in one place.
              Plan smarter. Stay ahead.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/todos">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                  Get Started
                </button>
              </Link>

              <Link to="/about">
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
            </svg>
          </div>

          <div>
            <h3 className="fs-2 text-body-emphasis d-grid gap-2 d-md-flex justify-content">AI-Powered Mood Prediction</h3>
            <p style={{ textAlign: 'justify' }}>
              Using your interaction patterns, task completion rates, and optionally short text inputs, our AI
              can predict your mood and emotional state. This insight allows the system to offer empathetic
              suggestions—like reducing task load or motivating you with positive reinforcement—making task
              management not just smarter but also emotionally aware.
            </p>
            <Link to="/moodprediction" className="btn btn-primary">
              Mood Prediction
            </Link>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
              <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Smart & Personalized AI Task Suggestions</h3>
            <p  style={{ textAlign: 'justify' }}>
              Our platform leverages AI to analyze your daily activity patterns, task priorities,
              and past behaviors to intelligently suggest the most relevant tasks for you.
              Whether it’s reminding you of a deadline or recommending when to tackle high-focus work,
              it adapts in real-time to your habits, helping you stay productive without feeling overwhelmed.
            </p>
            <div className="container mt-5">
              <a
                href="#"
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/taskrecomend');
                }}
              >
                Get AI Recommendations
              </a>
            </div>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Daily Productivity Report</h3>
            <p  style={{ textAlign: 'justify' }}>
              At the end of each day, users receive an AI-generated productivity report summarizing completed tasks,
              time spent, and performance trends. This visual breakdown helps you reflect on your efficiency,
              recognize bottlenecks, and improve your workflow—acting like a personal assistant
              who’s always tracking your progress.
            </p>
            <Link to="/Progress" className="btn btn-warning">
              Daily Report
            </Link>
          </div>
        </div>





      </div>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">
            What Our User Say About Us
          </h2>
          <p className="text-body-secondary">
            The review section showcases genuine feedback from our valued users,
            highlighting their experiences with our product or service. It provides insight into what users
            appreciate most—such as ease of use, performance, and support—while
            also helping new visitors build trust and confidence in our offerings.
            These reviews reflect our commitment to delivering quality and user satisfaction.
          </p>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">Aisha Verma</h4>
              <p className="text-body-secondary">
                Absolutely loved the experience! The interface is smooth, and everything works as expected.
                Highly recommend it to anyone looking for reliability and ease of use."
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">Rahul Mehta</h4>
              <p className="text-body-secondary">
                "Great product overall. There were a few minor bugs at first,
                but customer support was very responsive and helpful. Impressed with the service!"
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">Priya Sharma</h4>
              <p className="text-body-secondary">
                One of the best platforms I’ve used! Very intuitive and the features are exactly what I needed.
                It has made my daily tasks so much easier."
              </p>
            </div>

            <div className="col d-flex flex-column gap-2">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">Sneha Iyer</h4>
              <p className="text-body-secondary">
                "Exceptional design and user-friendliness. I’ve recommended this to all my friends.
                Keep up the great work!"
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterComponenet />
    </div>
  )
}