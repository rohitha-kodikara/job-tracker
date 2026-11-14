import { BrowserRouter, Route, Routes } from "react-router-dom";

import JobTrackerMain from "./components/JobTrackerMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobTrackerMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
