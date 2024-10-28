import "./AboutMe.css";

const AboutMe = () => {
return (
<>
<div className="about" id="about">
    <div className="pic">
        <img className="circle" src="/portfolio/assets/image/Circles.png"/>
        <img className="html skill" src="/portfolio/assets/image/html.png" alt="" />
        <img className="css skill" src="/portfolio/assets/image/css.png" alt="" />
        <img className="js skill" src="/portfolio/assets/image/js.png" alt="" />
        <img className="php skill" src="/portfolio/assets/image/php.png" alt="" />
        <img className="sql skill" src="/portfolio/assets/image/sql.png" alt="" />
        <img className="bootstrap skill" src="/portfolio/assets/image/bootstrap.png" alt="" />
        <img className="tailwind skill" src="/portfolio/assets/image/tailwind.png" alt="" />
        <img className="react skill" src="/portfolio/assets/image/react.png" alt="" />
        <img className="github skill" src="/portfolio/assets/image/github.png" alt="" />
    </div>
    <div className="information">
        <h1>About Me</h1>
        <p>I design and develop moderen websites and web applecations, web services and online stores. My passion is to become a professinal web developer.</p>
        <div className="range">
            <div>
                <label htmlFor="html">HTML5</label>
                <input type="range" id="html" value={95} min={0} max={100}/>
                <label htmlFor="css">CSS</label>
                <input type="range" id="css" value={90} min={0} max={100}/>
                <label htmlFor="js">JavaScript</label>
                <input type="range" id="js" value={85} min={0} max={100}/>
                <label htmlFor="bootsrab">Bootsrabs</label>
                <input type="range" id="bootstrab" value={80} min={0} max={100}/>
                <label htmlFor="tailwind">Tailwind</label>
                <input type="range" id="tailwind" value={80} min={0} max={100}/>
            </div>
            <div>
                <label htmlFor="react">React</label>
                <input type="range" id="react" value={80} min={0} max={100}/>
                <label htmlFor="php">PHP</label>
                <input type="range" id="php" value={70} min={0} max={100}/>
                <label htmlFor="sql">SQL</label>
                <input type="range" id="sql" value={70} min={0} max={100}/>
                <label htmlFor="github">GitHub</label>
                <input type="range" id="github" value={90} min={0} max={100}/>
            </div>
        </div>
    </div>
</div>
</>
)
}

export default AboutMe