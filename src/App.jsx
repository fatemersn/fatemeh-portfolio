import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { SmartInvest, CouponCreation, FoodPro } from "./pages/Cases.jsx";

// Hash routes are plain names (#about), which also works inside hosted pages.
const routes = {
  home: Home,
  about: About,
  "smart-invest": SmartInvest,
  "coupon-creation": CouponCreation,
  foodpro: FoodPro,
};

const currentPath = () => window.location.hash.replace(/^#/, "") || "home";

export default function App() {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const onChange = () => {
      setPath(currentPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const Page = routes[path] || Home;
  return <Page />;
}
