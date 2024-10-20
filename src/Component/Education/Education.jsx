import "./Education.css"
const Education = () => {
    return (
    <>
        <div className="educationCourses" id="education">
            <h1>Education</h1>
            <div className="container2">
                <div className= "educationSection">
                    
                    <div className="card">
                        <div className="bgCard">
                            <img src="/portfolio/assets/image/bg11.jpg" alt="" />
                        </div>
                        <h2>Diploma in Computer Engineering</h2>
                        <h3>Al Baath University | Homs - Syria</h3>
                        <p>Diploma Degree: Good </p>
                    </div>
                    <div className="card">
                    <div className="bgCard">
                            <img src="/portfolio/assets/image/bg10.jpg" alt="" />
                        </div>
                        <h2>Bachelor in Information Technology </h2>
                        <h3>Syrian Virtual University | Damascus - Syria</h3>
                        <p>Bachelor Degree: Very Good</p>
                    </div>
                    <div className="card">
                    <div className="bgCard">
                            <img src="/portfolio/assets/image/bg9.jpg" alt="" />
                        </div>
                        <h2>Master`s in Web Science </h2>
                        <h3>Syrian Virtual University | Damascus - Syria</h3>
                        <p>Graduation: Not yet</p>
                    </div>
                </div>
                <h1>Courses</h1>
                <div className="coursesSection">
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Internet Of Things</h2>
                            <h3>Syrian Computer Society | Damascus - Syria </h3>
                            <p>Is a network of connected devices that exchange data and enable remote control and information analysis.</p>
                        </div>
                        <div className="bgCard-2">
                            <img src="/portfolio/assets/image/bg12.jpg" alt="" />
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Frontend Developer</h2>
                            <h3>Syrian Computer Society | Damascus - Syria </h3>
                            <p>Fully frontend web development training, HTML,CSS,JS including frontend libraries and frameworks.</p>
                        </div>
                        <div className="bgCard-2">
                            <img src="/portfolio/assets/image/bg1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Frontend Developer</h2>
                            <h3>Vica Web Solutions | Online </h3>
                            <p>Fully frontend web development training, HTML,CSS,JS including frontend libraries and frameworks.</p>
                        </div>
                        <div className="bgCard-2">
                            <img src="/portfolio/assets/image/bg3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Backend Developer</h2>
                            <h3>Vica Web Solutions | Online </h3>
                            <p>Fully backend web development training, Php, SQL, Git, GitHub including backend libraries and frameworks.</p>
                        </div>
                        <div className="bgCard-2">
                            <img src="/portfolio/assets/image/bg13.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Education;