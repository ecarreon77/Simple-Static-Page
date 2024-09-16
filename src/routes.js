import React, { Suspense, useImperativeHandle, useRef } from "react";
import "./App.css"; // Assuming you create an App.css for styling
import SuspenseFallback from "./components/SuspenseFallback";

// const Home = React.lazy(() => import("./pages/Home"));
// const AboutUs = React.lazy(() => import("./pages/AboutUs"));
// const Header = React.lazy(() => import("./pages/Header"));

const Earring = React.lazy(() => import("./pages/Earring"));
const Necklace = React.lazy(() => import("./pages/Necklace"));
const Ring = React.lazy(() => import("./pages/Ring"));

const AppRoutes = React.forwardRef(({ onScroll }, ref) => {
  const earringRef = useRef(null);
  const necklaceRef = useRef(null);
  const ringRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToSection: (section) => {
      switch (section) {
        case "earring":
          earringRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        case "necklace":
          necklaceRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        case "ring":
          ringRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    },
  }));

  return (
    <div className="app-container">
      <Suspense fallback={<SuspenseFallback />}>
        {/* Render Earring content */}
        <div ref={earringRef} className="earring">
          <Earring />
        </div>

        {/* Render Necklace content */}
        <div className="necklace" ref={necklaceRef}>
          <Necklace />
        </div>

        {/* Render Ring content*/}
        <div className="ring" ref={ringRef}>
          <Ring />
        </div>
      </Suspense>
    </div>
  );
});

export default AppRoutes;
