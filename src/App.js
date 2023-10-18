import Header from "./components/Header";
import Images from "./components/Images";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0">
      <Navbar logo={logo} />
      <Header />
      <Images/>
    </div>
  );
}

export default App;

