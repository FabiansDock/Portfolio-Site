import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./components/pages/About";
import Certifications from "./components/pages/Certifications/Certifications";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Socials from "./components/pages/Socials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <AboutPage /> },
      { path: "/projects", element: <Projects /> },
      { path: "/resume", element: <Resume /> },
      { path: "/certifications", element: <Certifications /> },
      { path: "/socials", element: <Socials /> },
    ],
  },
]);

export default router;
