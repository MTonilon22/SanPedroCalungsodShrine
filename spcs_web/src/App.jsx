import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="page">
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
export default App;
