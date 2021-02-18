import React from 'react'
import nms from "../assets/nmsdev.svg"
import "./Cap.css"

const Cap = () => {
    return (
        <>
            <div className="cap">
                <div className="cap__left">
                    <p className="cap__leftTitle">
                        THE GUIDE TO DIGITAL
                    </p>
                </div>
                <div className="cap__right">
                    <img src={nms} className="cap__rightImage"/>
                </div>
            </div>
            <div className="cap_two">
                <p className="cap__leftTitle">
                    TRANSFORMATION
                </p>
            </div>
        </>
    )
}

export default Cap
