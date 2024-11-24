// import SignIn from "components/accounts/sign-in/SignIn";
import SignUp from "components/accounts/sign-up/SignUp";

import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid gedf-wrapper">
        {/* <SignIn /> */}
        <SignUp />
        {/* <div className="row">
          <Leftsidebar />
          <Maincontent />
          <Rightsidebar />
        </div> */}
      </div>
    </>
  );
}
