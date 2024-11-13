import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreens from "./screens/homeScreens";
import Facilitiesscreens from "./screens/Facilitiesscreens";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreens />}>
          <Route index element={<HomeScreens />} />
        </Route>
          <Route path="/facilities" element={<Facilitiesscreens />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
