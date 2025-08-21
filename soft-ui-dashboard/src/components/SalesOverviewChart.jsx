import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const data = [
  { name: "Jan", desktop: 40, mobile: 12 },
  { name: "Feb", desktop: 30, mobile: 13 },
  { name: "Mar", desktop: 60, mobile: 48 },
  { name: "Apr", desktop: 60, mobile: 160 },
  { name: "May", desktop: 70, mobile: 152 },
  { name: "Jun", desktop: 65, mobile: 41 },
  { name: "Jul", desktop: 85, mobile: 60 },
];

export default function SalesOverviewChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 12, right: 12, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickLine={false} />
        <YAxis tickLine={false} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="desktop" strokeWidth={3} dot={false} />
        <Line type="monotone" dataKey="mobile" strokeWidth={3} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
