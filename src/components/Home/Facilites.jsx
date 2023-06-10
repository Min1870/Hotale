import React from "react";
import TitlePara from "../../utils/TitlePara";

const Facilites = () => {
  return (
    <div>
      <TitlePara
        title={"Hotel Facilites"}
        para={
          "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
        }
      />
      <div className="grid grid-cols-10">
        <div className="col-span-2">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Facilites;
