import React from 'react'
import "./Footer.css"
import nmsDev from "../assets/nmsdev.svg"
import iconWhatsApp from "../assets/iconWhatsApp.png"
import iconViber from "../assets/iconViber.png"
import iconTelegram from "../assets/iconTelegram.png"

const Footer = ({id}) => {
    return (
        <>
            <div className="footer" id={id}>
                <img src={nmsDev} className="footer__img"/>
                <h5 className="footer__location">Team based in Kyiv, Ukraine</h5>
                <div className="footer__contacts">
                    <h1 className="footer__contactsTitle">Contact us now</h1>
                    <p className="strongTitle"><strong>Tel.:</strong>+38 090 000 00 00</p>
                    <p className="strongTitle"><strong>Mail.:</strong>dev.nms@gmail.com</p>
                </div>
                <div className="icons">
                    <img src={iconWhatsApp}/>
                    <img src={iconViber}/>
                    <img src={iconTelegram}/>
                </div>
            </div>
            <div className="hr">
                <p className="footer_afterHr">© NMS 2021</p>
            </div>
        </>
    )
}

export default Footer
