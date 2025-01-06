import PropTypes from "prop-types";
import { MyButton } from "../MyButton";

const ImgCard = ({ title, description, image, technologies }) => {
  return (
    <div className="h-full w-full rounded-lg">
      <img
        src={image}
        alt={image}
        className="h-60 w-full rounded-t-lg object-cover"
      />
      <div className="space-y-4 rounded-b-lg border-b border-l border-r p-3">
        <h3 className="text-xl font-bold 2xl:text-2xl">{title}</h3>
        <p className="h-32 text-sm text-gray-500 lg:h-40 xl:h-44 2xl:text-base">
          {description}
        </p>
        <div className="mb-1 flex h-12 flex-wrap gap-2">
          {technologies.map((e, index) => (
            <span
              key={index}
              className="h-fit rounded-xl bg-gray-200 px-2 py-1 text-xs font-bold 2xl:text-base"
            >
              {e}
            </span>
          ))}
        </div>
        <div className="flex h-full w-full items-end justify-end">
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
