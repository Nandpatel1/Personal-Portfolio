import React from "react";  

const Card = (props)=>{
    return(
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} className="card_image" alt=""/>
                    <div className="card_info">
                       <h3 className="card_title"> {props.name} </h3>
                       <a href={props.link} target='_blank'>
                           <button>View Project</button>
                       </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card;