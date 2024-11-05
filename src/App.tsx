import "../src/assets/scss/_normalize.scss";
import "./App.scss";

import { Route, Routes } from "react-router-dom";
import ROUTES from "./constants/routes";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={ROUTES.root} element={<Home />} />
        <Route path={ROUTES.created} element={<AddForm />} />
      </Routes>
    </div>
  );
}

export default App;
