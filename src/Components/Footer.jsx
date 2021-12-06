import React from 'react'
import { socialLinks ,quickLinks,cities} from './Data';
const Footer = () => {
    return (
        <div>
            <div className="contact_us">
                <h4>MY WEBSITE</h4>
                <p>6th Floor, Apex mall Lalkothi,
                Tonk Road, Jaipur Rajasthan India.</p>
                <span>+91-141-4311100 </span>|
                <span>+91-141-4311111</span>
                <h6>info@manglamgroup.com</h6>
                <div className="social_links">
                   {
                       socialLinks.map((el)=>{
                           return(
                               <>
                                    <a href={el.link}>{<el.icon />}</a>
                               </>
                           )
                       })
                   }
                </div>
            </div>
            <div className="quickLinks">
                <h4>Quick Links :</h4>
            {
                       quickLinks.map((el)=>{
                           return(
                               <>
                                    <ul>
                                        <li>{el}</li>
                                    </ul>
                               </>
                           )
                       })
                   }
            </div>
            <div className="cities">
                <h4>Cities :</h4>
                {cities.map((el)=>{
                    return(
                        <>
                            <ul>
                                <li>{el}</li>
                            </ul>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer;
