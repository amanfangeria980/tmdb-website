import React from "react";
import { getPathColor } from "../../utils";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ percentage }) => {
  return (
    <div className="w-[50px] text-white font-bold">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        className=""
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: "25px",
          pathColor: getPathColor(percentage),
          textColor: "white",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
};

export default ProgressCircle;
