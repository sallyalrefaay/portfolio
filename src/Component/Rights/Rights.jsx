import "./Rights.css"
export default function Rights() {
    return (
    <div className="copyRight">
        <div className="devBy">
            <p>Develpoment by Sally</p>
            <img src="/portfolio/assets/image/logo1.png" alt="" />
        </div>
        <p>@ 2024. All Rights Reserved</p>
        <div className="followMe">
            <h4>Follow Me On Social Media:</h4>
            <div className="socialMedia"> 
                <a href="https://www.linkedin.com/in/sally-alrefaay-b15648248" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/sallyalrefaay/" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.facebook.com/sali.alrefaay?mibextid=LQQJ4d" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/sally_alrefaay?igsh=MTN3Mm1zOXJsYXE2NA%3D%3D&utm_source=qr" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
    )
}
