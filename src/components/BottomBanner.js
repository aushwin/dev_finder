import { FaMapMarkerAlt, FaLink, FaTwitter, FaBuilding } from "react-icons/fa";

const BottomBanner = (props) => {
  return (
    <div className="flex gap-32 text-sm">
      <div>
        <div className="mb-5 flex gap-2">
          <FaMapMarkerAlt />{" "}
          <div className="text-xs text-gray-500">{props.location}</div>
        </div>
        <div className="mb-5 flex gap-2">
          <FaLink />
          <div className="text-xs text-gray-500">{props.url}</div>
        </div>
      </div>
      <div>
        <div className="mb-5">
          <div className="mb-5 flex gap-2">
            <FaTwitter />
            <div className="text-xs text-gray-500">Not Available</div>
          </div>
        </div>
        <div className="mb-5 flex gap-2">
          <FaBuilding />
          <div className="text-xs text-gray-500">{props.org}</div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
