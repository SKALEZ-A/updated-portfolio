// pages/cv.js
import React from "react";

const CVPage = () => {
  return (
    <div className="text-white">
      <h1>this is cv page</h1>
      <embed
        src="../public/Resumeee.pdf"
        width="100%"
        height="500px"
        type="application/pdf"
      />
    </div>
  );
};

export default CVPage;
