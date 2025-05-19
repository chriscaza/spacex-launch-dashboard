import Menu from "./components/Modules/Menu";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import { Routes, BrowserRouter, Route } from "react-router";
import earth from './assets/earth.jpg';

function App() {
  

  return (
    <BrowserRouter>
      <div className="md:px-11 md:py-5 lg:py-11 w-screen h-dvh bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${earth})` }}>
        <div className="backdrop-blur-md bg-white/5 md:rounded-3xl md:border md:border-white h-full w-full flex flex-col">
          <Menu/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
