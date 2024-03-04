import { AreaChart, DonutChart } from "@mantine/charts";
import { Progress } from "@mantine/core";

const AdminDashboardHome = () => {
  return (
    <div className="py-5 px-6 md:px-8 lg:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-3">
        <div className="bg-white px-3 py-4 flex flex-col gap-4 rounded-lg">
          <h3 className="font-medium">Goals</h3>
          <div className="flex flex-col gap-2">
            <Progress color="#5157ED" value={40} />
            <p className="text-sm text-[#4f4f4f]">
              <span className="#515151 font-medium">40%</span> completed
            </p>
          </div>
        </div>
        <div className="bg-white px-3 py-4 flex flex-col gap-4 rounded-lg">
          <h3 className="font-medium">360 appraisals</h3>
          <div className="flex flex-col gap-2">
            <Progress color="#5157ED" value={40} />
            <p className="text-sm text-[#4f4f4f]">
              <span className="#515151 font-medium">40%</span> completed
            </p>
          </div>
        </div>
        <div className="bg-white px-3 py-4 flex flex-col gap-4 rounded-lg">
          <h3 className="font-medium">Self performance review</h3>
          <div className="flex flex-col gap-2">
            <Progress color="#5157ED" value={40} />
            <p className="text-sm text-[#4f4f4f]">
              <span className="#515151 font-medium">40%</span> completed
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-9 gap-3">
        <div className="">
          <h3 className="font-medium mb-2">Goals Metrics</h3>
          <div className="bg-white px-6 py-14 lg:py-6 flex flex-col items-center md:flex-row lg:flex-col md:justify-center lg:justify-normal md:items-center gap-10 lg:gap-5 rounded-lg">
            <DonutChart
              className="justify-self-center"
              strokeWidth={0}
              data={[
                { name: "Overdue", value: 25, color: "#FD5454" },
                { name: "Completed", value: 25, color: "#74FFA3" },
                { name: "Not started", value: 25, color: "#C6C6D7" },
                { name: "In progress", value: 25, color: "#7075FF" },
              ]}
            />
            <ul className="flex flex-col gap-3 place-self-start">
              <li className="flex items-center gap-1">
                <span className="block bg-[#74FFA3] w-2 h-2 rounded-full"></span>
                <p className="text-sm text-[#6F6F6F]">25% Completed</p>
              </li>
              <li className="flex items-center gap-1">
                <span className="block bg-[#FD5454] w-2 h-2 rounded-full"></span>
                <p className="text-sm text-[#6F6F6F]">25% Overdue</p>
              </li>
              <li className="flex items-center gap-1">
                <span className="block bg-[#7075FF] w-2 h-2 rounded-full"></span>
                <p className="text-sm text-[#6F6F6F]">25% In progress</p>
              </li>
              <li className="flex items-center gap-1">
                <span className="block bg-[#C6C6D7] w-2 h-2 rounded-full"></span>
                <p className="text-sm text-[#6F6F6F]">25% Not started</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-2">
            <h3 className="font-medium">Performance Review</h3>
            {/* <p></p> */}
          </div>
          <div className="bg-white  py-5 flex items-center gap-5 rounded-lg">
            <AreaChart
              h={300}
              data={[
                { date: "Jan", Apples: 50 },
                { date: "Feb", Apples: 65 },
                { date: "Mar", Apples: 40 },
                { date: "Apr", Apples: 30 },
                { date: "May", Apples: 0 },
                { date: "Jun", Apples: 23 },
                { date: "Jul", Apples: 24 },
                { date: "Aug", Apples: 15 },
                { date: "Sep", Apples: 70 },
                { date: "Oct", Apples: 90 },
                { date: "Nov", Apples: 15 },
                { date: "Dec", Apples: 15 },
              ]}
              dataKey="date"
              series={[{ name: "Apples", color: "indigo.6" }]}
              curveType="natural"
              tickLine="none"
              yAxisProps={{ domain: [20, 100] }}
              withDots={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
