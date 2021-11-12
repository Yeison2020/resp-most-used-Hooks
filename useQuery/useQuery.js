import React, { useState, useEffect } from "react";

const useQuery = (url) => {
  const [content, setContent] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setContent(data);
        setIsLoaded(true);
      });
  }, []);

  return [content, isLoaded];
};

export default useQuery;
