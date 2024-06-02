import Footer from "../Footer/footer"
import Header from "../Header/header"
import "./home.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
    <Header/>
    <div>
      <div className="section1">
        <div className="left">
        <h1>From Idea to Empire</h1>
        </div>
        <div className="right">
        <h2>Speakers : 
            <li>Husain Saifi</li>
            <li>Vinay Singhal</li> 
            </h2>
        <h3><i class="fa-regular fa-calendar-days"></i> Friday 7 June, 2024</h3>
        <h4><i class="fa-solid fa-location-dot"></i>RGPV Conference Hall</h4>
        <Link to = "/register">
        <button className="bt1">Register Now</button>
        </Link>
        </div>
      </div>
      <div className="section2">
        <p> An inspiring speaker session hosted by the E-Cell RGPV, where industry leaders
        and successful entrepreneurs share their journey, insights, and strategies for
        navigating the dynamic world of startups and innovation. This session facilitates
        a unique opportunity for the participants to gain practical knowledge and to build
        a network with like-minded individuals. Don't miss out on the chance to learn
        from the best and take your entrepreneurial aspirations to new heights.</p>
      </div>
        <h1>Know Our Speakers</h1>
      <div className="section3">
        <div className="card">
            <img src="https://media.licdn.com/dms/image/D4D03AQFIDo_X3yDvzg/profile-displayphoto-shrink_800_800/0/1686731588351?e=1723075200&v=beta&t=0oWSv4EnHtJyNlNkt7YQtrmxZp-tqCQ4bJe56B5Q-W4" alt="photo-1" />
            <h2>Husain Saifi</h2>
            <p>Co-Founder and CEO <br /> of HackerKernel</p>
            <a href="https://www.linkedin.com/in/husain-saify/"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="card">
            <img src="https://media.licdn.com/dms/image/D4D03AQGI5Ha7jQyIag/profile-displayphoto-shrink_800_800/0/1672736308345?e=1723075200&v=beta&t=vpIvOQoAxQuAeqb5823GlBa5KFuP_RW776HcEe4mFgo" alt="photo-2" />
            <h2>Vinay Singhal</h2>
            <p>Co-Founder and CEO <br /> of Nukkad by STAGE</p>
            <a href="https://www.linkedin.com/in/vinaykrsinghal/"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      <div className="section2">
        <h1>Timeline</h1>
        <ul className="timeline">
        <li>11:15 am - 11:35 am: Welcoming of Guests and Introduction of the Speakers by the Head of E-Cell</li>
        <li>11:35 am - 11:50 am: Welcome Speech by the Director</li>
        <li>11:50 am - 12:30 pm: Session on "How to Become a Serial Entrepreneur" by Husain Saifi</li>
        <li>12:30 pm - 12:40 pm: Q&A Session to Address Any Doubts</li>
        <li>12:40 pm - 01:00 pm: Quiz 1</li>
        <li>01:00 pm - 02:00 pm: Break</li>
        <li>02:00 pm - 02:40 pm: How to Overcome Failures and Obstacles as an Aspiring Entrepreneur" by Vinay Singhal</li>
        <li>02:40 pm - 02:50 pm: Q&A Session to Address Any Doubts</li>
        <li>02:50 pm - 03:10 pm: Final Quiz</li>
        <li>03:10 pm - 03:45 pm: Closing Ceremony and Thank You Note</li>
    </ul>
      </div>
      <div className="section4">
        <button class="bt1">Register Now</button>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home
