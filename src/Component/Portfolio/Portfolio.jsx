import "./Portfolio.css"
import { Link} from 'react-router-dom'
export default function Portfolio() {
    return (
    <>
    <div className="portfolio" id="portfolio">
        <h1>Projects</h1>
        <div className="portfolioNav">
            <h3>My Creative Works Latest Projects</h3>
            <button><a href="https://github.com/sallyalrefaay/" target="_blank">View GitHub <i className="fa-solid fa-up-right-from-square"></i></a></button>
        </div>
        <div className="projects">
            <div className="project pro-1">
                <div className="bgColor">
                    <h2>K2skiing</h2>
                    <Link to= '/Project'>
                    <div>
                        <span>More Details</span><button><i className="fa-solid fa-up-right-from-square"></i></button>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro-2">
                <div className="bgColor">
                    <h2>Flora</h2>
                    <Link to= '/Project'>
                    <div>
                        <span>More Details</span><button><i className="fa-solid fa-up-right-from-square"></i></button>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro-3">
                <div className="bgColor">
                    <h2>Salla Store</h2>
                    <Link to= '/Project'>
                    <div>
                        <span>More Details</span><button><i className="fa-solid fa-up-right-from-square"></i></button>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro-4">
                <div className="bgColor">
                    <h2>Edujar</h2>
                    <Link to= '/Project'>
                    <div>
                        <span>More Details</span><button><i className="fa-solid fa-up-right-from-square"></i></button>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro-5">
                <div className="bgColor">
                    <h2>DashStack</h2>
                    <Link to= '/Project'>
                    <div>
                        <span>More Details</span><button><i className="fa-solid fa-up-right-from-square"></i></button>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro-6">
                <div className="bgColor">
                    <h2>Home Decoration</h2>
                    <Link to= '/Project'>
                    <div>
                        <span>More Details</span><button><i className="fa-solid fa-up-right-from-square"></i></button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
