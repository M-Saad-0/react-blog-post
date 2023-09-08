import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounter = true;
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(dataUrl, {
          cancelToken: source.token,
        });
        if (isMounter) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounter) {
          setFetchError(err);
          setData([]);
        }
      } finally {
        if (isMounter) {
          setIsLoading(false);
        }
      }
    };
    fetchData(dataUrl);
    return () => {
      console.log("Cleanup");
      isMounter = false;
      source.cancel();
    };
  }, [dataUrl]);
  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
