import Applications from "./components/applications/Applications";
import Header from "./components/Header";
import Interviews from "./components/interviews/Interviews";

function App() {
  // Static placeholders (UI witharai)
  const showForm = true; // false karala form eka hide wena widiya balanna

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-sky-50 to-slate-100">
      {/* Header */}
      <Header />

      <main className="mx-auto grid max-w-6xl gap-8 p-6 lg:grid-cols-[3fr_2fr]">
        {/* Applications */}
        <Applications showForm={showForm} />

        {/* Interviews */}
        <Interviews />
      </main>
    </div>
  );
}

export default App;
