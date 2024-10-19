import { useEffect, useState } from 'react';
import './Info.css';

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="background" id="home">
    <div className="container-1">
      <div className={`desc ${isVisible ? 'visible' : ''}`}>
          <h1><span>HEY!</span> I’m Sally, Frontend Developer</h1>
          <p>I create professional web application for business, companies, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.</p>
          <button>
            <a className="ContactMe" href="https://t.me/SallyAlrefaay" target="_blank">Contact Me <i className="fab fa-telegram"></i></a>
          </button>
      </div>
  </div>
  </div>
  );
};

export default Info;