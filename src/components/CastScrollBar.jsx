import { useState, useEffect, useRef } from "react";

const CastScrollBar = ({ id }) => {
  const [data, setData] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8b7cde159e4005f36fe55ae71ddcaea3`;
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result.cast || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      if (direction === "next") {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      } else if (direction === "prev") {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      }
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      <button onClick={() => handleScroll("prev")}>prev</button>
      <button onClick={() => handleScroll("next")}>next</button>
      <div 
        ref={scrollContainerRef} 
        className="flex gap-[20px] flex-row items-center h-[30vh] overflow-x-scroll" 
        style={{ width: `${data.length * 400}px` }}
      >
        {data.map((cast, index) => (
          <div
            key={index}
            className="flex border-[2px] bg-white h-full flex-col min-w-[400px]"
          >
            {cast.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastScrollBar;
