import a1 from "../images/p1.jpg";
import a2 from "../images/p2.jpg";
import a3 from "../images/p3.jpg";
import a4 from "../images/p4.jpg";
import a5 from "../images/p5.jpg";
import a6 from "../images/p6.jpg";
import a7 from "../images/p7.jpg";
import a8 from "../images/p8.jpg";
import a9 from "../images/p9.jpg";
import a10 from "../images/p10.jpg";
import Marquee from "react-fast-marquee";

const FeaturedIn = () => {
  return (
    <div className="w-5/6 mx-auto overflow-hidden">
      <Marquee>
        <div className="flex py-10 gap-4 justify-center items-center">
          <img src={a1} className="feature-logo" alt="Featured 1" />
          <img src={a2} className="feature-logo" alt="Featured 2" />
          <img src={a3} className="feature-logo" alt="Featured 3" />
          <img src={a4} className="feature-logo" alt="Featured 4" />
          <img src={a5} className="feature-logo" alt="Featured 5" />
          <img src={a6} className="feature-logo" alt="Featured 6" />
          <img src={a7} className="feature-logo" alt="Featured 7" />
          <img src={a8} className="feature-logo" alt="Featured 8" />
          <img src={a9} className="feature-logo" alt="Featured 9" />
          <img src={a10} className="feature-logo" alt="Featured 10" />
        </div>
      </Marquee>
    </div>
  );
};
export default FeaturedIn;
