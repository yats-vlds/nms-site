import React, {useEffect} from 'react'
import vectorSmart from "../assets/vectorSmart.png"
import iconDown from "../assets/iconDown.svg"
import "../pages/Custom.css"

const Custom = ({type}) => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div className="custom">

            <div className="custom__left">
                {type === 'custom'
                    ? <h1 className="custom__leftTitle">Custom <br/> SaaS</h1>
                    : type === 'mobile' ? <h1 className="custom__leftTitle">Mobile <br/> and Web Development</h1>
                        : <h1 className="custom__leftTitle">UI/UX <br/> Design</h1>}
                <img src={vectorSmart} alt="vectorSmart" className="vectorSmartCustom"/>
            </div>

            <div className="custom__right">
                <h1 className="custom__rightTitle">
                    What’s possible with SaaS
                </h1>
                <p className="custom__rightText">
                    There’s no disputing the fact that what was once the exclusive turf of
                    an IT department can now be done by non-tech staff. Even a moderately
                    sized business would probably need the following:
                </p>
                <ul className="custom__rightSubtitle">
                    <li className="custom__rightSubtitleText">Business website</li>
                    <li className="custom__rightSubtitleText">Omnichannel client communication</li>
                    <li className="custom__rightSubtitleText">Blogging and content marketing</li>
                    <li className="custom__rightSubtitleText">Automation of customer support</li>
                    <li className="custom__rightSubtitleText">Billing system</li>
                    <li className="custom__rightSubtitleText">CRM</li>
                </ul>
                <p className="custom__rightText">
                    That’s true of business that don’t offer a technical product, say a specialty
                    shop selling a niche product. Once the core business becomes more
                    technical, dozens more services become necessary.
                </p>
                <h1 className="custom__rightTitle">
                    Working manually
                </h1>
                <p className="custom__rightText">
                    In the most rudimentary cases, a business handles all of these tasks
                    manually using email, spreadsheets and templates from platforms such
                    as Wordpress or Wix. The problem is that this is horrendously inefficient
                    and requires a lot of time, often from an entrepreneur or highly paid manager.
                    This diverts resources from more productive customer interactions,
                    strategic planning and simply growing a business. It doesn’t make sense
                    to for someone in this position to devote most of their day to coping and
                    pasting email addresses, manually sending out promotion codes or doing
                    data entry.
                </p>
                <h2 className="custom__rightLastTitle">
                    See cases <img src={iconDown}/>
                </h2>
            </div>

        </div>
    )
}

export default Custom
