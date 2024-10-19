import "./Contact.css"
import { useState } from "react";
export default function Contact() {
    const [isDarkMode] = useState(false);


    return (
    <div className="contactBg">
    <div className={`contact ${isDarkMode ? 'dark-mode' : ''}`} id="contact">
        <h1 className= {`title ${isDarkMode ? 'text-white' : ''}`}>Contact</h1>
        <h3>Let’s Discuss Your Project</h3>
    </div>
    <div className="contactInfo">
    <div className="contactNum">
            <div className="number">
                <button><i className="fa-solid fa-phone"></i></button>
                <num>
                    <p>Call me</p>
                    <p>+963 946 191 231</p>
                </num>
            </div>
            <div className="number">
                <button><i className="fa-solid fa-envelope"></i></button>
                <num>
                    <p>Email me</p>
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">sali.alrefaay@gmail.com</a>
                </num>
            </div>
            <div className="number">
                <button><i className="fa-solid fa-location-dot"></i></button>
                <num>
                    <p>Address</p>
                    <p>Damascus, Syria</p>
                </num>
            </div>
        </div>
    <div className="contactDesc">
            <h2>Let`s Talk About Your Next Project</h2>
            <div className="inputs">
                <input type="text" placeholder="Full name"/>
                <input type="email" placeholder="Your email"/>
            </div>
            <input type="phone" placeholder="Phone number"/>
            <textarea className="message" placeholder="Message" id=""></textarea>
            <button>Send Message</button>
        </div>
    </div>
    </div>
    )
}
