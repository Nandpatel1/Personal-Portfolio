import NavBar from "./NavBar";
import SocialNetwork from './SocialNetwork'
const About = ()=>{
    return (
        <>
            <NavBar/>
            <SocialNetwork/>
            <div className="about">
                <img src="image/myphoto.jpg" alt="not found" />
                <div className="right_side">
                    <h1> ABOUT ME</h1>
                    <p>Hello My name is Nand Makadia. I am a MERN stack Web developer I am currently persuing Computer Engineering.
                    Till now, I have completed a few projects as mentioned in my Portfolio. </p>
                    <a href="/image/CV.pdf" className="btn" download>DOWNLOAD CV</a>

                </div>
            </div>
        </>
        
    );
};
export default About;