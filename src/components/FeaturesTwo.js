import FeatureCard from "./FeatureCard";
import wallet from "../images/wallet.svg";
import bulb from "../images/bulb.svg";
import heart from "../images/heart.svg";
import thumbsup from "../images/thumbs-up.svg";
import speedometer from "../images/speedometer.svg";

const FeaturesTwo = () => {
  const cardData = [
    {
      ico: wallet,
      heading: "Wallet Friendly",
      content: "Good ratio of price, performance, quality, and speed.",
    },
    {
      ico: bulb,
      heading: "Qualified Personnel",
      content: "A dedicated team of industry experts.",
    },

    {
      ico: thumbsup,
      heading: "No Interruptions",
      content: "Move your website from the old server without any downtime.",
    },
    {
      ico: speedometer,
      heading: "Seamless",
      content: "Get a responsive and fast-loading website.",
    },
    {
      ico: heart,
      heading: "Customer Care",
      content:
        "A belief in building a strong, long-term customer relationship based on confidence and continuity.",
    },
  ];
  return (
    <div className="xs:px-10 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-40 py-10">
      <h2 className="font-bold xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-12 tracking-tighter">
        Key <span className="text-sky-500">Features</span>
      </h2>
      <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5">
        {cardData.map((item) => (
          <FeatureCard key={item.heading} data={item}></FeatureCard>
        ))}
      </div>
    </div>
  );
};
export default FeaturesTwo;
