import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./containers/pages/home";
import Error404 from "./containers/error/error404";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<Error404/>}/>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
