import comma from "../images/comma.svg";

const CustomerCard = (props) => {
  return (
    <div className="card-base-test">
      <div className="float-txt">
        <h2 className="text-md mt-3 px-5 text-sky-800/80 font-semibold mb-2">
          {props.data.name}
        </h2>
        <h3 className="text-sm text-sky-800/80 font-medium mb-6 px-5">
          {props.data.work}
        </h3>
      </div>
      <img src={props.data.img} className="float-img" alt="company stamp" />
      <p className="italic text-sky-900 text-md font-semibold leading-relaxed">
        {props.data.quote}
      </p>
      <img
        src={comma}
        className="img-test"
        alt="testimonial card decoraction"
      />
    </div>
  );
};
export default CustomerCard;
