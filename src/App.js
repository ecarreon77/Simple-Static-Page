import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import Header from "./pages/Header";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      {/* <AboutUs /> */}
    </BrowserRouter>
  );
}

export default App;
