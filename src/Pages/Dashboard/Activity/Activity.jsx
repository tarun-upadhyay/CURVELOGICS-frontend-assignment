import React from "react";
import { CardWrapper, Chart, Table } from "../../../ui/dashboard/cards";

const Activity = () => {
  return (
    <main className="mt-2 w-full p-5">
      <h1 className={`mb-4 text-4xl font-mono font-bold md:text-2xl px-5`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-5 mx-auto">
        <Table />
        <Chart />
      </div>
    </main>
  );
};

export default Activity;
