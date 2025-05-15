import "./style.css"
import Header from './components/Header'
import iconLinkedIn from "./assets/img/lucide_linkedin.png"
import iconGitlab from "./assets/img/gitlab.png"
import iconDribbble from "./assets/img/lucide_dribbble.png"
import iconYoutube from "./assets/img/lucide_youtube.png"
import homeImage from "./assets/img/landing-img1.png"
import aboutImage from "./assets/img/about-imgg.png"
import Footer from "./components/Footer"
import iconPhone from "./assets/img/lucide_phone-call.png"
import iconEmail from "./assets/img/lucide_mail.png"
import iconLocation from "./assets/img/lucide_map-pin.png"
import iconPhoneBC from "./assets/img/bc_telpon.png"
import iconEmailBC from "./assets/img/bc_email.png"
import iconLocationBC from "./assets/img/bc_map.png"
import imageBC from "./assets/img/img-cardbussiness.png"
// import logoBC from "./assets/img/Logo.png"

function App() {

  return (
    <>
      <Header />
      {/* Home */}
      <section id="home" className="home-sec">
        <div className="sec-desc">
          <p>Hello, I'm</p>
          <h2>Ayu Rizkyca Awalia</h2>
          <h3>Junior Frontend Developer <br /> Based in Indonesia</h3>
          <div className="sosmeds">
            <a href="/contact">
              <button className="primary">Contact Me</button>
            </a>
            <div className="sosmed">
              <a href="https://www.linkedin.com/in/ayu-rizkyca-awalia/">
                <img src={iconLinkedIn} alt="LinkedIn" />
              </a>
              <a href="https://gitlab.com/ayurizkyca">
                <img src={iconGitlab} alt="GitLab" />
              </a>
              <a href="https://dribbble.com/ayu_rizkyca">
                <img src={iconDribbble} alt="Dribbble" />
              </a>
              <a href="https://www.youtube.com/channel/UCE9dPfL3ZDEwUwo8OUJhKmw">
                <img src={iconYoutube} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <img src={homeImage} alt="hero image" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="sec-about">
        <div className="img-center">
          <img src={aboutImage} alt="about-img" />
        </div>
        <div className="desc-about">
          <h1>ABOUT ME</h1>
          <p>Graduate from Institut Teknologi PLN, a private college in West Jakarta, majoring in informatics
            engineering. I have experience using Flutter, HTML, CSS, and UI/UX with Figma.
            Currently, I'm starting to learn about web programming, and I have a strong desire for this field.
          </p>
          <div className="cards">
            <div className="card">
              <p><b>1+</b></p>
              <p>years experiece</p>
            </div>
            <div className="card">
              <p><b>2+</b></p>
              <p>completed project</p>
            </div>
            <div className="card">
              <p><b>2+</b></p>
              <p>companies worked</p>
            </div>
          </div>
          <span className="sosmeds">
            <a href="https://drive.google.com/file/d/1exsjTyCBAjnRWswTt5ofhSM2lcHOJhS8/view?usp=sharing">
              <button className="primary">Download CV</button>
            </a>
            <div className="sosmed">
              <a href="https://www.linkedin.com/in/ayu-rizkyca-awalia/">
                <img src={iconLinkedIn} alt="LinkedIn" />
              </a>
              <a href="https://gitlab.com/ayurizkyca">
                <img src={iconGitlab} alt="GitLab" />
              </a>
              <a href="https://dribbble.com/ayu_rizkyca">
                <img src={iconDribbble} alt="Dribble" />
              </a>
              <a href="https://www.youtube.com/channel/UCE9dPfL3ZDEwUwo8OUJhKmw">
                <img src={iconYoutube} alt="Youtube" />
              </a>
            </div>
          </span>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="sec-works">
        <h1>My Works</h1>
      </section>

      {/* Contact */}
      <section id="contact" className="sec-contact">
        <h1>Contact Me</h1>
        <div className="contacts">
          <div className="contact">
            <img src={iconPhone} alt="phone" />
            <p><b>Call or Message</b><br />085337575075</p>
          </div>
          <div className="contact">
            <img src={iconEmail} alt="email" />
            <p><b>Email</b><br />ayurizkycaaa@gmail.com</p>
          </div>
          <div className="contact">
            <img src={iconLocation} alt="location" />
            <p><b>Location</b><br />Tangerang,Indonesia</p>
          </div>
        </div>
      </section>

      <section className="bussiness-card">
      <div className="img-card">
          <img src={imageBC} alt="img bussiness card" />
          {/* <img src={logoBC} alt="logo" />
          <h3>PT. Sejahtera Selamanya</h3> */}
        </div>
        <div className="bc-desc">
          <div>
            <h3>Ayu Rizkyca Awalia</h3>
            <p>Junior Frontend Developer</p>
          </div>
          <div className="card-contacts">
            <div className="bc-contact">
              <img src={iconPhoneBC} alt="phone" />
              <p>085337575075</p>
            </div>
            <div className="bc-contact">
              <img src={iconEmailBC} alt="email" />
              <p>ayurizkycaaa@gmail.com</p>
            </div>
            <div className="bc-contact">
              <img src={iconLocationBC} alt="location" />
              <p>Tangerang, Indonesia</p>
            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </>
  )
}

export default App
