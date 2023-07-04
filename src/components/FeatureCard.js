const FeatureCard = (props) => {
  return (
    <div className="p-5 flex flex-col">
      <img src={props.data.ico} className="card-ico" alt="" />
      <h3 className="text-lg font-semibold mb-2">{props.data.heading}</h3>
      <p>{props.data.content}</p>
    </div>
  );
};
export default FeatureCard;
