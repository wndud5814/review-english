import { Link } from "react-router-dom";

const MainCard = ({ title, day }) => {
  return (
    <Link to={`/${day}`}>
      <li className="text-xl mb-4 hover:text-gray-700 mt-10">
        <span className="font-semibold mr-2">Day {day}</span>
        <span>{title}</span>
      </li>
    </Link>
  );
};

export default MainCard;
