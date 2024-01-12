import React from "react";
import { MdPaid } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,

  BarChart,
  Bar,
  YAxis,
  Legend,
} from "recharts";

const iconMap = {
  collected: MdPaid,
  customers: IoPeople,
  pending: MdOutlinePendingActions,
  invoices: FaFileInvoiceDollar,
};
export const CardWrapper = () => {
  let numberOfInvoices = 20,
    numberOfCustomers = 36,
    totalPaidInvoices = "$ 151,545",
    totalPendingInvoices = "$ 101,500";
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card title="Total Clients" value={numberOfCustomers} type="customers" />
    </>
  );
};

export function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm cursor-pointer">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
const data = [
  { name: "August", Total: 1000 },
  { name: "September", Total: 800 },
  { name: "October", Total: 1600 },
  { name: "November", Total: 900 },
  { name: "December", Total: 1700 },
  { name: "January", Total: 1200 },
];
export const Chart = ({ title = "Last 6 Month Revenue" }) => {
  return (
    <div className="chart mt-5">
      <div className="mb-5">{title}</div>

      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="gray" />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#total)"
        />
      </AreaChart>
    </div>
  );
};
export const Table = ({ title = "Last 4 months New Clients" }) => {
  const data = [
    { name: "Oct", uv: 10, pv: 2, amt: 12 },
    { name: "Nov", uv: 6, pv: 5, amt: 2 },
    { name: "Dec", uv: 8, pv: 20, amt: 2 },
    { name: "Jan", uv: 2, pv: 10, amt: 2 },
  ];
  return (
    <div>
      <div className="mb-5">{title}</div>
      <BarChart width={600} height={318} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};
