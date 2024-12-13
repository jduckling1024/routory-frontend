import Leftsidebar from "./Leftsidebar";
import Maincontent from "./Maincontent";
import Rightsidebar from "./Rightsidebar";

export default function PostMain() {
    return (
        <div className="container-fluid gedf-wrapper">
            <div className="row">
                <Leftsidebar />
                <Maincontent />
                <Rightsidebar />
            </div>
        </div>
    );
}

