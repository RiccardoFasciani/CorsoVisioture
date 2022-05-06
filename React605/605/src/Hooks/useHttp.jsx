import React, { useState, useEffect, useCallback, useContext } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async ({ url, methodH, headersH, bodyH, manageData }) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${url}`, {
          method: methodH || "GET",
          headers: headersH || {
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(bodyH) || null,
        });

        if (!response.ok) {
          throw new Error(" Error thrown from useHttp Hook");
        }

        const data = await response.json();
        manageData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err || "Something's Wrong");
      }
    },
    []
  );

  return { isLoading, error, sendRequest };
};
export default useHttp;
