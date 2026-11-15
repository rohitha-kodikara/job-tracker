import React from "react";
import Header from "./Header";
import Applications from "./applications/Applications";
import Interviews from "./interviews/Interviews";

const JobTrackerMain = () => {
  return (
    <div className="min-h-screen bg-slate-200">
      {/* Header */}
      <Header />

      <main className="mx-auto grid max-w-6xl gap-8 p-6 lg:grid-cols-[3fr_2fr]">
        {/* Applications */}
        <Applications />

        {/* Interviews */}
        <Interviews />
      </main>
    </div>
  );
};

export default JobTrackerMain;
