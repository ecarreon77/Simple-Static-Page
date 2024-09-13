import React, { Suspense, useImperativeHandle, useRef } from "react";
import "./App.css"; // Assuming you create an App.css for styling

const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Header = React.lazy(() => import("./pages/Header"));

const AppRoutes = React.forwardRef(({ onScroll }, ref) => {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const headerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToSection: (section) => {
      switch (section) {
        case "header":
          headerRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        case "home":
          homeRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        case "aboutUs":
          aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    },
  }));

  return (
    <div className="app-container">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Always show Header at the top */}
        <div ref={headerRef}>
          <Header />
        </div>

        {/* Render different pages like Home based on the route */}
        <div className="content" ref={homeRef}>
          <Home />
        </div>

        {/* Always show AboutUs at the bottom */}
        <footer className="footer" ref={aboutUsRef}>
          <AboutUs />
        </footer>
      </Suspense>
    </div>
  );
});

export default AppRoutes;
