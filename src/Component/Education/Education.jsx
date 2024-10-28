import "./Education.css"
const Education = () => {
    return (
    <>
        <div className="educationCourses" id="education">
            <h1>Education & Courses</h1>
            <div className="container2">
                <div className= "educationSection">
                    
                    <div className="card">
                        <h2>Diploma in Computer Engineering</h2>
                        <h3>Al Baath University | Homs - Syria</h3>
                        <p>Diploma Degree: Good </p>
                    </div>
                    <div className="card">
                        <h2>Bachelor in Information Technology </h2>
                        <h3>Syrian Virtual University | Damascus - Syria</h3>
                        <p>Bachelor Degree: Very Good</p>
                    </div>
                    <div className="card">
                        <h2>Master`s in Web Science </h2>
                        <h3>Syrian Virtual University | Damascus - Syria</h3>
                        <p>Graduation: Not yet</p>
                    </div>
                </div>
                <div className="coursesSection">
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Internet Of Things</h2>
                            <h3>Syrian Computer Society | Damascus - Syria </h3>
                            <p>Is a network of connected devices that exchange data and enable remote control and information analysis.</p>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Frontend Developer</h2>
                            <h3>Syrian Computer Society | Damascus - Syria </h3>
                            <p>Fully frontend web development training, HTML,CSS,JS including frontend libraries and frameworks.</p>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Frontend Developer</h2>
                            <h3>Vica Web Solutions | Online </h3>
                            <p>Fully frontend web development training, HTML,CSS,JS including frontend libraries and frameworks.</p>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Backend Developer</h2>
                            <h3>Vica Web Solutions | Online </h3>
                            <p>Fully backend web development training, Php, SQL, Git, GitHub including backend libraries and frameworks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contactMe">
            <div className="tryMe"></div>
            <div className="tryMe2">
                    <div>
                        <h2>Try me out, risk free!</h2>
                        <p>If you’re not happy with the design after the first draft,</p>
                        <p>I’ll refund your deposit, no questions asked.</p>
                    </div>
                    <a className="telegram" href="https://t.me/SallyAlrefaay" target="_blank">Contact Me <i className="fab fa-telegram"></i></a>
                </div>
        </div>
    </>
    )
}

export default Education;