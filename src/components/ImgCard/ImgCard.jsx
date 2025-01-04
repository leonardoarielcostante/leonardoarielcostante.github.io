import PropTypes from "prop-types";
import { MyButton } from "../MyButton";

const ImgCard = ({ title, description, image, technologies }) => {
  return (
    <div className="mx-auto w-full max-w-80 rounded-lg">
      <img
        src={image}
        alt={image}
        className="h-64 w-full rounded-t-lg object-cover"
      />
      <div className="max-w-80 space-y-3 rounded-b-lg border-b border-l border-r p-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="space-x-2 space-y-2">
          {technologies.map((e, index) => (
            <span
              key={index}
              className="rounded-xl bg-gray-200 px-2 py-1 text-xs font-bold"
            >
              {e}
            </span>
          ))}
        </div>
        <div className="flex w-full justify-end">
          <MyButton text="Ver" className={"w-16 py-1 hover:bg-gray-100"} />
        </div>
      </div>
    </div>
  );
};

ImgCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
};

export default ImgCard;
