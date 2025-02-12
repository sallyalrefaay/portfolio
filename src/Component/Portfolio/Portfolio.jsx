import "./Portfolio.css"
import { Link} from 'react-router-dom'
export default function Portfolio() {
    return (
    <>
    <div className="portfolio" id="portfolio">
        <h3>Portfolio</h3>
        <div className="portfolioNav">
            <h1>My Creative Works Latest <span>Projects</span></h1>
            <button><a href="https://github.com/sallyalrefaay/" target="_blank">View GitHub <i className="fa-solid fa-up-right-from-square"></i></a></button>
        </div>
        <div className="projects">
            <div className="project pro">
                <img src="/portfolio/assets/image/project-1.png" alt="" />
                <div className="bgColor">
                    <h2>K2skiing</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button><span>More Details</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro">
            <img src="/portfolio/assets/image/project-2.png" alt="" />
                <div className="bgColor">
                    <h2>Flora</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button> <span>More Details</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro">
            <img src="/portfolio/assets/image/project-3.png" alt="" />
                <div className="bgColor">
                    <h2>Salla Store</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button><span>More Details</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro">
            <img src="/portfolio/assets/image/project-4.png" alt="" />
                <div className="bgColor">
                    <h2>Edujar</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button><span>More Details</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro">
            <img src="/portfolio/assets/image/project-5.png" alt="" />
                <div className="bgColor">
                    <h2>DashStack</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button><span>More Details</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro">
            <img src="/portfolio/assets/image/project-6.png" alt="" />
                <div className="bgColor">
                    <h2>Home Decoration</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button><span>More Details</span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
