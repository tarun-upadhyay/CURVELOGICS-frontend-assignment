import React from "react";

const NewCards = ({ data }) => {
  return (
    <div className="flex  flex-col md:flex-row  my-10 mx-auto w-[90%] gap-8 shadow-lg p-5 rounded-xl cursor-pointer hover:translate-y-2">
      <div>
        <img src={data.Image} alt="" className="h-60 w-60 rounded-lg" />
      </div>
      <div>
        <h3 className="text-3xl font-bold">{data.Title}</h3>
        <p className="my-1 font-semibold">Source: {data.Source}</p>
        <p>{data.Description}</p>
      </div>
    </div>
  );
};

export default NewCards;
