import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "./../hooks/useFetchData";
import { calculateAge, formatDate, getGender } from "../../utils";
import { FcPrevious, FcNext } from "react-icons/fc";
import CastKnownForScrollBar from "./../components/CastKnownForScrollBar";

const CastPage = () => {
  const params = useParams();
  const { castId } = params;
  const [data, setData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const res = useFetchData(`https://api.themoviedb.org/3/person/${castId}`);

  useEffect(() => {
    setData(res);
  }, [res]);

  const biographyText = isExpanded
    ? `${data?.biography} `
    : `${data?.biography.slice(0, 1400)} `;

  return (
    <div className="flex gap-2">
      {/* left side */}
      <div className="m-4 flex flex-col">
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.profile_path}`}
          style={{ height: "450px" }}
          alt="cast image"
          className="rounded-lg max-w-[315px]"
        />
        <span className="font-semibold text-xl p-1">Personal Info</span>
        <div className="p-2">
          <span className="font-medium block text-md">Known for</span>
          <span>{data?.known_for_department}</span>
        </div>
        <div className="p-2">
          <span className="font-medium block text-md">Birthday</span>
          <span>{`${formatDate(data?.birthday)} (${calculateAge(
            data?.birthday
          )} years old)`}</span>
        </div>
        <div className="p-2">
          <span className="font-medium block text-md">Gender</span>
          <span>{getGender(data?.gender)}</span>
        </div>
        <div className="p-2">
          <span className="font-medium block text-md">Place of Birth</span>
          <span>{data?.place_of_birth}</span>
        </div>
        <div className="p-2">
          <span className="font-medium block text-md">Also Known As</span>
          {data?.also_known_as.map((name) => (
            <span key={name} className="block mb-1">
              {name}
            </span>
          ))}
        </div>
      </div>
      {/* right side  */}
      <div className="m-4 flex gap-4 flex-col">
        <span className="text-4xl font-bold">{data?.name}</span>
        <div>
          <span className="text-xl font-semibold block mb-2">Biography</span>
          <span>
            {biographyText}
            {data?.biography.length > 1400 && (
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    Read less
                    <FcPrevious className="inline" />
                  </>
                ) : (
                  <>
                    Read more <FcNext className="inline" />
                  </>
                )}
              </span>
            )}
          </span>
        </div>

        <div>
          <CastKnownForScrollBar castId={castId} />
        </div>
      </div>
    </div>
  );
};

export default CastPage;
