import { useState } from "react";
import { signup } from "services/signup";

export const useSignup = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    setLoading(true);
    signup(params)
      .then((res) => {
        if (res.status === 200) {
          setResponse(res.data);
        } else {
          console.log("something went wrong");
          setError(res.data.message);
        }
      })
      .catch((err) => {
        console.log({ err });
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { fetchData, response, error, loading };
};
