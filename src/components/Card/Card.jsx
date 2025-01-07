import PropTypes from "prop-types";

const Card = ({ title, company, responsibilities }) => {
  return (
    <div className="w-full rounded-lg border p-5">
      <div className="pb-4">
        <h3 className="text-xl font-bold md:text-2xl 2xl:text-3xl">{title}</h3>
        <p className="text-xs text-gray-500 md:text-sm 2xl:text-lg">
          {company}
        </p>
      </div>
      <ul className="list-disc space-y-2 pl-5 text-sm md:text-base 2xl:text-xl">
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
