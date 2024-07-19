import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAppConstants } from "../utils/common";
import { IconInfoProps } from "../types/components";

const IconInfo = ({ icon, infoId, infoArray }: IconInfoProps) => {
  return (
    <div className="iconInfo-container">
      <FontAwesomeIcon icon={icon} /> {getAppConstants(infoId, infoArray)}
    </div>
  );
};

export default IconInfo;
