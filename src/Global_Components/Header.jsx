import React, {useEffect, useState} from "react";
import "./Header.css";
import Shellterm from "../Views/Shellterm";

const Header = () => {

    const [isToggled, setIsToggled] = useState(false);

    const toggleLink = () => {
      setIsToggled(prevState => !prevState);
    };

    // Press escape to untoggle terminal
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          setIsToggled(false);
        }
      };
  
      // Add event listener when the component is mounted
      window.addEventListener("keydown", handleKeyDown);
  
      // Cleanup event listener when the component is unmounted
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    const scrollDown = (id) => {
        const navbarHeight = document.getElementById("navsections").clientHeight;
        const element = document.getElementById(id);
        const position = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: position,
          behavior: "smooth",
        });
      };

    return(
        <nav id="navsections">
             <ul>
        <li>
          <span className="nav-item" onClick={() => scrollDown("home")}>
            Home
          </span>
        </li>
        <li>
          <span className="nav-item" onClick={() => scrollDown("about")}>
            About
          </span>
        </li>
        <li>
          <span
            className="nav-item" onClick={() => scrollDown("projects")}
          >
            Projects
          </span>
        </li>
        <li>
          <span
            className="nav-item" onClick={() => scrollDown("Experience")}
          >
            Experience
          </span>
        </li>
        <li>
          <span className="nav-item" onClick={() => scrollDown("CV")}>
            CV
          </span>
        </li>
        <li>
          <span className="nav-item" onClick={() => scrollDown("reachout")}>
            Reachout
          </span>
        </li>
        <li> 
        <button onClick={toggleLink}>&gt;_</button>
        {/*FOR Shellterm */}
        {isToggled && (
          <div className="terminal">
              <Shellterm />
          </div>
        )}
        </li>
      </ul>
    </nav>
    );
};

export default Header;