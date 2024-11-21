import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreens from "./screens/homeScreens";
import Facilitiesscreens from "./screens/Facilitiesscreens";
import RoomsSuites from "./screens/Rooms&Suites";
import ContactUs from "./screens/ContactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreens />}>
          <Route index element={<HomeScreens />} />
        </Route>
          <Route path="/facilities" element={<Facilitiesscreens />} />
          <Route path="/RoomsSuites" element={<RoomsSuites />} />
          <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
