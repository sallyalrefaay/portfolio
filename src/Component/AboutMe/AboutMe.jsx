import "./AboutMe.css";

const AboutMe = () => {
return (
<>
<div className="about" id="about">
    <div className="pic">
        <img src="/portfolio/assets/image/Home_art.png" />
    </div>
    <div className="information">
        <h1>About Me</h1>
        <h3><span>I am Sally Alrefaay </span>Web designer and Frontend Developer</h3>
        <p>I design and develop moderen websites and web applecations, web services and online stores. My passion is to become a professinal web developer.</p>
        <div><button><a download href="/portfolio/assets/resume.pdf">Download Cv <i className="fas fa-download"></i></a></button></div>
        <div className="socialMedia">
            <a href="https://www.linkedin.com/in/sally-alrefaay-b15648248" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/sallyalrefaay/" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.facebook.com/sali.alrefaay?mibextid=LQQJ4d" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/sally_alrefaay?igsh=MTN3Mm1zOXJsYXE2NA%3D%3D&utm_source=qr" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>
    </div>
</div>
</>
)
}

export default AboutMe