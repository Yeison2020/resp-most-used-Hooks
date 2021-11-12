import { useState, useEffect, useRef } from "react";
// Custom hook
const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    // This part here Make the loading part to be shown on the screen It likes reseting to make it long
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // here I will be doing only making my setState  little bit slower
        // lOADING MEANS DATA IS NULL

        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        } else {
          console.log("Nose llamo");
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: "We cound not load Your Information",
        });
      });
  }, [url]);

  return state;
};

export default useFetch;
