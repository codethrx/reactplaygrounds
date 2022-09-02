import React from "react";
import { useQuery } from "react-query";
function Demo() {
  //1st arg - unique key...
  const { isLoading, error, data, isError } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return <div>Demo</div>;
}

export default Demo;
