const ServiceCard = (props) => {
  return (
    <div className="flex justify-center">
      <div className="bg-sky-200 card-hov w-48 flex flex-col cursor-pointer justify-between rounded-md shadow-md p-8">
        <img src={props.data.ico} className="ico-service" alt="" />
        <h3 className="font-semibold text-lg mb-2">{props.data.heading}</h3>
      </div>
    </div>
  );
};
export default ServiceCard;
