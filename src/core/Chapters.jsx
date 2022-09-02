import React from "react";
//importing the chapters...
import Chapter1 from "../chapters/chapter1/Chapter1";
import Chapter2 from "../chapters/chapter2/Chapter2";
import Chapter3 from "../chapters/chapter3/FormValidation";
function Chapters() {
  return (
    <>
      <h2>All the Chapters are..</h2>
      {/* <Chapter1 /> */}
      {/* <Chapter2 /> */}
      <Chapter3 />
    </>
  );
}

export default Chapters;
