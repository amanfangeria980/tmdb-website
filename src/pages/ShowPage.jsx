import React from "react";
import { useParams } from "react-router-dom";
const ShowPage = () => {
  const params = useParams();
  console.log(params);
  return <div>ShowPage</div>;
};

export default ShowPage;
