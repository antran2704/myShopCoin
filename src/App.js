import "./App.scss";
import CopyRight from "./components/CopyRight/CopyRight";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { useViewport } from "./components/hooks/hook";
import { createContext, useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";

export const LoadingTheme = createContext();


function App() {
  const [width] = useViewport()
  const [isLoading, setIsLoading] = useState(true);
  const [render,setRender] = useState(false)
  console.log(render)
  function loading() {
    setIsLoading(true);
  }

  useEffect(() => {
    const handle = setTimeout(function () {
      setIsLoading(false);
      setRender(true)
    }, 1600);
    return () => {
      clearTimeout(handle);
    };
  }, [isLoading]);

  return (
    <LoadingTheme.Provider value={loading}>
      <div className="App">
        <Router>
          <Navbar />
          {width < 700 && <NavbarMobile />}
          <Routes>
              <Route path="/" element= {<Home render = {render}/>}/>
          </Routes>
          {isLoading && <Loading />}
          {width > 700 && <Footer />}
          <CopyRight />
        </Router>
      </div>
    </LoadingTheme.Provider>
  );
}

export default App;
