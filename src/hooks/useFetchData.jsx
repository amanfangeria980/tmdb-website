import { useState, useEffect } from "react";

const useFetchData = (apiUrl) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`${apiUrl}?api_key=${import.meta.env.VITE_API_KEY}`);
        const response = await fetch(
          `${apiUrl}?api_key=${import.meta.env.VITE_API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error(`Error fetching data:`, error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return data;
};

export default useFetchData;
