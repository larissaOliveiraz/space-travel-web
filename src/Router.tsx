import { Route, Routes } from "react-router-dom";
import { Crew } from "./pages/Crew";
import { Destination } from "./pages/Destination";
import { Home } from "./pages/Home";
import { Technology } from "./pages/Technology";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}
