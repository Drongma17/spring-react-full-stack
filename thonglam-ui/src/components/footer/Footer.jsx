import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function Footer() {

   const isActive = Math.random() >0.5;

  return (

   <>
     <h1 style={{textAlign: "center", color: isActive ? "#5B21B6": "#333"}}>Demo of Global CSS Scope from Footer</h1>
    <footer className="footer">
      Buit with
      <FontAwesomeIcon
        icon={faHeart}
        className="footer-icon"
        aria-hidden="true"
      />
      by
      <a href="https://eazybytes.com/" target="_blank" rel="noreferrer">
        eazybytes
      </a>
    </footer>
   </>

   
  );
}