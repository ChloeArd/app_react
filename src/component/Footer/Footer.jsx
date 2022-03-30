import "./Footer.css";
import img from "../../assets/img/img.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/fontawesome-free-solid';

export const Footer = function () {

    return(
        <footer>
            <div className="width_50 flexRow">
                <img src={img}/>
                <p id="site">dreamstime.com</p>
            </div>
            <div id="right_footer" className="width_50">
                <p>ID 159937102 <FontAwesomeIcon icon={faCopyright} /> Vladwel</p>
            </div>
        </footer>
    );
}