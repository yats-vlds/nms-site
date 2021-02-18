import React from 'react'
import "./Expert.css"
import yog from "../assets/yog.svg"
import shakhmaty from "../assets/shakhmaty.svg"
import vess from "../assets/vess.svg"
import AnimateHorse from "./AnimateHorse";
import AnimateRocket from "./AnimateRocket";


const Expert = () => {
    return (
        <div className="expert">
            <div className="expert__container">
                <div className="expert__lineFirst">
                    <div className="expert__lineLeft">
                        <p className="expert__lineText">
                            No matter what type of your work you do, NMS
                            customized software development will fulfill your needs.
                        </p>
                    </div>
                    <div className="expert__lineRight">
                        <h1 className="expert__lineFirstTitle">
                            Your Project Path
                        </h1>
                    </div>
                </div>

                <div className="expert__line">
                    <div className="expert__lineLeft">
                        <h1 className="expert__lineTitle">
                            Your Project Path
                        </h1>
                        <p className="expert__lineText">
                            No matter what type of your work you do, NMS
                            customized software development will fulfill your needs.
                        </p>
                    </div>
                    <div className="expert__lineRight">
                        <div className="expert__lineRightYog">
                            <img src={yog} alt="yog" className="expert__img"/>
                        </div>
                    </div>
                </div>

                <div className="expert__line">
                    <div className="expert__lineLeft">
                        <AnimateRocket />
                    </div>
                    <div className="expert__lineRight">
                        <h1 className="expert__lineTitle">
                            Ideation and evaluation
                                              of your business needs
                        </h1>
                        <p className="expert__lineText">
                            No matter what type of your work you do, NMS customized
                                             software development will fulfill your needs. No matter
                                            what type of your work you do, NMS customized software
                                      development will fulfill your needs.
                        </p>
                    </div>
                </div>

                <div className="expert__line expert__lineLast">
                    <div className="expert__lineLeft">
                        <h1 className="expert__lineTitle">
                            Creation of an
                                    Effective Action Plan
                        </h1>
                        <p className="expert__lineText">
                            No matter what type of your work you do, NMS customized
                            software development will fulfill your needs. No matter
                            what type of your work you do, NMS customized software
                            development will fulfill your needs.
                        </p>
                    </div>
                    <div className="expert__lineRight">
                       <AnimateHorse />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expert
