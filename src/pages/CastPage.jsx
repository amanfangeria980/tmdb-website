import React from "react";
import { useParams } from "react-router-dom";

const CastPage = () => {
  const params = useParams();
  const { castId } = params;

  console.log(castId);
  return <div>CastPage {castId}</div>;
};

export default CastPage;
