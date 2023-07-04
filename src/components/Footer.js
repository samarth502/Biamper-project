import logo from "../images/logoBlack.png";
import facebook from "../images/logo-facebook.svg";
import linkedin from "../images/logo-linkedin.svg";
import twitter from "../images/logo-twitter.svg";
import pinterest from "../images/logo-pinterest.svg";

const Footer = () => {
  return (
    <div className="footer-container-base">
      <div className="footer-container">
        <img src={logo} className="h-8" alt="company logo" />
        <p>Terms & Conditions | Privacy Policy</p>
        <p>
          &#169;Bimaper Technologies & Solutions Private Limited - All Rights
          Reserved.
        </p>
      </div>
      <div className="footer-container">
        <p>
          <span className="font-semibold">Phone:</span> +91 9621151871
        </p>
        <p>
          <span className="font-semibold">Email:</span> info@bimaper.com
        </p>
        <p>
          <span className="font-semibold">Address:</span> Ground Floor, Super
          Shopping Center, Near Kukrail Bridge, Faizabad Road, Lucknow, Uttar
          Pradesh, India - 226016
        </p>
      </div>
      <div className="flex gap-4 justify-center items-end">
        <img src={facebook} className="footer-ico" alt="facebook icon" />
        <img src={twitter} className="footer-ico" alt="twitter icon" />
        <img src={linkedin} className="footer-ico" alt="linkedin icon" />
        <img src={pinterest} className="footer-ico" alt="pinterest icon" />
      </div>
                          <li>
            Designed and developed by <strong>Samarth devli</strong>
            <p></p>

                    </li>
    </div>
  );
};
export default Footer;
