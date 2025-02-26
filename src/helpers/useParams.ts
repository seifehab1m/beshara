import { useState } from "react";

interface ParamsType {
  [key: string]: Array<string>;
}

function useParams() {
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    new URLSearchParams(window.location.search)
  );

  const addParams = (params: ParamsType) => {
    const newSearchParams = new URLSearchParams(window.location.search);

    for (const [key, value] of Object.entries(params)) {
      if (newSearchParams.has(key)) {
        newSearchParams.delete(key);
      }

      value.forEach((val) => {
        newSearchParams.append(key, val);
      });
    }

    window.history.pushState(null, "", "?" + newSearchParams.toString());

    setSearchParams(newSearchParams);
  };

  const removeParams = (key: string) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete(key);

    window.history.pushState(null, "", "?" + newSearchParams.toString());

    setSearchParams(newSearchParams);
  };

  return { searchParams, addParams, removeParams };
}

export default useParams;
