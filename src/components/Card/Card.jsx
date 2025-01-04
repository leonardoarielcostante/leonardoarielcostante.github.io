import PropTypes from "prop-types";

const Card = ({ title, company, responsibilities }) => {
  return (
    <div className="w-full rounded-lg border p-5">
      <div className="pb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
      <ul className="list-disc space-y-2 pl-5">
        {responsibilities.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  responsibilities: PropTypes.array.isRequired,
};

export default Card;
