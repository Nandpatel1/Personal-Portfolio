import NavBar from "./NavBar";
import SocialNetwork from "./SocialNetwork";
import Typewriter from "typewriter-effect";

const Home = ()=>{
    return (
        <>
            <NavBar/>
            <SocialNetwork/>
            <div className="home">
                <div className="info">
                    <h2 className="first_line">Hey I'm <span> Nand Makadia </span></h2>
                    <h2 className="second_line">I build things for Web.</h2>
                    <h3>I like making Fun, Interactive things with Code</h3>
                </div>
            </div>
        </>
        
    );
};

export default Home;