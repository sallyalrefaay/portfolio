import "./Portfolio.css"

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
                    <p>HTML5-CSS</p>
                    <div>
                        <a href="https://github.com/sallyalrefaay/K2skiing.git" target="_blank"><button><i className="fas fa-plus"></i></button></a>
                        <a href="https://sallyalrefaay.github.io/K2skiing/" target="_blank"><button><i className="fas fa-eye"></i></button></a>
                    </div>
                </div>
            </div>
            <div className="project pro-2">
                <div className="bgColor">
                    <h2>Flora</h2>
                    <p>HTML5-CSS</p>
                    <div>
                        <a href="https://github.com/sallyalrefaay/Flora.git" target="_blank"><button><i className="fas fa-plus"></i></button></a>
                        <a href="https://sallyalrefaay.github.io/Flora/" target="_blank"><button><i className="fas fa-eye"></i></button></a>
                    </div>
                </div>
            </div>
            <div className="project pro-3">
                <div className="bgColor">
                    <h2>Salla Store</h2>
                    <p>HTML5-CSS</p>
                    <div>
                        <a href="https://github.com/sallyalrefaay/Salla-store.git" target="_blank"><button><i className="fas fa-plus"></i></button></a>
                        <a href="https://sallyalrefaay.github.io/Salla-store/" target="_blank"><button><i className="fas fa-eye"></i></button></a>
                    </div>
                </div>
            </div>
            <div className="project pro-4">
                <div className="bgColor">
                    <h2>Edujar</h2>
                    <p>HTML5-CSS-React</p>
                    <div>
                        <a href="https://github.com/sallyalrefaay/Edujar.git" target="_blank"><button><i className="fas fa-plus"></i></button></a>
                        <a href="https://sallyalrefaay.github.io/Edujar/" target="_blank"><button><i className="fas fa-eye"></i></button></a>
                    </div>
                </div>
            </div>
            <div className="project pro-5">
                <div className="bgColor">
                    <h2>DashStack</h2>
                    <p>HTML5-CSS-React-Tailwind</p>
                    <div>
                        <a href="https://github.com/sallyalrefaay/DashStack.git" target="_blank"><button><i className="fas fa-plus"></i></button></a>
                        <a href="https://sallyalrefaay.github.io/DashStack/" target="_blank"><button><i className="fas fa-eye"></i></button></a>
                    </div>
                </div>
            </div>
            <div className="project pro-6">
                <div className="bgColor">
                    <h2>Home Decoration</h2>
                    <p>HTML5-CSS-JS-Bootstrabs</p>
                    <div>
                        <a href="https://github.com/sallyalrefaay/Home-Decoration.git" target="_blank"><button><i className="fas fa-plus"></i></button></a>
                        <a href="https://sallyalrefaay.github.io/Home-Decoration/" target="_blank"><button><i className="fas fa-eye"></i></button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
