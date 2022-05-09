import React from "react";
import NavBar from "./NavBar";
import SocialNetwork from "./SocialNetwork";
import Card from "./Card";

const Project = ()=>{
    return (
        <>
            <NavBar/>
            <SocialNetwork/>
            <div className="project">
                <Card link = "https://github.com/Nandpatel1/Blog-Website" imgsrc = "image/blog website.png" name = "blog website"/>
                <Card link = "https://github.com/Nandpatel1/Car-Game" imgsrc = "image/Car game.png" name = "Car Game"/>
                <Card link = "https://github.com/Nandpatel1/Weather-Report" imgsrc = "image/weather app.png" name = "weather report"/>
                <Card link = "https://github.com/Nandpatel1/NotesWebsite" imgsrc = "image/notes.png" name = "keep notes"/>
                <Card link = "https://github.com/Nandpatel1/Quotes" imgsrc = "image/quotes.png" name = "motivational quotes"/>
                <Card link = "https://github.com/Nandpatel1/MYLibrary" imgsrc = "image/my library.png" name = "my library"/>
            </div> 
        </>
    )
}

export default Project;