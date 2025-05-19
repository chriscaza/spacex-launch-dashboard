import Menu from "./components/Modules/Menu";
import Dashboard from "./pages/Dashboard";
import earth from './assets/earth.jpg';

function App() {
  

  return (
    <div className="md:px-11 md:py-5 lg:py-11 w-screen h-dvh bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${earth})` }}>
      <div className="backdrop-blur-md bg-white/5 md:rounded-3xl md:border md:border-white h-full w-full flex flex-col">
        <Menu/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
