import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Brush,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "2023 jav.",
    val: 8.4254,
  },
  {
    name: "2023 fév.",
    val: 8.0987,
  },
  {
    name: "2023 mars.",
    val: 8.2067,
  },
  {
    name: "2023 avr.",
    val: 8.0826,
  },
  {
    name: "2023 mai.",
    val: 8.1245,
  },
  {
    name: "2023 jui.",
    val: 7.9287,
  },
  {
    name: "2023 juil.",
    val: 7.3215,
  },
  {
    name: "2023 aout.",
    val: 8.2651,
  },
  {
    name: "2023 sep.",
    val: 9.2867,
  },
  {
    name: "2023 oct.",
    val: 8.1299,
  },
  {
    name: "2023 nov.",
    val: 8.2979,
  },
  {
    name: "2023 déc.",
    val: 8.2876,
  },
];

export default function GraphicDemo() {
  return (
    <div id="GraphicDemo" className="w-full py-8">
      <ResponsiveContainer height={400} className="text-xs">
        <LineChart data={data}>
          <Line
            type="monotone"
            dot={false}
            dataKey="val"
            stroke="#1677ff"
            strokeWidth={1}
          />
          <CartesianGrid strokeDasharray="4" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            dataKey="val"
            strokeWidth={0}
            orientation="right"
            domain={["dataMin", "dataMax"]}
            tickCount={6}
          />
          <Tooltip />
          <Brush>
            <AreaChart>
              <Area dataKey="val" fill="#77AAF4" stroke="#77AAF4" />
            </AreaChart>
          </Brush>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
