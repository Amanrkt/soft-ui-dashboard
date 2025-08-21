import { Search, Bell, Settings } from "lucide-react";

export default function Topbar({ onMenuClick }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div className="text-sm text-slate-500">
        <span className="text-slate-400">Dashboard /</span> <span className="font-medium text-slate-700">Dashboard</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            className="h-10 w-64 rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="Type here..."
          />
        </div>
        <button className="rounded-xl p-2 hover:bg-slate-100" aria-label="Notifications">
          <Bell className="h-5 w-5 text-slate-600" />
        </button>
        <button className="rounded-xl p-2 hover:bg-slate-100" aria-label="Settings">
          <Settings className="h-5 w-5 text-slate-600" />
        </button>
      </div>
    </div>
  );
}
