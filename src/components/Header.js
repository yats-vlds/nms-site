import React from 'react'
import logo from '../assets/logo.svg'
import { Link, animateScroll as scroll } from "react-scroll";
import {Link as LinkRouterDom} from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <LinkRouterDom to='/'><img src={logo} className="header__logo"/></LinkRouterDom>
                <div className="header__nav">
                    <div className="header__navLeft">
                        <Link
                            activeClass="active"
                            to="expertise"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="header__link"
                            style={{marginLeft: "16px"}}>
                            Expertise
                        </Link>
                        <Link
                            activeClass="active"
                            to="why"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="header__link"
                        >
                            Why are we
                        </Link>
                        <Link
                            activeClass="active"
                            to="works"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="header__link"
                        >
                            Works
                        </Link>
                    </div>
                    <Link
                        activeClass="active"
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="header__linkContacts">
                        Contact us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
