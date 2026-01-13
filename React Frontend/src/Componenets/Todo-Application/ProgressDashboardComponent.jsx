import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from "recharts";
import FooterComponenet from "./FooterComponent";
import HeaderComponenet from "./HeaderComponent";

const kpiData = {
  totalTasks: 128,
  pendingTasks: 12,
  productivityScore: 85,
  streak: 10,
};

const taskProgressData = [
  { date: "Jul 1", tasksCompleted: 5 },
  { date: "Jul 2", tasksCompleted: 7 },
  { date: "Jul 3", tasksCompleted: 3 },
  { date: "Jul 4", tasksCompleted: 9 },
  { date: "Jul 5", tasksCompleted: 6 },
];

const taskCategoryData = [
  { category: "Study", value: 40 },
  { category: "Fitness", value: 20 },
  { category: "Project", value: 30 },
  { category: "Others", value: 10 },
];

const aiUsageData = [
  { name: "Used", value: 24 },
  { name: "Ignored", value: 6 },
];

const COLORS = ["#0d6efd", "#20c997", "#ffc107", "#fd7e14"];

export default function ProgressDashboard() {
  return (
    <>
    <HeaderComponenet />
    <div className="container py-5 bg-light min-vh-100">
      {/* KPI Cards */}
      <div className="row g-4 mb-4">
        <KpiCard title="Total Tasks" value={kpiData.totalTasks} />
        <KpiCard title="Pending Tasks" value={kpiData.pendingTasks} />
        <KpiCard title="Productivity Score" value={`${kpiData.productivityScore}%`} />
        <KpiCard title="Streak" value={`${kpiData.streak} days`} />
      </div>

      {/* Line Chart */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Task Completion Over Time</h5>
          <LineChart width={600} height={300} data={taskProgressData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="tasksCompleted"
              stroke="#0d6efd"
              strokeWidth={2}
            />
          </LineChart>
        </div>
      </div>

      {/* Category and AI Usage Charts */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title mb-3">Task Category Distribution</h5>
              <PieChart width={300} height={300}>
                <Pie
                  data={taskCategoryData}
                  dataKey="value"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {taskCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title mb-3">AI Suggestions Usage</h5>
              <BarChart width={300} height={300} data={aiUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#198754" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponenet />
    </>
  );
}

// KPI Card Component (Bootstrap Style)
function KpiCard({ title, value }) {
  return (
    <div className="col-6 col-md-3">
      <div className="card text-center shadow h-100">
        <div className="card-body">
          <h6 className="text-muted">{title}</h6>
          <h3 className="fw-bold">{value}</h3>
        </div>
      </div>
    </div>
  );
}
