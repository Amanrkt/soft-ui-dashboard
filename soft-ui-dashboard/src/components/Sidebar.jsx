import {
  LayoutDashboard,
  Table,
  CreditCard,
  Monitor,
  Languages,
  User,
  LogIn,
  LogOut,
  HelpCircle,
} from "lucide-react";

const links = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Tables", icon: Table },
  { label: "Billing", icon: CreditCard },
  { label: "Virtual Reality", icon: Monitor },
  { label: "RTL", icon: Languages },
];

const account = [
  { label: "Profile", icon: User },
  { label: "Sign In", icon: LogIn },
  { label: "Sign Up", icon: LogOut },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-64 flex-col border-r border-slate-100 bg-white p-4 shadow-card">
      <div className="flex items-center gap-2 px-2 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white font-bold">S</div>
        <span className="font-semibold text-slate-700">Soft UI Dashboard</span>
      </div>

      {/* Nav links */}
      <nav className="mt-6 flex-1 space-y-6 overflow-y-auto">
        <div>
          {links.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                active
                  ? "bg-brand-500 text-white shadow-soft"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-soft text-brand-500">
                <Icon className="h-5 w-5" />
              </span>
              {label}
            </button>
          ))}
        </div>
        <div>
          <p className="px-3 text-xs uppercase text-slate-400">Account Pages</p>
          {account.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-soft text-brand-500">
                <Icon className="h-5 w-5" />
              </span>
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Help card */}
      <div className="mt-4 rounded-2xl bg-gradient-to-tr from-brand-400 to-brand-500 p-4 text-white shadow-soft">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          <span className="font-semibold">Need help?</span>
        </div>
        <p className="mt-1 text-xs">Please check our docs</p>
      </div>
    </aside>
  );
}
