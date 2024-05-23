import { Container , Navbar} from "react-bootstrap";

import '../styles/navbarOne.css'
export const MyNavbarOne = () => {
  return (
    <div>
      <div className="navigation">
      <div className="div">
        <div className="login">
          <div className="text-wrapper"><a style={{color:"black"}} href="http://127.0.0.1:5501/src/pages/login.html">Sign Up</a></div>
          <div className="text-wrapper-2"><a style={{color:"black"}} href="http://127.0.0.1:5501/src/pages/login.html">Sign In</a></div>
        </div>
        <div className="startup-framework"><div className="startup">Welcome</div></div>
        <div className="small-dark-outline"><a href="http://127.0.0.1:5501/src/pages/aboutus.html" className="sign-up">About us</a></div>
      </div>
    </div>
    </div>
  );
};
export default MyNavbarOne;
