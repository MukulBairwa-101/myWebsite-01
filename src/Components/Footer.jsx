import React from 'react'
import { socialLinks ,quickLinks,cities} from './Data';
const Footer = () => {
    return (
        <>
        <div className="footer_wrapper">
            <div className="contact_us">
                <h4>MY WEBSITE</h4>
                <p>6th Floor, Apex mall Lalkothi,
                Tonk Road, Jaipur Rajasthan India.</p>
                <div>
                <span>+91-141-4311100 </span>|
                <span>+91-141-4311111</span>
                </div>

                <h5>info@manglamgroup.com</h5>
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
        <div className="copyright">
            <p>Copyright © 2016-2021 XYZ</p>
            <article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa corrupti, iure et dolor sit aspernatur unde pariatur sed perferendis alias labore, quibusdam minima dolores neque, sequi soluta beatae? Tenetur.
                Maxime, saepe. Dignissimos dolorum hic unde id suscipit accusantium deleniti! Totam ipsam quia obcaecati, modi tenetur id facilis quod, laudantium in at neque voluptatum dicta similique odio, enim pariatur maiores?
                Itaque nobis quasi voluptatibus harum blanditiis quis quas, consectetur quidem id voluptate reiciendis sed facilis ducimus voluptatum, aperiam corporis? Tenetur, praesentium? Unde expedita facere porro? Ex placeat facilis dolorem harum.
                Laudantium, odit. Architecto quisquam sit reiciendis optio mollitia explicabo perferendis eligendi tempora a nulla dignissimos sapiente magnam sequi, asperiores laboriosam dolores soluta maxime molestiae odit, vel quo. Ad, aliquid accusantium!
                Dolores porro soluta cupiditate quae atque ipsum quo et. Veritatis error, velit officiis nemo aliquid explicabo at repudiandae officia. Asperiores cupiditate sapiente voluptas quasi, nesciunt eos officiis qui quae repudiandae.
                Repellat ducimus quos temporibus? Cumque eligendi laboriosam enim, voluptatem dolorem adipisci impedit quo consequuntur similique architecto error officia? Atque temporibus inventore veniam soluta in earum itaque quasi ducimus, beatae hic!
                Facilis nihil, itaque doloribus consequuntur deleniti, nisi tempora maiores molestiae expedita iste debitis sit aperiam. Veritatis ullam voluptas facere blanditiis reprehenderit praesentium, ea iste animi vel aut minus fuga. Quasi!
                Quae ducimus ullam porro expedita at provident magni sequi. Quidem provident excepturi non dolore minus? Beatae, sint dolorum facere quo corrupti eius at exercitationem aliquam, ex nostrum delectus. Labore, culpa!
            </article>
        </div>
        </>
    )
}

export default Footer;
