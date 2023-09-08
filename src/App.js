import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reservation from "./page/reservation";
import Infrom from "./component/main/inform";
import Confirm from "./component/reservation/confirm";
import Admin from "./page/admin";
import Myreservation from "./page/myreservation";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Infrom />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/myreservation" element={<Myreservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
