import axios from "axios";
import { useEffect, useState } from "react";

const accessToken =  {"X-Access-Token": "1c91088390288297fbfac94a2bb1dab27b37555731af66037b54f736cef94908" }

axios.defaults.baseURL = "https://pure-caverns-82881.herokuapp.com/api/v54";

const useAxios = ({ url}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {  //"ed19da4be8913e9ef7ca2165efc7db0f6faca54804cd00071b53cf0f9a46f026"
    const fetchData = () => {
      axios.get(url, { headers: accessToken})
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;
