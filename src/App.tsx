// import SignIn from "components/accounts/sign-in/SignIn";

import Leftsidebar from "components/Leftsidebar";
import Maincontent from "components/Maincontent";
import Rightsidebar from "components/Rightsidebar";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid gedf-wrapper">
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <div className="row">
          <Leftsidebar />
          <Maincontent />
          <Rightsidebar />
        </div>
      </div>
    </>
  );
}
