import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import SmallBarChart from "./components/SmallBarChart";
import SalesOverviewChart from "./components/SalesOverviewChart";
import { Rocket } from "lucide-react";

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <Topbar />

        {/* Stats */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Today's Money"
            value="$53,000"
            delta="+55%"
            trend="up"
            type="money"
          />
          <StatCard
            title="Today's Users"
            value="2,300"
            delta="+3%"
            trend="up"
            type="users"
          />
          <StatCard
            title="New Clients"
            value="+3,462"
            delta="-2%"
            trend="down"
            type="clients"
          />
          <StatCard
            title="Sales"
            value="$103,430"
            delta="+5%"
            trend="up"
            type="sales"
          />
        </div>
        {/* Hero cards */}
        <div className="mt-6 flex gap-6">
          {/* Built by developers */}
          <div className="flex-1 rounded-xl bg-white p-4 shadow-card">
            <p className="text-[10px] uppercase text-slate-400">
              Built by developers
            </p>
            <h2 className="mt-1 text-base font-semibold text-slate-700">
              Soft UI Dashboard
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </p>
            <button className="mt-2 text-xs text-brand-500 hover:underline">
              Read More →
            </button>
          </div>

          {/* Rocket card */}
          <div className="w-40 flex items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-sky-600 p-4 shadow-card">
            <Rocket className="h-10 w-10 text-white" />
          </div>

          {/* Work with rockets */}
          <div className="flex-1 rounded-xl bg-slate-900 p-4 text-white shadow-card">
            <h3 className="text-base font-semibold">Work with the rockets</h3>
            <p className="mt-1 text-xs text-slate-300">
              Wealth creation is an evolutionarily recent positive-sum game. It
              is all about who takes the opportunity first.
            </p>
            <button className="mt-2 text-xs text-brand-200 hover:underline">
              Read More →
            </button>
          </div>
        </div>

        {/* Charts */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-4 shadow-card">
            <SmallBarChart />
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-card">
            <h4 className="mb-2 font-semibold text-slate-700">
              Sales Overview
            </h4>
            <SalesOverviewChart />
          </div>
        </div>
      </main>
    </div>
  );
}
