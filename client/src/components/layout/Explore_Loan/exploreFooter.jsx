import React from 'react';
import {Link} from 'react-router-dom';

const ExploreFooter = () => {
    return (
        <div>
            <div className="FooterDiv">
               <img src="Egoras-logo.svg" alt="" className="ImgFooter"/>
            </div>
            <div className="footerP">Get in Touch Today</div>
            <div className="footerP">08167029609</div>
            <div className="footerP1"><Link to=" " className="footerEmail">info@egoras.com</Link></div>

        </div>
    )
}

export default ExploreFooter;
