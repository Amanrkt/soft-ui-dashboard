import {
  DollarSign,
  Users,
  UserPlus,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const icons = {
  money: DollarSign,
  users: Users,
  clients: UserPlus,
  sales: ShoppingCart,
};

export default function StatCard({ title, value, delta, trend, type }) {
  const Icon = icons[type];
  const isUp = trend === "up";

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-400 to-brand-500 text-white shadow-soft">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-500">{title}</p>
        <h4 className="font-semibold text-slate-700">{value}</h4>
      </div>
      <div
        className={`flex items-center text-sm font-medium ${
          isUp ? "text-emerald-600" : "text-rose-600"
        }`}
      >
        {isUp ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
        {delta}
      </div>
    </div>
  );
}
