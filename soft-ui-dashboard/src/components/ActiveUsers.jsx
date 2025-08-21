export default function ActiveUsers({ className = "" }) {
  const items = [
    { label: "Users", value: "36K" },
    { label: "Clicks", value: "2m" },
    { label: "Sales", value: "435$" },
    { label: "Items", value: "43" },
  ];
  return (
    <div className={className}>
      <div className="grid grid-cols-4 gap-3 text-center">
        {items.map((it) => (
          <div key={it.label} className="rounded-xl border border-slate-200 p-2">
            <div className="text-lg font-semibold">{it.value}</div>
            <div className="text-xs text-slate-500">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
