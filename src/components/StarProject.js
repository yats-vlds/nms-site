import React from 'react'
import "./StarProject.css"
import background from "../assets/back.svg"
import iconDown from "../assets/iconDown.svg"
import vectorSmart from "../assets/vectorSmart.png"
import {Link} from "react-router-dom";


const StarProject = ({id}) => {
    return (
        <div className="star__project">
            <div className="star__projectSloy" id={id}>
                <img src={background} alt="" className="star__imageBack"/>
            </div>
            <div className="star__projectLeft">
                <h1 className="star__projectLeftTitle"><Link to='/custom' className="link__starPorject">Custom SaaS <img src={iconDown}/> </Link></h1>
                <h1 className="star__projectLeftTitle"><Link to='/mobile-and-web' className="link__starPorject">Mobile and Web Development <img
                    src={iconDown}/> </Link></h1>
                <h1 className="star__projectLeftTitle"><Link to='/ui-ux' className="link__starPorject">UI/UX Design <img src={iconDown}/> </Link></h1>
            </div>
            <div className="star__projectRight">
                <img src={vectorSmart} className="vectorSmart"/>
                <div className="btnStar">
                    <div className="btnStar-twoSloy">
                        <div className="btnStar-threeSloy">
                            <div className="btnStar-fourSloy">
                                <h1 className="btnStar-fourSloyTitle">
                                    Start now
                                </h1>
                            </div>
                        </div>
                        <div className="ellipse-btnStar">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StarProject
