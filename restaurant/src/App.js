import "./App.css";
import Card from "./UI/Card";
import clsx from "clsx";
import { IsMobileWidth } from "./utils";
import { IsTabletWidth } from "./utils";
import { IsDesktopSmallWidth } from "./utils";
import { IsDesktopWidth } from "./utils";
import Divider from "@mui/material/Divider";
import Popular_Products from "./components/Popular_Products";
import Amazing from "./components/Amazing";

function App() {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  const desktopSmallWidth = IsDesktopSmallWidth();
  const desktopWidth = IsDesktopWidth();

  return (
    <div>
      <Popular_Products />
      <Amazing />
    </div>
  );
}
export default App;
