import React from "react";
import { Link } from "react-router-dom";
import "./academy.css"
const Academy = () =>{
    return(
        <div className="academy">
            <div className="textac">
                <h1>Want to become a model ?</h1>
                <p>At <b> Law Models Academy </b>, we focus on nurturing and developing aspiring models with the skills and knowledge needed to succeed in the competitive fashion industry. Our academy offers a comprehensive curriculum that covers runway training, personal branding, portfolio building, and industry etiquette.

Our experienced coaches provide hands-on guidance, ensuring each model is well-prepared to excel on both local and global stages. Whether you're just starting out or looking to refine your skills, Walkerolarry Models Academy is the perfect place to take your modeling career to the next level.</p>
<button className="button-39" role="button">
  <Link to="/academy">JOIN US</Link>
</button>
           
            </div>

            <div className="imageac">
                <img src="https://i.ibb.co/Gc2pdtw/Whats-App-Image-2024-10-24-at-2-25-03-AM-1.jpg" alt="" srcset="" />
            </div>
        </div>
    )
}

export default Academy
