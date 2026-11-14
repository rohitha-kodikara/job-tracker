import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 bg-slate-900/95 px-6 py-4 text-white shadow-lg backdrop-blur">
      <h1 className="text-xl font-extrabold tracking-tight">
        Job<span className="text-sky-400">Tracker</span>
      </h1>
      <div className="flex gap-3 text-sm font-semibold">
        <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sky-300 ring-1 ring-sky-400/40">
          Applications: 5
        </span>
        <span className="rounded-full bg-amber-500/20 px-3 py-1 text-amber-300 ring-1 ring-amber-400/40">
          Upcoming interviews: 2
        </span>
      </div>
    </header>
  );
};

export default Header;
