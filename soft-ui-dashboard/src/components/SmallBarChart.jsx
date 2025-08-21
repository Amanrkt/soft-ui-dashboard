import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  { name: "M", uv: 400 }, { name: "T", uv: 240 },
  { name: "W", uv: 300 }, { name: "T", uv: 200 },
  { name: "F", uv: 278 }, { name: "S", uv: 189 },
  { name: "S", uv: 239 },
];

export default function SmallBarChart() {
  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={18}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="uv" radius={[8, 8, 8, 8]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
